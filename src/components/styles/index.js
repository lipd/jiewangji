import globalStyle from './global'
import typography from './typography'

export const colors = {
  black: '#090a0b',
  light: '#697b8c',
  grey: '#f0f0f0',
  white_normal: '#cfd0d0',
  white_bright: '#ffffff',
  fontLight: '#48434f',
  fontLightMuted: '#78757a',
  fontBlue: '#3393dc',
}

export const fontFamily = {
  default:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  yuanti: 'STYuanti-SC-Regular, YouYuan',
  heiti: "'STHeiti', MicrosoftYaHei",
  songti: 'STSongti-SC-Bold, SimSun',
  kaiti: 'STKaiti, KaiTiGB2312',
}

export const shadow = {
  light: `0 5px 30px -15px rgba(0, 0, 0, 0.2)`,
  dark: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);`,
}

const styles = {
  globalStyle,
  colors,
  fontFamily,
  typography,
}

export default styles
