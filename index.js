import express from 'express';
import cors from "cors";
import Tpa from './models/tpa.model.js';
import connectDb from './config/connectDb.js';
import Insurance from './models/insurance.model.js';
import Mapping from './models/mapping.model.js';
import Hospital from './models/hospital.model.js';
const app = express();
connectDb()
app.use(express.json());
app.use(cors())
app.get("/tpa", async(req, res) => {
    const data = await Tpa.find({});
    return res.json(data);
})

app.get("/health-insurer", async(req, res) => {
    const data = await Insurance.find({});
    return res.json(data);
})

app.post("/get-tpa", async(req, res) => {
  const {id} = req.body;
  console.log(id)
  const data = await Mapping.findOne({no:id});
  return res.json(data);
})


app.post('/hospital', async(req, res) => {
    const {id} = req.body;
    console.log(id)
    const data = await Hospital.find({ TPA: id })
    const dataToSend = data.map((item) => {
        return {
            HospitalName: item.HospitalName,
            Address: item.Address,
            
            Contact: item.Contact,
          
            Latitude: item.Latitude,
            Longitude: item.Longitude,
            no: item.no
        }
    })
    return res.json(dataToSend);
})
app.listen(8001, () => {
  console.log('Server started on port 8001');
})