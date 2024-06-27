module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      grade: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Student;
  };
  