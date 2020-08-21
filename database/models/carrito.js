module.exports = (sequelize, dataTypes) => {

    let alias = "carritos";
    let cols = {

        carrito_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id:{
            type: dataTypes.INTEGER
        },
        producto_id: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        cantidad: {
            type: dataTypes.INTEGER,
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }

    let config = {
        tableName: "carritos",
        timestamps: false,
    };

    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models){
        Carrito.belongsTo(models.productos, {
            as: "productos",
            foreignKey: "carrito_id",
            timestamps: false,
        })
    }

    Carrito.associate = function(models){
        Carrito.belongsTo(models.usuarios,{
            as: 'usuarios',
            foreignKey: 'usuario_id'
        });
    }

    return Carrito;
}