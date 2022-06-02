import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mukmargo:LOSangelesGUNS1@alura.ga378br.mongodb.net/alura-node?")

let db = mongoose.connection;

export default db;