/*Not using express, model should never know it's
 using ecxpress, should be pure JavaScript that only knows 
 where it's getting the data from */

 const data = require('../data/users.json');

 function getAllUsers() {
     return data.items;
 }

 function get(id){

 }

 function add(user){
    user.id =  data.items.reduce((prev, x) => (x.id > prev ? x.id: prev),0) + 1
    data.items.push(user);
    return user;
}

 function update