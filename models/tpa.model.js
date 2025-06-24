import mongoose from "mongoose";

const tpaSchema = new mongoose.Schema({
    no: String,
    name: String,
    RegNo: String,
    CORvalidUpto: String,
    NameOfCAOCEOAddress: String,
    ContactDetails: String
})

const Tpa = mongoose.model('tpa', tpaSchema);

export default Tpa;

// no
// "1"
// name
// "Medi Assist Insurance TPA Private Limited"
// RegNo
// "No.003"
// CORvalidUpto
// "20-Mar-2026"
// NameOfCAO/CEO/Address
// "Dr. Mukunda Madhava,  Chief Administrative Officer, Tower D, 4th Floor…"
// Contact Details
// "www.mediassist.in"