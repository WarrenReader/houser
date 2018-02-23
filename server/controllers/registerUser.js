module.exports = {
   register: (req, res) => {
      console.log(req.body);
      const db = req.app.get('db');
      db.registerUser([req.body.username, req.body.password]).then(result => res.status(200).send(result));
   }
}