import Libro from '#models/libro'

export default class LibroSeeder {
  public async run() {
    await Libro.createMany([
      {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1967,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        anioPublicacion: 1943,
        generoId: 2, // Fábula
        activo: true,
      },
      {
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        anioPublicacion: 1605,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Rayuela',
        autor: 'Julio Cortázar',
        anioPublicacion: 1963,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Pedro Páramo',
        autor: 'Juan Rulfo',
        anioPublicacion: 1955,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        anioPublicacion: 2001,
        generoId: 3, // Misterio
        activo: true,
      },
      {
        titulo: 'Ficciones',
        autor: 'Jorge Luis Borges',
        anioPublicacion: 1944,
        generoId: 4, // Cuento
        activo: true,
      },
      {
        titulo: 'La casa de los espíritus',
        autor: 'Isabel Allende',
        anioPublicacion: 1982,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1981,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Sobre héroes y tumbas',
        autor: 'Ernesto Sabato',
        anioPublicacion: 1961,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'La tregua',
        autor: 'Mario Benedetti',
        anioPublicacion: 1960,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Aura',
        autor: 'Carlos Fuentes',
        anioPublicacion: 1962,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'El túnel',
        autor: 'Ernesto Sabato',
        anioPublicacion: 1948,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'La ciudad y los perros',
        autor: 'Mario Vargas Llosa',
        anioPublicacion: 1963,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Santa Evita',
        autor: 'Tomás Eloy Martínez',
        anioPublicacion: 1995,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1985,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'Los detectives salvajes',
        autor: 'Roberto Bolaño',
        anioPublicacion: 1998,
        generoId: 1, // Novela
        activo: true,
      },
      {
        titulo: 'La invención de Morel',
        autor: 'Adolfo Bioy Casares',
        anioPublicacion: 1940,
        generoId: 5, // Ciencia ficción
        activo: true,
      },
      {
        titulo: 'El Aleph',
        autor: 'Jorge Luis Borges',
        anioPublicacion: 1949,
        generoId: 4, // Cuento
        activo: true,
      },
      {
        titulo: 'La muerte de Artemio Cruz',
        autor: 'Carlos Fuentes',
        anioPublicacion: 1962,
        generoId: 1, // Novela
        activo: true,
      },
    ])
  }
}