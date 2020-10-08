var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7junio',
    database: 'mydb'
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});




//Usuarios

function addUsuario(nombre, apellido, usuario, contraseña) {
    var miQuery = "INSERT INTO " +
        "USUARIO(nombre, apellido, usuario, contraseña) VALUES (" +
        "'" + nombre  +"'," +
        "'" + apellido + "'," +
        "'" + usuario + "' ," +
        "'"+contraseña +"');";
        connection.query(miQuery, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            console.log('Usuario Creado')
            return "creado";
        }
    });
}
app.post('/users', (request, response) => {
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var usuario = request.body.usuario;
    var contraseña = request.body.password;
    response.send(addUsuario(nombre, apellido, usuario, contraseña));
})

app.delete('/users/:usuario',(req,res)=>{
    const usuario = req.params.usuario;
    var miQuery ="DELETE FROM usuario WHERE usuario = '"+usuario+"';"
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

//SIGN IN
app.post('/signin', (req, res) => {
    const contraseña = req.body.password; //Req.body.(nombre como esta guardado el elemento en el html)
    const user = req.body.user;
    var miQuery = 'SELECT EXISTS(' +
        "select 1 " + 'FROM USUARIO WHERE usuario = ' + '\'' + user + '\'' +
        'AND contraseña = ' + '\'' + contraseña + '\') as inicio;'
    var respuesta = "Loggeado con exito";
    connection.query(miQuery, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result[0].inicio);
            res.send(result[0]);
        }
    });
})

app.get('/users',(req,res)=>{
    var miQuery ="SELECT * FROM usuario;";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/users/:usuario',(req,res)=>{
    const usuario = req.params.usuario;
    var miQuery ="SELECT * FROM usuario WHERE usuario ='"+ usuario+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result[0]);
        }
    });
});
app.get('/user/:idUSUARIO',(req,res)=>{
    const idUSUARIO = req.params.idUSUARIO;
    var miQuery ="SELECT * FROM usuario WHERE idUSUARIO ='"+ idUSUARIO+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result[0]);
        }
    });
});

//Editar user

