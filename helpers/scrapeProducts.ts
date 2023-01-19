import { load } from "cheerio";
import { loadPage } from "./loadPage";

type ProductData = {
    productTitle: string | undefined;
    productId: string | undefined;
    productImg: string | undefined;
};

export const scrapeProducts = async ( productName: string ) => {
    const url = `s?k=${productName}`;
    const result = await loadPage( url );
    if ( result.message ) {
        return result;
    }
    const productPage = result;
    const $ = load( productPage );
    let products: ProductData[] = [];
    $( ".s-result-list.s-search-results" ).each( ( i, el ) => {
        products = [];
        $( el )
            .find( ".s-asin" )
            .each( ( i, el ) => {
                const productTitle = $( el )
                    .find( ".a-color-base.a-text-normal" )
                    .text();
                const productId = $( el ).attr( "data-asin" );
                const productImg = $( ".s-image", el ).attr( "src" );
                products.push( {
                    productId: productId,
                    productImg: productImg,
                    productTitle: productTitle
                } );
            } );
    } );
    return products;
};
