import type { HttpContext } from '@adonisjs/core/http'
import Libro from '#models/libro'

export default class LibrosController {
  /**
   * Muestra una lista de libros (solo activos y con paginación)
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const libros = await Libro.query()
      .where('activo', true)
      .paginate(page, limit)
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
  async show({ params }: HttpContext) {
    const libro = await Libro.findOrFail(params.id)
    if (!libro.activo) {
      return { message: 'Libro no encontrado o inactivo' }
    }
    return libro
  }

  /**
   * Actualiza un libro existente.
   */
  async update({ params, request }: HttpContext) {
    const libro = await Libro.findOrFail(params.id)
    if (!libro.activo) {
      return { message: 'Libro no encontrado o inactivo' }
    }
    const data = request.only(['titulo', 'autor', 'anioPublicacion', 'genero'])
    libro.merge(data)
    await libro.save()
    return libro
  }

  /**
   * Realiza un borrado lógico (soft delete) del libro.
   */
  async destroy({ params }: HttpContext) {
    const libro = await Libro.findOrFail(params.id)
    libro.activo = false
    await libro.save()
    return { message: 'Libro eliminado (soft delete)' }
  }
}