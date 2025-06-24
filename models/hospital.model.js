import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    HospitalName: String,
    Address: String,
    City: String,
    State: String,
    Pincode: String,
    Contact: String,
    TPA: Array,
    Latitude: String,
    Longitude: String,
    no: String
});

const Hospital = mongoose.model('hospital', hospitalSchema);

export default Hospital;




// HospitalName
// "Aditya Nursing Home, Andhra Pradesh"
// Address
// "1-541-135, College Road College Road Adoni - 518302 Dist: Kurnool Stat…"
// City
// "Adoni"
// State
// "Andhra Pradesh"
// Pincode
// ""
// Contact
// "STD(08512) Tel: 231006 230792 Fax:"

// TPA
// Array (1)
// 0
// "5"
// Latitude
// 15.6308769
// Longitude
// 77.2855852
// no
// 1