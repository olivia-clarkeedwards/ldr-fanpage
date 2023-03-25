exports.seed = (knex) => {
  return knex('songs').insert([
    {
      id: 1,
      song_title: 'Video Games',
      lyrics: `Swinging in the backyard
      Pull up in your fast car
      Whistling my name
      Open up a beer
      And you say, "Get over here
      And play a video game"
      I'm in his favourite sundress
      Watchin' me get undressed
      Take that body downtown
      I say, "You the bestest"
      Lean in for a big kiss
      Put his favourite perfume on
      Go play your video game
      It's you, it's you, it's all for you
      Everything I do
      I tell you all the time
      Heaven is a place on earth with you
      Tell me all the things you wanna do
      I heard that you like the bad girls
      Honey, is that true?
      It's better than I ever even knew
      They say that the world was built for two
      Only worth living if somebody is loving you
      And, baby, now you do
      Singin' in the old bars
      Swingin' with the old stars
      Livin' for the fame
      Kissin' in the blue dark
      Playin' pool and wild darts
      Video games
      He holds me in his big arms
      Drunk and I am seeing stars
      This is all I think of
      Watchin' all our friends fall
      In and out of Old Paul's
      This is my idea of fun
      Playin' video games
      It's you, it's you, it's all for you
      Everything I do
      I tell you all the time
      Heaven is a place on earth with you
      Tell me all the things you wanna do
      I heard that you like the bad girls
      Honey, is that true?
      It's better than I ever even knew
      They say that the world was built for two
      Only worth living if somebody is loving you
      And, baby, now you do
      It's you, it's you, it's all for you
      Everything I do
      I tell you all the time
      Heaven is a place on earth with you
      Tell me all the things you wanna do
      I heard that you like the bad girls
      Honey, is that true?
      It's better than I ever even knew
      They say that the world was built for two
      Only worth living if somebody is loving you
      And, baby, now you do
      Hmm, hmm, hmm
      (Now you do)
      (Now you do)
      Now you do
      (Now, now you do)
      (Now you do)
      (Now you do)`,
      released_as_single: true,
    },
    {
      id: 2,
      song_title: 'Cherry',
      lyrics: `Love
      I said real love, it's like feeling no fear
      When you're standing in the face of danger
      'Cause you just want it so much
      A touch
      From your real love
      It's like heaven taking the place of something evil
      And lettin' it burn off from the rush
      Yeah, yeah
      (Fuck)
      Darlin', darlin', darlin'
      I fall to pieces when I'm with you, I fall to pieces
      My cherries and wine, rosemary and thyme
      And all of my peaches (are ruined)
      Love, is it real love?
      It's like smiling when the firing squad's against you
      And you just stay lined up
      Yeah
      (Fuck)
      Darlin', darlin', darlin'
      I fall to pieces when I'm with you, I fall to pieces (bitch)
      My cherries and wine, rosemary and thyme
      And all of my peaches (are ruined, bitch)
      My rose garden dreams, set on fire by fiends
      And all my black beaches (are ruined)
      My celluloid scenes are torn at the seams
      And I fall to pieces (bitch)
      I fall to pieces when I'm with you
      'Cause I love you so much, I fall to pieces
      My cherries and wine, rosemary and thyme
      And all of my peaches (are ruined, bitch)
      Are ruined (bitch)
      Are ruined (fuck)`,
      released_as_single: false,
    },
    {
      id: 3,
      song_title: 'West Coast',
      lyrics: `I can see my baby swingin'
      Ooh baby baby bae, I love you
      I can see my baby swingin'
      Ooh baby baby bae, I love you
      I can see my baby swingin'
      Ooh baby baby bae, I love you
      I can see my baby swingin'
      Down on the West Coast they got a sayin'
      "If you're not drinkin' then you're not playin'"
      But you've got the music, you've got the music
      In you, don't you?
      Down on the West Coast, I get this feeling like
      It all could happen, that's why I'm leaving
      You for the moment, you for the moment
      Boy blue, yeah you
      I can see my baby swingin'
      I can see my baby swingin'
      Down on the West Coast, they got their icons
      Their silver starlets, their Queens of Saigons
      And you've got the music, you've got the music
      In you, don't you?
      Down on the West Coast, they love their movies
      Their golden gods and rock and roll groupies
      And you've got the music, you've got the music
      In you, don't you?
      I can see my baby swingin'
      I can see my baby swingin'
      You push it hard, I pull away, I'm feeling hotter than fire
      I guess that no one ever really made me feel that much higher
      Te deseo, cariño, boy, it's you I desire
      Your love, your love`,
      released_as_single: true,
    },
  ])
}
