import mongoose from 'mongoose';

const designSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    clientName: { type: String, required: true },
    projectAddress: {
        projectStreet: String,
        projectCity: String,
        projectCountry: String,
    },
    projectHomeType: String,
    projectType: String,
    projectEnvironment: String,
    projectLiving: {
        style: String,
        quantityPeople: Number,
        millwork: String,
    },
    projectKitchen: {
        kitchenIsland: String,
        appliances: Array,
        kitchenShelves: String,
    },
    projectDinning: {
        style: String,
        quantityPeople: Number,
        millwork: String,
    },
    projectBedrooms: {
        quantityPeople: Number,
    },
    projectPowderRoom: {
        vanity: String,
    },
    projectBathrooms: {
        washing: String,
    },
    projectBasement: {
        usage: String,
    },
    projectPatio: {
        ammenities: Array,
    },
    projectMudRoom: {
        storage: String,
    },
    extraComments: String,
    inspoImage01: String,
    inspoImage02: String,
    inspoImage03: String,
});

const Design = mongoose.model('Design', designSchema);

export default Design;
