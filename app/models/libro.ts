import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Genero from '#models/genero'

export default class Libro extends BaseModel {
  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'titulo' })
  declare titulo: string

  @column({ columnName: 'autor' })
  declare autor: string

  @column({ columnName: 'anio_publicacion' })
  declare anioPublicacion: number

  @column()
  declare generoId: number

  @belongsTo(() => Genero, {
    foreignKey: 'generoId',
  })
  declare genero: BelongsTo<typeof Genero>

  @column()
  declare activo: boolean

  @column.dateTime({ columnName: 'deleted_at' })
  declare deletedAt: DateTime | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}