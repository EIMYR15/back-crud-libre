import type { HttpContext } from '@adonisjs/core/http'
import Libro from '#models/libro' 
import { DateTime } from 'luxon'

export default class LibrosController {
  /**
   * Muestra una lista de libros (solo activos y con paginación y filtros)
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const titulo = request.input('titulo')
    const autor = request.input('autor')
    const genero = request.input('genero')
    const activo = request.input('activo', true)

    const query = Libro.query().where('activo',activo)
  

    if (titulo) {
      query.whereILike('titulo', `%${titulo}%`)
    }
    if (autor) {
      query.whereILike('autor', `%${autor}%`)
    }
    if (genero) {
      query.whereILike('genero', `%${genero}%`)
    }

    const libros = await query.paginate(page, limit)
    return libros
  }

  /**
   * Almacena un nuevo libro en la base de datos.
   */
  async store({ request }: HttpContext) {
    const data = request.only(['titulo', 'autor', 'anioPublicacion', 'genero'])
    const libro = await Libro.create(data)
    return libro
  }

  /**
   * Muestra un libro específico por su ID.
   */
  async show({ params, response }: HttpContext) {
    const libro = await Libro.find(params.id)
    if (!libro || libro.deletedAt || !libro.activo) {
      return response.notFound({ message: 'Libro no encontrado o inactivo' })
    }
    return libro
  }

  /**
   * Actualiza un libro existente.
   */
  async update({ params, request, response }: HttpContext) {
    const libro = await Libro.find(params.id)
    if (!libro || libro.deletedAt || !libro.activo) {
      return response.notFound({ message: 'Libro no encontrado o inactivo' })
    }
    const data = request.only(['titulo', 'autor', 'anioPublicacion', 'genero'])
    libro.merge(data)
    await libro.save()
    return libro
  }

  /**
   * Soft delete: marcar como inactivo y poner deletedAt
   */
  async destroy({ params, response }: HttpContext) {
    const libro = await Libro.find(params.id)
    if (!libro) return response.notFound({ message: 'Libro no encontrado' })
    libro.activo = false
    libro.deletedAt = DateTime.now()
    await libro.save()
    return response.ok({ message: 'Libro inactivado (soft delete)' })
  }

  /**
   * Restaurar libro (opcional)
   */
  async restore({ params, response }: HttpContext) {
    const libro = await Libro.find(params.id)
    if (!libro) return response.notFound({ message: 'Libro no encontrado' })
    libro.deletedAt = null
    libro.activo = true
    await libro.save()
    return response.ok({ message: 'Libro restaurado' })
  }

  /**
   * Eliminar definitivamente
   */
  async forceDelete({ params, response }: HttpContext) {
    const libro = await Libro.find(params.id)
    if (!libro) return response.notFound({ message: 'Libro no encontrado' })
    await libro.delete()
    return response.ok({ message: 'Libro eliminado definitivamente' })
  }
}