app.put('/users/:usuario',  (req,res)=>{
    const usuario = req.params.usuario;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const contraseña = req.body.password;
    var miQuery ="UPDATE usuario SET nombre =" +
    "\'" + nombre + "\' ,   apellido = " +
    "\'" + apellido + "\' ,   usuario = " +
    "\'" + usuario + "\' ,   contraseña = " +
    "\'" + contraseña + "\'  WHERE usuario = '" +usuario+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

//Eliminar Mensaje
app.get('/mensajes/:contenido',(req,res)=>{
    var contenido = req.params.contenido;
    var miQuery ="SELECT * FROM MENSAJE WHERE contenido = '"+contenido+"';"; 
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.get('/mensajes/',(req,res)=>{
    var miQuery ="SELECT * FROM MENSAJE;"; 
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
//Obtener Mensajes Eliminados

app.get('/mensajeseliminados',(req,res)=>{
    var miQuery ="SELECT * FROM MENSAJE WHERE estado_eliminado = true;"; 
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});


app.put('/mensajes/:contenido',  (req,res)=>{
    var contenido = req.params.contenido;
    var miQuery ="UPDATE mensaje SET estado_eliminado = true," +
    "contenido_eliminado = \'Mensaje eliminado...\' WHERE contenido = '" +contenido+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});


//Mostrar contactos
app.get('/contactos/:usuario',(req,res)=>{
    const usuario = req.params.usuario;
    var miQuery ="SELECT * FROM usuario WHERE usuario !='"+ usuario+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
//Salas (CHATS)
app.get('/salas',(req,res)=>{
    var miQuery ="SELECT * FROM sala;";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/salas/:nombre',(req,res)=>{
    const nombre = req.params.nombre;
    var miQuery ="SELECT * FROM sala WHERE nombre='"+nombre+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/salas/:idSala',(req,res)=>{
    const idSala = req.params.idSala;
    var miQuery ="SELECT * FROM sala WHERE idSala =+"+idSala+";";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.get('/salas/eliminar/:nombre',(req,res)=>{
    const nombre = req.params.nombre;
    var miQuery ="SELECT * FROM sala WHERE nombre ='"+nombre+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.delete('/salas/eliminar/:nombre',(req,res)=>{
    const nombre = req.params.nombre;
    var miQuery ="DELETE FROM sala WHERE nombre= '"+nombre+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
//Mensajes
app.get('/salas/:idSala/mensajes',(req,res)=>{
    const idSala = req.params.idSala;
    var miQuery ="SELECT * FROM mensaje WHERE idSala = " +idSala+";";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.delete('/salas/:idSala/mensajes',(req,res)=>{
    const idSala = req.params.idSala;
    var miQuery ="DELETE FROM mensaje WHERE idSala = " +idSala+";";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
function addMensaje( contenido, idSala,nombreEmisor) {
    var miQuery = "INSERT INTO " +
        "MENSAJE(contenido, idSala,nombreEmisor) VALUES(" +
        
        "\'" + contenido + "\'," +
        "" + idSala + "," +
        "\'" + nombreEmisor + "\' )" 
        console.log(miQuery)
        connection.query(miQuery, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            console.log('Mensaje agregado')
            return "creado";
        }
    });
}
app.post('/salas/:idSala/mensajes', (request, response) => {
    var idSala = request.params.idSala;
    var contenido = request.body.contenido;
    var nombreEmisor = request.body.nombreEmisor;

    response.send(addMensaje( contenido, idSala,nombreEmisor));

})



//Salas de cada usuario
app.get('/salas_usuario/:usuario',(req,res)=>{
    const usuario = req.params.usuario;
    var miQuery ="SELECT sala.idSala, usuario.usuario, sala.descripcion, sala.imagen, sala.nombre, usuario.ultima_conexion FROM sala_usuario INNER JOIN usuario INNER JOIN sala ON"+
    " sala_usuario.idUsuario = usuario.idUSUARIO and sala_usuario.idSala = sala.idSALA and usuario.usuario = '"+usuario+"';";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

//Agregar salas a usuario
app.get('/salasUsuario',(req,res)=>{
    var miQuery ="SELECT * FROM sala_usuario;";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});
app.get('/salasUsuario/:idSala',(req,res)=>{
    const idSala = req.params.idSala
    var miQuery ="SELECT * FROM sala_usuario WHERE idSala = "+idSala+";";
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});

app.post('/salasUsuario',  (req,res)=>{
    const idUsuario = req.body.idUsuario;
    const idSala = req.body.idSala;

    var miQuery ="INSERT INTO sala_usuario (idSala, idUsuario) VALUES ("+idSala+","+idUsuario+");"
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result[0]);
        }
    });
});

//Borrar salas usuario
app.delete('/salasUsuario/:idSala',(req,res)=>{
    const idSala = req.params.idSala;

    var miQuery ="DELETE FROM sala_usuario where idSala="+ idSala+" ;"
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});


app.post('/salas_usuario/:usuario',(req,res)=>{
    const usuario = req.params.usuario;
    var miQuery ="INSERT INTO sala_usuario(idSala) SELECT idSala FROM sala WHERE nombre ='"+usuario+"';"
    connection.query(miQuery, (err,result) => {
        if(err){
            throw err;
        }else{
            console.log(result);
            res.send(result);
        }
    });
});














/* function addSala(descripcion, nombre) {
    var miQuery = "INSERT INTO " +
        "SALA(descripcion, imagen, nombre) VALUES(" +
        "'"+ descripcion + "'," +
        "'https://picsum.photos/200'," +
        "'" + nombre + "' )" 
        console.log(miQuery)
        connection.query(miQuery, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            console.log('Sala agregado')
            return "creado";
        }
    });
} */

app.post('/salas', (request, response) => {
    var descripcion = request.body.descripcion;
    var nombre = request.body.nombre;
    var miQuery = "INSERT INTO " +
    "SALA(descripcion, imagen, nombre) VALUES(" +
    "'Chat nuevo'," +
    "'https://picsum.photos/200'," +
    "'" + nombre + "' )" 
    console.log(miQuery)
    connection.query(miQuery, function (err, result) {
    if (err) {
        throw err;
    } else {
        response.send(result)
        return "creado";
    }
});
})
