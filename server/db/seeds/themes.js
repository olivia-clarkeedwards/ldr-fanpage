exports.seed = (knex) => {
  return knex('themes').insert([
    {
      id: 1,
      theme_name: 'westcoast',
      primary_colour: '274E3F',
      secondary_colour: '5D6D41',
      text_colour: 'F5F2DF',
      font: 'Steelfish',
    },
    {
      id: 2,
      theme_name: 'honeymoon',
      primary_colour: 'BBCBDB',
      secondary_colour: 'C4A69B',
      text_colour: '7E0609',
      font: 'Joanna Solotype',
    },
    {
      id: 3,
      theme_name: 'nfr',
      primary_colour: 'CFD88B',
      secondary_colour: 'E8B03E',
      text_colour: '3A2E2E',
      font: 'Biff Bam Boom Outline',
    },
  ])
}
