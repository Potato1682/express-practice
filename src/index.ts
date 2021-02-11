import chalk from "chalk";
import express from "express";
import Logger from "@ptkdev/logger";

// eslint-disable-next-line require-await
const main = async () => {
    const
        app = express(),
        logger =  new Logger({
            path: {
                debug_log: "./debug.log",
                error_log: "./errors.log"
            },
            rotate: {
                encoding: "utf8",
                size: "10M"
            },
            type: "json"
        });

    app.use((_, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.set("view engine", "ejs");
    app.set("views", "./src/views");

    app.route("/")
        .get((request, response) => {
            logger.info("GET / from " + request.hostname);
            response.render("./index.ejs", {
                title: "Hello, world!"
            });
        });

    app.listen(6001, () => {
        logger.info("Server listening on port " + chalk.yellow(6001));
    });
};

main().then(value => value)["catch"]((error) => {
    throw error;
});

