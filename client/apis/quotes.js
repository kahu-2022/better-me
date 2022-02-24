import request from "superagent";

export function getQuotes() {
  return request.get("https://type.fit/api/quotes").then((response) => {
    console.log("res.body", response.body);
    console.log("res.text", typeof response.text);

    return JSON.parse(response.text);
  });
}
