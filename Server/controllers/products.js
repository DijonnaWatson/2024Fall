/*Not using express, model should never know it's
 using ecxpress, should be pure JavaScript that only knows 
 where it's getting the data from */


 const model = require('../data/products.json');
 const express = require("express");
 const app = express.Router()
/*4 ways to send data to the Server
1. Query string
2. URL/Path Parameters
3. Headers 
4. Body-access body of request
*/

app.get("/", (req, res) => {
    //user response obj to send 
    res.send(model.getAll())
})

/*make a locol variable id that points to the */
.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = model.get(+id); /*find calls this function once for every item in items */
  res.send(user);
})

.post("/", (req, res) => {
    const user = model.add(req.body);
    res.send(user);
})

.patch("/:id", (req, res) => {
    const id = req.params.id;
    const user = model.update(+id, req.body);
    res.send(user);
})

.delete("/:id", (req, res) => {
    const id = req.params.id;
    const ret = model.remove(+id);
    res.send(ret);
})

/*after added these possible finctions, we need to export them, and will be able to import them in the
main file */

module.exports = app;/*Common JS way of exporting */