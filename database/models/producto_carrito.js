module.exports = (sequelize, dataTypes) => {

    const alias = "producto_carrito";

    const cols = {
        producto_id: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        carrito_id: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    }

    const config = {
        tableName: "producto_carrito"
    };

    const ProductoCarrito = sequelize.define(alias, cols, config);

    ProductoCarrito.associate = (models) => {
        ProductoCarrito.belongsTo(models.productos, {
            as: "productos",
            foreignKey: "producto_id"
        });

        ProductoCarrito.belongsTo(models.carritos, {
            as: "carritos",
            foreignKey: "carrito_id"
        });
    }
    return ProductoCarrito;
}