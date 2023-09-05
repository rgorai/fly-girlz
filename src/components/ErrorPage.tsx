import { useNavigate } from 'react-router-dom'
import styles from '../styles/errorPage.module.scss'
import { NODE_ENV } from '../env'

const ErrorPage = (props: ServerError) => {
  const navigate = useNavigate()
  return (
    <div className={styles.pageContainer}>
      <span className={styles.goBack} onClick={() => navigate(-1)}>
        Go back
      </span>
      <div className={styles.errorContainer}>
        <div className={styles.errorStatus}>{props.status}</div>
        <div className={styles.errorText}>{props.statusText}</div>

        {NODE_ENV === 'development' && (
          <div className={styles.data}>{props.data}</div>
        )}
      </div>
    </div>
  )
}

export default ErrorPage
