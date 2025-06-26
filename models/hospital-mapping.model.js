import mongoose from "mongoose";

const mappingSchema = new mongoose.Schema({
    no:String,
    hospitals: Array
})

const Mapping = mongoose.model('hospital-mapping', mappingSchema);

export default Mapping