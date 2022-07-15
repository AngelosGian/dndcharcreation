const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3003

app.use(cors())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});