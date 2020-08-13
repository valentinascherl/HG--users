module.exports = (sequelize, dataTypes) => {

    let alias = "secciones";
    let cols = {

        seccionid: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: "secciones",
        timestamps: false,
    };

    const Seccion = sequelize.define(alias, cols, config);

    Seccion.associate = function(models){
        Seccion.hasMany(models.productos, {
            as: "productos",
            foreignKey: "seccion_id",
            timestamps: false,
        });
    }

    return Seccion;

}