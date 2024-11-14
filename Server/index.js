/*how common js works, it uses request instead of import
function require returns an obj and the obj gets stored in the variable
since express doesn't start with a "." it will lok for it in the node module folder */
const express = require("express");
const app = express();/*create instance of the express pipeline, everytime a message comes in to the port, the operating system gives the message to express and express goes to find out which function it should run*/
const userController = require("./controllers/users");
const productController = require("./controllers/products");


const PORT= 3000;

//Middleware
app.use(express.json())
app.use(express.static(__dirname +"/dist"))//Static, is a middleware that takes a look at every request, way to make an actual web server

//Controllers

/*most basic one is getting without a path*/
/*registering an action in the pipeline, when a message comes in with the get function and the appl equals "/" which means nothing, than execute this function*/
/*param one is all info about req, param 2 obj with all methods need to create a most basic response */
app
  .get("/", (req, res, next) => {
    res.send("Hello World");
  })
  .get("/about", (req, res) => {
    res.send("About Us");
  })
  .use("/api/v1/users", userController)
  .use("/api/v1/products", productController)

  .get("*", (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html")//asking for any resource and not handled by anything, just give it index.html
  })

  //Error Handling
  //whats different about this app use is that it uses 4 parameters so it's an error handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status ?? 500).send(err); //when java gets to send it sends json back
  })

/*This is an Asynchronous function.Once pipeline is set up, last thing to do is listen? 
anytime see num in the middle of the code its a magin num
compiler (can't figure out if they're right or if they're wrong)
 and computer don't know what the number means 
 the number should just be a CONSTANT obviously */
 console.log("Step #1")
app.listen(PORT, (err,data) => {

  console.log("Step #2")
    console.log("Server is running at http://localhost:" + PORT)
})
console.log("Step #3")

/* Four types of async methods
  1.Node Style Callbacks
  2.Pipelines
  3.Promises
  4,Async/Await

*/