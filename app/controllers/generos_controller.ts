import type { HttpContext } from '@adonisjs/core/http'
import Genero from '#models/genero'

export default class GenerosController {
    /**
     * Lista todos los géneros con paginación y filtro por titulo.
     */
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const limit = request.input('limit', 10)
        const titulo = request.input('titulo')

        const query = Genero.query()
        if (titulo) {
            query.whereILike('titulo', `%${titulo}%`)
        }

        const generos = await query.paginate(page, limit)
        return generos
    }

    /**
     * Crea un nuevo género.
     */
    async store({ request }: HttpContext) {
        const data = request.only(['titulo'])
        const genero = await Genero.create(data)
        return genero
    }

    /**
     * Muestra un género específico por su ID.
     */
    async show({ params, response }: HttpContext) {
        const genero = await Genero.find(params.id)
        if (!genero) {
            return response.notFound({ message: 'Género no encontrado' })
        }
        return genero
    }

    /**
     * Actualiza un género existente.
     */
    async update({ params, request, response }: HttpContext) {
        const genero = await Genero.find(params.id)
        if (!genero) {
            return response.notFound({ message: 'Género no encontrado' })
        }
        const data = request.only(['titulo'])
        genero.merge(data)
        await genero.save()
        return genero
    }

    /**
     * Elimina un género definitivamente.
     */
    async destroy({ params, response }: HttpContext) {
        const genero = await Genero.find(params.id)
        if (!genero) {
            return response.notFound({ message: 'Género no encontrado' })
        }
        await genero.delete()
        return response.ok({ message: 'Género eliminado' })
    }
}