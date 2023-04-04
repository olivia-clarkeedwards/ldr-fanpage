exports.seed = (knex) => {
  return knex('song_album').insert([
    {
      id: 1,
      song_id: 1,
      album_id: 2,
      release_date: 2012,
    },
    {
      id: 2,
      song_id: 2,
      album_id: 5,
      release_date: 2017,
    },
    {
      id: 3,
      song_id: 3,
      album_id: 3,
      release_date: 2014,
    },
  ])
}
