import { AxiosError } from "axios";
import { load } from "cheerio";
import { axiosInstance } from "./axiosInstance";

export const loadPage = async ( url: string ) => {
    try {
        const { data: htmlContent } = await axiosInstance.get( url );
        return htmlContent;
    } catch ( error: any ) {
        const axiosError: AxiosError = error;
        const { message, status, code } = axiosError;
        const customError = {
            message: message,
            status: status,
            code: code
        };
        return customError;
    }
};
