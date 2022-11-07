import MainNavigation from './MainNavigation'
import classes from './Layout.module.css'
import { useUser } from '@auth0/nextjs-auth0'

function Layout(props) {
  const { user, userError, isLoading } = useUser()

  return (
    <div>
      <MainNavigation user={user} isLoading={isLoading} />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout
