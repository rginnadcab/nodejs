const app = require("./app");
const port = 3000;
const connectDatabase = require("./config/database");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncauth Exception`);
    process.exit(1);
})

connectDatabase();


const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})


// unhandledpromise rejection

process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise rejection`);
    server.close(() => {
        process.exit(1);
    })
})
