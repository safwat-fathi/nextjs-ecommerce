import axios from "axios";
import { Fetcher } from "../meta";

export const fetcher: Fetcher = async (url, options) => {
  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
