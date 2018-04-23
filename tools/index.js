

import webpack from 'webpack';
import config from '../webpack.config.dev';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");


const compiler = webpack(config);

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static(path.join(__dirname, '../public')));


app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});


// app.get('/', (req, res) => res.send('Hello World!'));




app.listen(3000, () => console.log('Example app listening on port 3000!'))