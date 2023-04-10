module.exports = {
    port: 4000, 
    cors_options: {
        origin: `https://localhost:${this.port}`,
        optionSuccessStatus: 200
    },
    secret: '856F7CC3184FF7C8D1D93C158224A',
	database: 'JobCourses'
}