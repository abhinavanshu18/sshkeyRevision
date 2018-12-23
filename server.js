const express = require('express')
const hbs = require('hbs')

var app = express();

app.set('view engine','hbs')

hbs.registerPartials(__dirname+'/views/partials')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {      
  res.render('home.hbs',{
     pageName:'My Home Page',
     presentDate: new Date().getFullYear()
  })    
})
 app.use((req,res,next) => {
//     console.log('Print this : ');
//     console.log(`req.url: ${req.url} , req.method: ${req.method} ,req.header: ${req.header} `);
     console.log('Req : ', req);
     next();
 })
//app.get('/about',(req,res) => {
//    res.send({
//        errorMessage:'Unable to handle the request'
//    })
//    res.render('about.hbs', {
//        pageName:'My Page',
//        presentDate: new Date().getFullYear()
//    });
//})
//app.get('/about',(req,res) => {
//    res.render('')
//})

app.listen(3000 ,() => {
    console.log('Serve is up on port 3000');
});

//app.get('/about',
//       res.render('about.hbs',{    
//}))
//
//hbs.renderHelper('getCurrentYear',() => {
//    return new Date().getFullYear();
//})

