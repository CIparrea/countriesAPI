import mongoose from "mongoose";

const Schema = mongoose.Schema

let CountrySchema = new Schema({
    "name": { type: String },
    "capital": { type: String },
    "region": { type: String },
    "latlng": [{ type: Number }],
    "timezones": { type: String },
    "language": { type: String },
    "flagIcon": { type: String },
    "currency": { type: String },
    "population": { type: Number },
    "flag": { type: String}
})

export default mongoose.model("countries", CountrySchema)
