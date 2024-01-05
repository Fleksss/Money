import http from "../../axios.config";

export async function fetchBitcoin() {
  return await http.get("/coins");
}