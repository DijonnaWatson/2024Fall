/*Not using express, model should never know it's
 using ecxpress, should be pure JavaScript that only knows 
 where it's getting the data from */

 /**@type {{items: User[]}} */
 const data = require('../data/users.json');

/**
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/** *
* @typedef {import("../../Client/src/models/users").User }User
 */

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<Product>>}
 */
 function getAll() {
     return {
       isSuccess: true,
       data: data.items,
       total: data.items.length,
     };
 }
/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function get(id) {
    const data.items.find((user) => user.id == id)
    return{
        isSuccess: !!item,
        data: item,
    }
}

 function add(user){
    user.id =  data.items.reduce((prev, x) => (x.id > prev ? x.id: prev),0) + 1
    data.items.push(user);
    return user;
}

 function add(user) {
   user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
   data.items.push(user);
   return user;
 }

 function update(id, user) {
   const userToUpdate = get(id);
   Object.assign(userToUpdate, user);
   return userToUpdate;
 }

 function remove(id) {
   const userIndex = data.items.findIndex((user) => user.id == id);
   if(itemIndex == -1) 
    throw {
            isSucess: false, 
            message: "User not found", 
            id: id
          };
   data.items.splice(userIndex, 1);
   return { isSucess: true, message: "User deleted", id: id };
 }

 module.exports = {
   getAll,
   get,
   add,
   update,
   remove,
 };