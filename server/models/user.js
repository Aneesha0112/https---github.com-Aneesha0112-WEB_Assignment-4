// "database" as object literal
const users = [
    {
      Email:"aneesha@gmail.com",
      Password:"sbjkfhbh"
    },
    {
      Email:"aneesha@gmail.com",
      Password:"sbjkfhbh"
    },
    {
      Email:"aneesha@gmail.com",
      Password:"sbjkfhbh"
    }
  ];
  
  function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.Email === user.Email);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].Password !== user.Password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };