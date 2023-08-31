import axios from "axios";
// import HttpClient from "../http-client";
import { Fetcher } from "../meta";

// const httpClient = new HttpClient();

export const fetcher: Fetcher = async (url, options) => {
  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
