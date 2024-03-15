//set up an express http server on the local machine, on port 8080.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('node:path');

const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false})); //I really do not understand this. yet.

//the following command never executes if there is a index.html file in public
app.get('/',(req,res)=>{
	console.log(req.method);
//	console.log(__dirname);
	res.send("GET request")
	
	// res.sendFile(path.resolve(__dirname,'./HWHaiku.txt'));
//	res.end();
})

app.post('/', (req, res)=>{
	//console.log(req.body);
	const guest = req.body.name;
	res.send(`Alrighty, ${guest}. <br> Glad to have you with us. `);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
