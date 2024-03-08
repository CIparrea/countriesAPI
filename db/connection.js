import mongoose from 'mongoose';
import chalk from 'chalk';

mongoose.set("returnOriginal", false);

const MONGODB_URI = process.env.MONGODB_PROD || 'mongodb://127.0.0.1:27017/countries_api'

mongoose.connect(MONGODB_URI).catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on('disconnected', () => console.log(chalk.bold("Disconnected from MpongoDB!")))
mongoose.connection.on('error', error => console.error(chalk.bold("Error connecting to MongoDB!", error)))

export default mongoose.connection