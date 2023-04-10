module.exports = {
    port: 4000, 
    cors_options: {
        origin: `https://localhost:${this.port}`,
        optionSuccessStatus: 200
    },
}