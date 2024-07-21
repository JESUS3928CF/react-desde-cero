import AppRouter from "./router/AppRouter"
import AppTheme from "./theme/AppTheme"

const JournalApp = () => {
  return (
    /*/// usando el theme en nuestra app  */
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}

export default JournalApp
