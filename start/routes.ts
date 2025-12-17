import router from '@adonisjs/core/services/router'

import LivrosController from '#controllers/livros_controller'
import UsuariosController from '#controllers/usuarios_controller'
import EmprestimosController from '#controllers/emprestimos_controller'
import MultasController from '#controllers/multas_controller'


router.resource('livros', LivrosController).apiOnly()
router.get('/livros/buscar', 'LivrosController.buscar')

router.resource('usuarios', UsuariosController).apiOnly()

router.get('/emprestimos', 'EmprestimosController.index')
router.post('/emprestimos', 'EmprestimosController.store')
router.get('/emprestimos/:id', 'EmprestimosController.show')
router.put('/emprestimos/:id/devolver', 'EmprestimosController.devolver')


router.get('/multas', 'MultasController.index')
router.put('/multas/:id/pagar', 'MultasController.pagar')
