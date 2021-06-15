const express= require("express");
const path= require("path");
const app= express();

const publicPath = path.resolve(__dirname,'./public');
app.use( express.static(publicPath));

/*  CODIGO MODIFICADO A PEDIDO DE JERO PARA QUE LO PUEDA LEVANTAR EL. 
app.listen((3000), () => {
    console.log('Servidor corriendo en el puerto 3000');
});
*/

app.listen(process.env.PORT || 3000, function() {   /*SIGNIFICA QUE DEBE BUSCAR LA VARIABLE PROCESS.ENV.PORT*/
    console.log('Servidor corriendo en el puerto 3000');
})


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/home.html', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.get('/register.html', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});


/*
app.listen(3300, function(){
    console.log('Servidor 3300 corriendo!')
});
app.get("/MercadoLiebre_home",(req,res) =>{
    res.sendFile(path.join(__dirname , './views/home.html'));  // Permite enviar el archivo HTML
});

app.get("/MercadoLiebre_Registro",(req,res) =>{
    res.sendFile(path.join(__dirname , './views/register.html'));  // Permite enviar el archivo HTML
});

app.get("/MercadoLiebre_Login",(req,res) =>{
    res.sendFile(path.join(__dirname , './views/login.html'));  // Permite enviar el archivo HTML
});

app.use(express.static(path.join(__dirname,'./public')));

// jero codeó:    app.use(express.static(__dirname +'/public'));  
*/