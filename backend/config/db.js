import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://${process.env.SERVER}/${process.env.DATABASE}`
    //   {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateUrlParser: true
    // }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1)
  }
}

export default connectDB
