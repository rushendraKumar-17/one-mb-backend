import mongoose from "mongoose"

const mappingSchema = new mongoose.Schema({
    no:String,
    name: String,
    insurer_type: String,
    contact: Object,
    TPAs: Array
})

const Mapping = mongoose.model('mapping', mappingSchema);

export default Mapping


// {
//     "name": "New India Assurance",
//     "insurer_type": "Public",
//     "contact": {
//       "website": "newindia.co.in",
//       "phone": "022-22624987",
//       "email": "cmd.nia@newindia.co.in"
//     },
//     "TPAs": [
//       {
//         "name": "Medi Assist Insurance TPA Pvt Ltd",
//         "no": "1",
//         "licence": "No.003"
//       },
//       {
//         "name": "MDIndia Health Insurance TPA Pvt Ltd",
//         "no": "2",
//         "license": "No.005"
//       },
//       {
//         "name": "Paramount Health Services & Insurance TPA Pvt Ltd",
//         "no": "3",
//         "license": "No.006"
//       },
//       {
//         "name": "Heritage Health Insurance TPA Pvt Ltd",
//         "no": "4",
//         "license": "No.008"
//       },
//       {
//         "name": "Family Health Plan Insurance TPA Ltd",
//         "no": "5",
//         "license": "No.013"
//       },
//       {
//         "name": "Raksha Health Insurance TPA Pvt Ltd",
//         "license": "No.015"
//       },
//       {
//         "name": "Vidal Health Insurance TPA Pvt Ltd",
//         "no": "6",
//         "license": "No.016"
//       },
//       {
//         "name": "Volo Health Insurance TPA Pvt Ltd (East West Assist)",
//         "no": "7",
//         "license": "No.018"
//       },
//       {
//         "name": "Medsave Health Insurance TPA Ltd",
//         "no": "8",
//         "license": "No.019"
//       },
//       {
//         "name": "Genins India Insurance TPA Ltd",
//         "no": "9",
//         "license": "No.020"
//       },
//       {
//         "name": "Health India Insurance TPA Services Pvt Ltd",
//         "no": "10",
//         "license": "No.022"
//       },
//       {
//         "name": "Good Health Insurance TPA Ltd",
//         "no": "11",
//         "license": "No.023"
//       },
//       {
//         "name": "Park Mediclaim Insurance TPA Pvt Ltd",
//         "no": "12",
//         "license": "No.025"
//       },
//       {
//         "name": "Safeway Insurance TPA Pvt Ltd",
//         "no": "13",
//         "license": "No.026"
//       },
//       {
//         "name": "Ericson Insurance TPA Pvt Ltd",
//         "no": "14",
//         "license": "No.035"
//       }
//     ]
//   },