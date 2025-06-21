/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import LibrosController from '#controllers/libros_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Agrupar rutas CRUD para libros bajo el prefijo /api
router
  .group(() => {
    router.get('/libros', [LibrosController, 'index'])
    router.post('/libros', [LibrosController, 'store'])
    router.get('/libros/:id', [LibrosController, 'show'])
    router.put('/libros/:id', [LibrosController, 'update'])
    router.delete('/libros/:id', [LibrosController, 'destroy'])
  })
  .prefix('/api')
