const { request, response } = require('express');

//controller 1
const usuariosGet = (req = request, res = response) => {

    // const query = req.query;
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json(
        {
            msg: 'get API - Controlador',
            // query: query,
            q,
            nombre,
            apikey,
            limit,
            page,
        }
    );
}

//controller 2
const usuariosPut = (req, res) => {

    // const id = req.params.id;
    // const {} = req.params;

    const {id} = req.params;

    res.status(400).json(
        {
            msg: 'put API - controlador',
            id : id,
        }
    );
}

//controller 3
const usuariosPost = (req, res) => {
    //Se puede pasar todo el objeto literal
    const body = req.body;
    //Podemos desestructurar la informacion
    const {nombre, edad} = req.body;

    res.status(200).json(
        {
            msg: 'post API - controlador',
            // body: body
            nombre,
            edad,
        }
    );
}

//controller 4
const usuariosDelete = (req, res) => {
    res.json(
        {
            msg: 'delete API - controlador',
        }
    );
}

//controller 5
const usuariosPatch = (req, res) => {
    res.json(
        {
            msg: 'patch API - controlador',
        }
    );
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
};