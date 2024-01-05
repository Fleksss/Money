import axios from "axios";

const baseUrl = "https://api.coinranking.com/v2";

const http = axios.create({
  baseURL: baseUrl,
});
export default http;