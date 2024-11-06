/*how common js works, it uses request instead of import
function require returns an obj and the obj gets stored in the variable
since express doesn't start with a "." it will lok for it in the node module folder */
const express = require("express");
const app = express();/*create instance of the express pipeline, everytime a message comes in to the port, the operating system gives the message to express and express goes to find out which function it should run*/
const userController = require("./controllers/users");



const PORT= 3000;



/*most basic one is getting without a path*/
/*registering an action in the pipeline, when a message comes in with the get function and the appl equals "/" which means nothing, than execute this function*/
/*param one is all info about req, param 2 obj with all methods need to create a most basic response */
app.get("/", (req, res) => {
  res.send("Hello World")
})
    .get("/about", (req, res) => {
        res.send("About Us");
    })
    .use("/users", userController)


/*This is an Asynchronous function.Once pipeline is set up, last thing to do is listen? 
anytime see num in the middle of the code its a magin num
compiler (can't figure out if they're right or if they're wrong)
 and computer don't know what the number means 
 the number should just be a CONSTANT obviously */
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})