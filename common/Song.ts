export interface SongOnAlbum {
  id: number
  song_title: string
  lyrics: string
  released_as_single: boolean
  producer: string
}

export interface Song extends SongOnAlbum {
  album_id: number
}
