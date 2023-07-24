const express = require('express');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});