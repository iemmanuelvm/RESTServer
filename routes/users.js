const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/users');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

//End-point 1 - get
router.get('/', usuariosGet);

//End-point 2 - put
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom( esRoleValido ),
    validarCampos,
], usuariosPut);

//End-point 3 - post
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
    // check('correo', 'El correo no es valido').isEmail(),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRoleValido ),
    validarCampos,
], usuariosPost);

//End-point 4 - delete
router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos,
], usuariosDelete);

//End-point 5 - patch
router.patch('/', usuariosPatch);

module.exports = router;