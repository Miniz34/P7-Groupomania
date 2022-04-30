module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    commentaire: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: false,

  })
}