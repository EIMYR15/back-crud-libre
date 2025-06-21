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
import GenerosController from '#controllers/generos_controller'

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
    router.post('/libros/:id/restore', [LibrosController, 'restore'])
    router.delete('/libros/:id/force', [LibrosController, 'forceDelete'])


    router.get('/generos', [GenerosController, 'index'])
    router.post('/generos', [GenerosController, 'store'])
    router.get('/generos/:id', [GenerosController, 'show'])
    router.put('/generos/:id', [GenerosController, 'update'])
    router.delete('/generos/:id', [GenerosController, 'destroy'])

  })
  .prefix('/api')
