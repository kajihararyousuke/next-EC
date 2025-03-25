import mongoose from "mongoose"
const connectDB = async() => {
  try{  
    await mongoose.connect("mongodb+srv://ryousuke478478:GnHN9PL9Fc52tdkR@cluster0.f4tui.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Success: Connected to MongoDB")
  }catch(err){
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}
export default connectDB