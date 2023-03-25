exports.seed = (knex) => {
  return knex('albums').insert([
    {
      id: 1,
      album_title: 'Lana Del Ray',
      number_of_tracks: 13,
      duration_mins: '47:23',
    },
    {
      id: 2,
      album_title: 'Born To Die',
      number_of_tracks: 12,
      duration_mins: '48:28',
    },
    {
      id: 3,
      album_title: 'Ultraviolence',
      number_of_tracks: 11,
      duration_mins: '51:29',
    },
    {
      id: 4,
      album_title: 'Honeymoon',
      number_of_tracks: 14,
      duration_mins: '65:14',
    },
    {
      id: 5,
      album_title: 'Lust for Life',
      number_of_tracks: 16,
      duration_mins: '71:56',
    },
    {
      id: 6,
      album_title: 'Norman Fucking Rockwell',
      number_of_tracks: 14,
      duration_mins: '67:42',
    },
    {
      id: 7,
      album_title: 'Chemtrails Over The Country Club ',
      number_of_tracks: 11,
      duration_mins: '45:28',
    },
    {
      id: 8,
      album_title: 'Blue Banisters',
      number_of_tracks: 15,
      duration_mins: '61:54',
    },
    {
      id: 9,
      album_title: "Did You Know That There's a Tunnel Under Ocean Blvd",
      number_of_tracks: 16,
      duration_mins: '77:43',
    },
  ])
}
