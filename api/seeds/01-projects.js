
const movies = [
  { movies_name: 'Mad Max' },
  { movies_name: 'Independence Day' },
  { movies_name: 'Space Balls' },
  { movies_name: 'Ocean`s Eleven' },
  { movies_name: 'Pulp Finction' },
]

exports.movies = movies

exports.seed = function (knex) {
  return knex('schemes').insert(movies)
}
