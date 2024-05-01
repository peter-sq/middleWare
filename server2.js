import { createServer } from 'http';
const PORT = 8000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];


//logger middle ware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();

}

//Route Handler for GET /api/users
const getUserHandler = (req, res) => {
    res.end()

}

//Route Handler for GET /api/user:id
const getUserByIdHandler = (rew, res) =>{
    const id = req.url.split('/')[3];
    console.log(id);
    const user = users.find((user) => user.id === parseInt(id));

    if(user){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(user));
        res.end();
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: 'User not found'}));
        res.statusCode = 404;
        res.end();
    }

    //Not Found Handler


}


//Json middleware 
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next()

}


const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
          }
          else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
         
         
          }
          else{
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({message: 'Route not found'}));
            res.statusCode = 404;
            res.end();
          }
        

    });
 
    });


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});