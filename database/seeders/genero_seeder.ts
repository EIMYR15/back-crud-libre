import Genero from '#models/genero'

export default class LibroSeeder {
  public async run() {
    await Genero.createMany([
      { titulo: 'Ficción' },
      { titulo: 'No Ficción' },
      { titulo: 'Ciencia Ficción' },
      { titulo: 'Fantasía' },
      { titulo: 'Misterio' },
      { titulo: 'Romance' },
      { titulo: 'Terror' },
      { titulo: 'Biografía' },
    ])
  }
}