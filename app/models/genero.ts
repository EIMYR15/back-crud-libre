import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'titulo' })
  declare titulo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}