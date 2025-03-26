const sequelize = require('../db');
const { Model, DataTypes } = require('sequelize');

class Signature extends Model {
    // static async findUser(name, city, state) {
    //     try {
    //         const user = await User.findOne({ where: { name, city, state } });
    //         if (user) {
    //             return user;
    //         } else {
    //             return null;
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //         return null;
    //     }
    // }
}

Signature.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,

    }
}, {
    sequelize,
    modelName: 'Signature'
});

module.exports = Signature;