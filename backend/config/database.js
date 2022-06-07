const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mysql",
  define: {
    freezeTableName: true,
  }
});

try {
  db.authenticate();
  console.log("connecté")
} catch (error) {
  console.log("problème de connection à la base de donnée")
}


// db.authenticate().then(() => {
//   console.log("conntecté")
// }).catch((err) => {
//   console.log("marche pas")
// });

module.exports = db;