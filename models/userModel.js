module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        image: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: { msg: "It must be a valid Email address" },
            }
        },
        password: {
            type: DataTypes.STRING
        }

    })

    return User

}