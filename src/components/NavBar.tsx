import { Link } from 'react-router-dom'
import styles from '../styles/navBar.module.scss'
import { parseRoute } from '../utils/strings'

type Props = {
  specs: string[]
}

const NavBar = ({ specs }: Props) => {
  return (
    <nav className={styles.container}>
      <ul>
        {specs.map((e) => (
          <Link to={parseRoute(e)} key={e}>
            {e}
          </Link>
        ))}
      </ul>

      <button>Support Us</button>
    </nav>
  )
}

export default NavBar
