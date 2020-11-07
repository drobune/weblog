import Typography from "typography"
import Theme from "typography-theme-st-annes"

Theme.googleFonts.push({
  name: "Noto+Sans+JP",
  styles: ["400"],
})
Theme.headerFontFamily = ["Noto Sans JP", "serif"]
Theme.bodyFontFamily = ["Noto Sans JP", "serif"]
Theme.headerWeight = 400


const typography = new Typography(Theme)


// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
