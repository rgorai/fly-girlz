import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'
import styles from '../styles/navBar.module.scss'
import { parseRoute } from '../utils/strings'
import Image from './Image'

type Props = {
  specs: string[]
}

const NavBar = ({ specs }: Props) => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <Image className={styles.logo} src="" alt="Logo" />
        </Link>

        <ul>
          {specs.map((e) => (
            <Link
              className={cx(styles.navLink, {
                [styles.activeLink]:
                  pathname.split('/')[1] === parseRoute(e).slice(1),
              })}
              to={parseRoute(e)}
              key={e}
            >
              {e}
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.buttonContainer}>
        <button className="btn-primary">SUPPORT US</button>
        <button className="btn-secondary">CONTACT US</button>
      </div>
    </nav>
  )
}

export default NavBar
