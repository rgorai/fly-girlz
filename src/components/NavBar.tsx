import { Link, useLocation, useNavigate } from 'react-router-dom'
import cx from 'classnames'
import styles from '../styles/navBar.module.scss'
import { parseRoute } from '../utils/strings'
import Image from './Image'

type Props = {
  specs: AppSpec[]
}

const NavBar = ({ specs }: Props) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <Image className={styles.logo} src="" alt="Logo" />
        </Link>

        <ul>
          {specs
            .filter((e) => e.navBar)
            .map(({ name }) => (
              <li key={name}>
                <Link
                  className={cx(styles.navLink, {
                    [styles.activeLink]:
                      pathname.split('/')[1] === parseRoute(name).slice(1),
                  })}
                  to={parseRoute(name)}
                >
                  {name}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.toolbar}>
        <ul>
          {specs
            .filter((e) => e.toolbar)
            .map(({ name }, i) => (
              <li key={name}>
                <button
                  className={i === 0 ? 'btn-primary' : 'btn-secondary'}
                  onClick={() => navigate(parseRoute(name))}
                >
                  {name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
