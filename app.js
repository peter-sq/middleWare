import express from 'express';
import path from "path"
import router from './Routes/api.js';
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
import logger from './midleWare/logger.js';
const app = express();



//init middleware
// app.use(logger)

app.use(express.static(__dirname + 'public'));

app.use('/api/members', router)



app.get('/', (req, res) => {
    // res.send('<h1>Hello boy</h1>');
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`the App is running on port ${PORT}`));