const express = require('express');
const app = express();
const cors = require('cors');
// const PORT = 3003
const env = require('dotenv');
env.config({ path: './config/.env' });

app.use(cors({origin: 'http://localhost:3003'}))
app.use('/', express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen( process.env.PORT, ()=> console.log(`It is alive on ${process.env.PORT}`));