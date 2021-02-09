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

    app.route("/")
        .get((_, response) => {
            response.send("<p>Hello, world!</p>");
        });

    app.listen(8080, () => {
        logger.info("Server listening on port " + chalk.yellow(8080));
    });
};

main().then(value => value)["catch"]((error) => {
    throw error;
});

