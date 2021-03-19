"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const designSchema = new _mongoose.default.Schema({
  projectName: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  projectAddress: {
    projectStreet: String,
    projectCity: String,
    projectCountry: String
  },
  projectHomeType: String,
  projectType: String,
  projectEnvironment: String,
  projectLiving: {
    style: String,
    quantityPeople: Number,
    millwork: String
  },
  projectKitchen: {
    kitchenIsland: String,
    appliances: Array,
    kitchenShelves: String
  },
  projectDinning: {
    style: String,
    quantityPeople: Number,
    millwork: String
  },
  projectBedrooms: {
    quantityPeople: Number
  },
  projectPowderRoom: {
    vanity: String
  },
  projectBathrooms: {
    washing: String
  },
  projectBasement: {
    usage: String
  },
  projectPatio: {
    ammenities: Array
  },
  projectMudRoom: {
    storage: String
  },
  extraComments: String,
  inspoImage01: String,
  inspoImage02: String,
  inspoImage03: String
});

const Design = _mongoose.default.model('Design', designSchema);

var _default = Design;
exports.default = _default;