const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDatabase = () => {
    mongoose.connect(`mongodb://localhost:27017/test_1`, {useNewUrlParser : true, useUnifiedTopology : true }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
}

module.exports = connectDatabase;