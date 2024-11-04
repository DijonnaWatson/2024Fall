/*the . means it's one of our files */
const data = require('../data/model/users');
const express = require('express');
const app = express.Router();/*almost axactly the same as the default we get from the express function, */

app.get("/", (req, res) => {
    //user response obj to send 
    res.send(data.items)
})

/*make a locol variable id that points to the */
.get("/:id", (req, res) => {
    const id = req.params.id
    const user = data.items.find(u => u.id === id)/*find calls this function once for every item in items */
    res.send(user)
})

.post("/", (req, res) => {
    const user = req.body
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id: prev),0) + 1
    data.items.push(user);
    res.send(user)
})

.patch("/:id", (req, res) => {
    const id = req.params.id
    const user = data.items.find(u => u.id === id)
    Object.assign(user, req.body)
    res.send(user)
})
.delete("/:id", (req, res) => {
    const id = req.params.id
    const userIndex = data.items.findIndex(u => u.id === id)
    data.items.splice(userIndex, 1);
    res.send({
        message: "User deleted successfully"
    })
})

/*after added these possible finctions, we need to export them, and will be able to import them in the
main file */

module.exports = app;/*Common JS way of exporting */