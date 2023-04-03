exports.seed = (knex) => {
  return knex('song_album').insert([
    {
      id: 1,
      song_id: 1,
      album_id: 2,
    },
    {
      id: 2,
      song_id: 2,
      album_id: 5,
    },
    {
      id: 3,
      song_id: 3,
      album_id: 3,
    },
  ])
}
