import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Design from '../models/designModel';

const designRouter = express.Router();

/* Gets all orders */
designRouter.get('/', expressAsyncHandler(async (req, res) => {
    const designs = await Design.find({});
    res.send(designs);
}));

/* Creates a new order in database */
designRouter.post('/', expressAsyncHandler(async (req, res) => {
    try {
        const design = new Design({
            projectName: req.body.projectName,
            clientName: req.body.clientName,
            projectAddress: req.body.projectAddress,
            projectHomeType: req.body.projectHomeType,
            projectType: req.body.projectType,
            projectEnvironment: req.body.projectEnvironment,
            projectLiving: req.body.projectLiving,
            projectKitchen: req.body.projectKitchen,
            projectDinning: req.body.projectDinning,
            projectBedrooms: req.body.projectBedrooms,
            projectPowderRoom: req.body.projectPowderRoom,
            projectBathrooms: req.body.projectBathrooms,
            projectBasement: req.body.projectBasement,
            projectPatio: req.body.projectPatio,
            projectMudRoom: req.body.projectMudRoom,
            extraComments: req.body.extraComments,
            inspoImage01: req.body.inspoImage01,
            inspoImage02: req.body.inspoImage02,
            inspoImage03: req.body.inspoImage03,
        });
        const createdDesign = await design.save();
        res.status(201).send({ message: 'New Design Created', design: createdDesign });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}));

export default designRouter;
