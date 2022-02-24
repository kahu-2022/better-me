import request from "superagent";

export function getQuotes() {
  return request.get("/api/v1/quotes").then((response) => response.body);
}
