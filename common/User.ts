export interface UserDetails {
  username: string
  firstname: string
  lastname: string
  dob: Date
  themeId: number
  albumId: number
  faveSongId: number
}

export interface User extends UserDetails {
  id: number
}
