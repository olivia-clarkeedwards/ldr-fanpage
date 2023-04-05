import { Song, SongOnAlbum } from './Song'

export interface Album {
  id?: number
  album_title: string
  number_of_tracks: number
  duration_mins: string
  artwork: number
}

export interface AlbumWithSongId extends Album {
  album_id: number
  song_id: number
}

export type AlbumWithSongs = {
  id: number
  name: string
  songs: SongOnAlbum[]
}[]
