"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _designModel = _interopRequireDefault(require("../models/designModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const designRouter = _express.default.Router();
/* Gets all orders */


designRouter.get('/', (0, _expressAsyncHandler.default)(async (req, res) => {
  const designs = await _designModel.default.find({});
  res.send(designs);
}));
/* Creates a new order in database */

designRouter.post('/', (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const design = new _designModel.default({
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
      inspoImage03: req.body.inspoImage03
    });
    const createdDesign = await design.save();
    res.status(201).send({
      message: 'New Design Created',
      design: createdDesign
    });
  } catch (err) {
    res.status(500).send({
      message: err.message
    });
  }
}));
var _default = designRouter;
exports.default = _default;