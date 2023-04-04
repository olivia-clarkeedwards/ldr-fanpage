import { Album } from '../../common/Album'

export function receiveAlbums(albums: Album[]): AlbumAction {
  return { type: 'RECEIVE_ALBUMS', payload: albums }
}

export interface AlbumAction {
  type: 'RECEIVE_ALBUMS'
  payload: Album[]
}

// <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5HOHne1wzItQlIYmLXLYfZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
