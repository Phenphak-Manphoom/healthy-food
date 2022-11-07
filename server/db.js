import { mongoose } from "mongoose";
const mongoURL =
  "mongodb+srv://kpinya:peesing555@cluster.fzjzygp.mongodb.net/healthy-food";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
export const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connection Successfully");
});
db.on("error", () => {
  console.log("Connection Failed");
});
