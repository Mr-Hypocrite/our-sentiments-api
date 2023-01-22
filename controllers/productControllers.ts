import { scrapeReviewData } from './../helpers/scrapeReviews';
import { NextFunction, Request, Response } from "express";
import { loadPage, scrapeProductData, scrapeProducts } from "../helpers";

export const getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { productName } = req.params;
    const products = await scrapeProducts( productName );
    res.send( products );
};

export const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { productId } = req.params;
    const productData = await scrapeProductData( productId );
    res.send( productData );
};

export const getProductReviews = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { productId } = req.params;
    const reviewData = await scrapeReviewData(productId);
    res.send( reviewData );
};
