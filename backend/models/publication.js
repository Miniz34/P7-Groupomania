module.exports = (sequelize, DataTypes) => {
  return sequelize.define('publication', {
    content: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: false,

  })
}