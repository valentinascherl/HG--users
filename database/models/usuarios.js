module.exports = function (sequelize, dataTypes){
    let alias = "usuarios";
    let cols = {

        usuario_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        apellido: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        contrasena: {
            allowNull: false,
            type: dataTypes.STRING
        },
        avatar: {
            allowNull: false,
            type: dataTypes.STRING
        },
        ciudad:{
            allowNull: false,
            type: dataTypes.STRING
        },
        departamento:{
            allowNull: false,
            type: dataTypes.STRING
        },
        codigoPostal: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        domicilio:{
            allowNull:false,
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasOne(models.carritos,{
            as: 'carritos',
            foreignKey: 'carrito_id'
        });
    }

    return Usuario;
}