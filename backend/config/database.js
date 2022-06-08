const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.DB_NAME, process.env.DB_LOG, process.env.DB_PW, {
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


module.exports = db;