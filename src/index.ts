import express from "express";

const
    app = express(),
    server = app.listen(8080, () => {
        console.log("Server listening on", 8080);
    });

app.get("/", (_, response) => {
    response.send("<p>Hello, world!</p>");
});

