module.exports = { 

   login: (req, res) => {
      const db = req.app.get('db');
      db.loginUser([req.body.username]).then(result => {
         console.log(result);
         let username = result[0].username;
         let password = result[0].password;
         let valid = false
         let response = {status: 'Wrong Credentials'}

         if (username === req.body.username && password === req.body.password) {
            valid = true;
         }

         if (valid) {
            response = result;
         }

         res.status(200).send(response)
      });
   },

   register: (req, res) => {
      const db = req.app.get('db');
      db.registerUser([req.body.username, req.body.password]).then(result => res.status(200).send(result));
   }
}