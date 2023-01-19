import { Router } from "express";
import { getProduct, getProductReviews, getProducts } from "../controllers";

const router = Router();

router.get( "/", ( req, res, next ) => {
    res.send( "this is products route" );
} );
router.get( "/id/:productId", getProduct );
router.get( "/:productName", getProducts );
router.get( "/:productId/reviews", getProductReviews );

export default router;
