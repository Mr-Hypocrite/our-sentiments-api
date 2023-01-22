import * as dotenv from "dotenv"
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./routes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5555;


app.get( "/", ( req: Request, res: Response, next: NextFunction ) => {
    res.send( `Welcome to Our Sentiments API` );
    next();
} );

// Middlewares
app.use( cors() );
app.use( express.json() );
app.use( "/products", productRoutes );

app.listen( PORT, () => {
    console.log( `Listening on Port: ${PORT}` );
} );
