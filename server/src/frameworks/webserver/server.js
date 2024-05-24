import configKeys from "../../config.js"

const serverConfig = (server) => {
    const startServer = () => {
        server.listen(configKeys.PORT, () => {
            console.log("Server listening on Port " + configKeys.PORT);
        });
    };
    return {
        startServer,
    };
};

export default serverConfig;
