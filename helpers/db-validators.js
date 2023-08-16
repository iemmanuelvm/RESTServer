const Role = require('../models/role');
const Usuario = require('../models/user');

const esRoleValido = async (rol='') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const emailExiste = async (correo = '') => {
    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo:correo});
    if(existeEmail){
        throw new Error(`El email ${correo} ya esta registrado en la base de datos`);
        // return res.status(400).json({
        //     msg : 'EL correo ya existe'
        // });
    }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id no existe ${id}`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
};