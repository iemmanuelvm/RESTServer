const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/users');

const router = Router();

//End-point 1 - get
router.get('/', usuariosGet);

//End-point 2 - put
router.put('/:id', usuariosPut);

//End-point 3 - post
router.post('/', usuariosPost);

//End-point 4 - delete
router.delete('/', usuariosDelete);

//End-point 5 - patch
router.patch('/', usuariosPatch);

module.exports = router;