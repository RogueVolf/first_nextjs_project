import mongoose from "mongoose";

let isConnected = false;

export const connecttoDB = async () => {
    mongoose.set("strictQuery",true);

    if(isConnected)
    {
        console.log("MongoDB connected");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName : 'NextjsLearner',
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log("MongoDB connected");
    } catch (error) {
        console.log(error)
    }
}