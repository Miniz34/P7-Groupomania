module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    comment: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: false,

  })
}