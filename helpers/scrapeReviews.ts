import { load } from "cheerio";
import { loadPage } from "./loadPage";

type ReviewData = {
    reviewTitle: string | undefined;
    reviewerName: string | undefined; 
    reviewBody: string | undefined;
    reviewStars: number | undefined;
};

export const scrapeReviewData = async ( productId: string ) => {
    const url = `product-reviews/${productId}/reviewerType=all_reviews&pageNumber=2`;
    const result = await loadPage( url );
    if ( result.message ) {
        return result;
    } 
    let productReviews :ReviewData[] = [];
    const reviewPage = result;
    const $ = load( reviewPage );
            $( `#cm_cr-review_list` )
                .find( `.a-section.celwidget` )
                .each( ( i, el ) => {
                    const reviewerName = $( el ).find( `.a-profile-name` ).text();
                    const reviewTitle = $( el ).find( `.review-title` ).text();
                    const reviewBody = $( el )
                        .find( `.review-text` )
                        .children( "span" )
                        .text();
                    const reviewStars = $( el ).find( `.a-icon-star` ).text();
                    productReviews.push( {
                        reviewerName: reviewerName.trim(),
                        reviewTitle: reviewTitle.trim(),
                        reviewBody: reviewBody.trim(),
                        reviewStars: parseFloat( reviewStars.split( " " )[ 0 ] )
                    } );
                } );
    return productReviews;
};

