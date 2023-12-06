// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#36393F',
    surface: 'rgb(58, 198, 233)',
    primary: 'rgb(58, 198, 233)',
    secondary: '#818FB4'
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
    },
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
