/*Not using express, model should never know it's
 using ecxpress, should be pure JavaScript that only knows 
 where it's getting the data from */


 const model = require('../model/products');
 const express = require("express");
 const app = express.Router()
/*4 ways to send data to the Server
1. Query string
2. URL/Path Parameters
3. Headers 
4. Body-access body of request
*/

app
  .get("/", (req, res, next) => {
    model
      .getAll()
      .then((x) => res.send(x))
      .catch(next);
  })
  .get("/:id", (req, res, next) => {
    const id = req.params.id;
    model
      .get(+id)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/", (req, res, next) => {
    model
      .add(req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .patch("/:id", (req, res, next) => {
    const id = req.params.id;
    model
      .update(+id, req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .delete("/:id", (req, res, next) => {
    const id = req.params.id;

    model
      .remove(+id)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/seed", (req, res, next) => {
    model
      .seed()
      .then((x) => res.send(x))
      .catch(next);
  });

/*after added these possible finctions, we need to export them, and will be able to import them in the
main file */

module.exports = app;/*Common JS way of exporting */