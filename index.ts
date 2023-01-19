import express from "express";
import cors from "cors";
import { productRoutes } from "./routes";

const app = express();

const PORT = process.env.PORT || 5555;

app.get( "/", ( req, res ) => {
    res.send( `Welcome to Our Sentiments API` );
} );

// Middlewares
app.use( cors() );
app.use( express.json() );
app.use( "/products", productRoutes );

app.listen( PORT, () => {
    console.log( `Listening on Port: ${PORT}` );
} );
