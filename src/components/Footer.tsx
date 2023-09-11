import { Link } from 'react-router-dom'
import styles from '../styles/footer.module.scss'
import OpenInNew from '../assets/icons/OpenInNew'

const SOCIAL_LINKS: {
  name: string
  link: string
}[] = [
  {
    name: 'Twitter',
    link: '',
  },
  {
    name: 'Facebook',
    link: '',
  },
  {
    name: 'Instagram',
    link: '',
  },
  {
    name: 'LinkedIn',
    link: '',
  },
  {
    name: 'YouTube',
    link: '',
  },
]

const Footer = () => (
  <div className={styles.footerContainer}>
    <ul className={styles.socialLinks}>
      {SOCIAL_LINKS.map((e) => (
        <li key={e.name}>
          <Link to={e.link} target="_blank" referrerPolicy="no-referrer">
            {e.name}
          </Link>
        </li>
      ))}
    </ul>

    <div className={styles.plug}>
      Website by{' '}
      <Link
        to="https://www.rongorai.com"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        Ron Gorai
        <OpenInNew className={styles.icon} />
      </Link>
    </div>
  </div>
)

export default Footer
