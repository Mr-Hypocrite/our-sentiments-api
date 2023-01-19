import { load } from "cheerio";
import { loadPage } from "./loadPage";

export const scrapeProductData = async ( productId: string ) => {
    const url = `dp/${productId}`;
    const result = await loadPage( url );
    if ( result.message ) {
        return result;
    }
    const productPage = result;
    const $ = load( productPage );
    const productTitle = $( "#productTitle" ).text().trim();
    const productImg = $( ".a-dynamic-image" ).attr( "src" );
    const productData = { title: productTitle, image: productImg };
    return productData;
};
