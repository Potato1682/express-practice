import express from "express";

const app = express();

app.use((_, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (_, response) => {
    response.send("<p>Hello, world!</p>");
});

app.listen(8080, () => {
    console.log("Server listening on", 8080);
});

