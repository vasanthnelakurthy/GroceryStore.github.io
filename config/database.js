const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    database:'grocery online',
    password:'jZjDOXGXQIYJWKUQpTzf',
    multipleStatements:true
});
db.connect(err=>{
    if(!err)
    {
        console.log('Database connected');
    }
    else
    {
        console.log('Error occured '+err);
    }
});
module.exports=db;