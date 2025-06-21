import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'libros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.integer('anio_publicacion').notNullable()
      table.string('genero').notNullable()
      table.boolean('activo').defaultTo(true)
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}