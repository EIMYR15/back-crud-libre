import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Libro extends BaseModel {
  @column({ isPrimary: true, columnName: 'id' })
  declare id: number

  @column({ columnName: 'titulo' })
  declare titulo: string

  @column({ columnName: 'autor' })
  declare autor: string

  @column({ columnName: 'anio_publicacion' })
  declare anioPublicacion: number

  @column({ columnName: 'genero' })
  declare genero: string

  @column({ columnName: 'activo' })
  declare activo: boolean

  @column.dateTime({ columnName: 'deleted_at' })
  declare deletedAt: DateTime | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime
}