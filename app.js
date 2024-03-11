const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
const connectDB = require('./db/connect');
const productRouter = require('./routes/products');
const app = express();
app.use(express.json());
require('express-async-errors');

//routes

app.get('/', (req, res) => {
    res.send('hello');
})

app.use('/api/v1/products', productRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.port || 3000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();