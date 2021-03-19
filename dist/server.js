"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config"));

var _designRouter = _interopRequireDefault(require("./routers/designRouter"));

var _uploadRouter = _interopRequireDefault(require("./routers/uploadRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// used so we can access information from other urls

/* Below we are connecting to the database we have created */
_mongoose.default.connect(_config.default.MONGODB_URL, {
  useNewUrlParser: true,
  // These options are used so we don't show errors in the console
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.log(error.reason);
});

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use('/uploads', _express.default.static(_path.default.join(__dirname, '/../uploads')));
app.use(_express.default.static(_path.default.join(__dirname, '/../Front-End')));
app.use('/api/uploads', _uploadRouter.default);
app.use('/api/submitdefinitions', _designRouter.default);
app.get('*', (req, res) => {
  res.sendFile(_path.default.join(__dirname, '/../Front-End/index.html'));
}); // eslint-disable-next-line no-unused-vars

app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({
    message: err.message
  });
});
app.listen(5000, () => {
  console.log('Serve at http://localhost:5000');
});