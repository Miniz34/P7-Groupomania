// modèle de table
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {

    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false,

  })
}

// user_id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   autoIncrement: true
// },