import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://alifisseha:8nFrp4XVfyDctfIj@fisseha.hgryy.mongodb.net/Restaurn"
    )
    .then(() => console.log("DB-connected"));
};
