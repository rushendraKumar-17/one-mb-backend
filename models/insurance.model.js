import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
    no: String,
    Insurer: String,
    Registered: String,
    Corporate: String,
    CEO: String,
    CMD: String,
    Appointed: String,
    Actuary: String,
    Telephone: String,
    Fax: String,
    address: String,
    Website: String
})


const Insurance = mongoose.model('insurance', insuranceSchema);

export default Insurance;


// no
// "1"
// Insurer
// "Acko General Insurance Limited"
// Registered/Corporate Address
// " 2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main road…"
// CEO/CMD
// "Mr.Animesh Kumar Das"
// Appointed Actuary
// "Mr. Rahul Khetan"
// Telephone no./Fax no. address of the Insurer
// "/ Phone: 022 62672525"
// Website
// ": www.acko.com"