exports.seed = (knex) => {
  return knex('albums').insert([
    {
      id: 1,
      album_title: 'Lana Del Ray',
      release_year: 2010,
      producer: 'David Kahne',
      number_of_tracks: 13,
    },
    {
      id: 2,
      album_title: 'Born To Die',
      release_year: 2012,
      producer: 'Emile Haynie',
      number_of_tracks: 12,
    },
    {
      id: 3,
      album_title: 'Ultraviolence',
      release_year: 2014,
      producer: 'Dan Auerbach',
      number_of_tracks: 11,
    },
    {
      id: 4,
      album_title: 'Honeymoon',
      release_year: 2015,
      number_of_tracks: 14,
    },
    {
      id: 5,
      album_title: 'Lust for Life',
      release_year: 2017,
      number_of_tracks: 16,
    },
    {
      id: 6,
      album_title: 'Norman Fucking Rockwell',
      release_year: 2019,
      producer: 'Lana Del Rey & Jack Antonoff',
      number_of_tracks: 14,
    },
    {
      id: 7,
      album_title: 'Chemtrails Over The Country Club ',
      release_year: 2021,
      producer: 'Lana del Rey & Jack Antonoff',
      number_of_tracks: 11,
    },
    {
      id: 8,
      album_title: 'Blue Banisters',
      release_year: 2021,
      number_of_tracks: 15,
    },
  ])
}
