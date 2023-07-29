import 'dotenv/config'
import Express from "express";
import notFound from "./middleware/not-found.js"
import errorHandler from "./middleware/error-handler.js"
import connectDB from "./db/connect.js"
import productRouter from "./routes/products.js"
const app = Express()
const PORT = process.env.PORT || 3000

//middleware
app.use(Express.json())

//routes

app.get('/', (req, res) => {
    const template = `
        <h1>
            Store Api
        </h1>
        <a href = '/api/v1/products'>
            products
        </a>
    `
    res.send(template)
})

app.use('/api/v1/products', productRouter)

//products route 

app.use(notFound)
app.use(errorHandler)



const start = async () => {
    try {
        //connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log("server running at port", PORT))
    } catch (error) {
        console.log(error);
    }
}

start()