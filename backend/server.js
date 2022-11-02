const app = require('./app');
const {connectDatabase }= require('./config/database')

connectDatabase();




app.listen(process.env.PORT, () => {
    console.log(`sever is running on the port ${process.env.PORT}`);
})