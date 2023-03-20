const Client = require('pg').Client
const cliente = new Client ({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "postgres"
})

cliente.connect();
cliente.query ("select * from zero")
.them(result => {
  const resultado = results.rows
  //console.log(resultado)
  console.table(resultado)
})
.finally(() => cliente.end())


//  client.connect();
// var res =  client.query("SELECT * FROM zero");
// res.rows.forEach(row=>{
//     console.log(row);
// });
//  client.end();

// --------------------------------------

// function logar_db() {
//   // const { Client } = require('pg')
//   // const client = new Client({
//   let { Client } = require('pg')
//   let client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '123456',
//     port: 5432,
//   });

//   client.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
// };

// function logar() {
//   var x = document.getElementById("usuario").value;
//   var y = document.getElementById("senha").value;

//   alert("usuario ok");

//   logar_db_();

//   alert("conectado");

// }


