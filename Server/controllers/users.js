/*the . means it's one of our files */
const model = require('../model/users');
const express = require('express');
const app = express.Router();/*almost axactly the same as the default we get from the express function, */

app
  .get("/", (req, res, next) => {
    //user response obj to send
    res.send(model.getAll());
  })

  /*make a locol variable id that points to the */
  .get("/:id", (req, res, next) => {
    const id = req.params.id;
    const user = model.get(
      +id
    ); /*find calls this function once for every item in items */
    res.send(user);
  })

  .post("/", (req, res, next) => {
    const user = model.add(req.body);
    res.send(user);
  })

  .patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const user = model.update(+id, req.body);
    res.send(user);
  })

  .delete("/:id", (req, res, next) => {
    const id = req.params.id;
    const ret = model.remove(+id);
    res.send(ret);
  });

/*after added these possible finctions, we need to export them, and will be able to import them in the
main file */

module.exports = app;/*Common JS way of exporting */