import express from 'express';
import cors from 'cors'; // used so we can access information from other urls
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import designRouter from './routers/designRouter';
import uploadRouter from './routers/uploadRouter';

/* Below we are connecting to the database we have created */
mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true, // These options are used so we don't show errors in the console
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error.reason);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../Front-End')));

app.use('/api/uploads', uploadRouter);
app.use('/api/submitdefinitions', designRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../Front-End/index.html'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const status = err.name && err.name === 'ValidationError' ? 400 : 500;
    res.status(status).send({ message: err.message });
});

app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});
