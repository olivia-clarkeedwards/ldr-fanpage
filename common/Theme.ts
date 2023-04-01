export interface ThemeDetails {
  theme_name: string
  primary_colour: string
  secondary_colour: string
  text_colour: string
  font: string
}

export interface Theme extends ThemeDetails {
  id: number
}
