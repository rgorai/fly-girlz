import { useState } from 'react'
import { NO_IMAGE_FOUND } from '../env'

type Props = {
  src: string
  alt: string
  className?: string
}

const Image = (props: Props) => {
  const [imageSrc, setImageSrc] = useState(props.src)

  return (
    <img
      className={props.className}
      src={imageSrc}
      alt={props.alt}
      onError={() => setImageSrc(NO_IMAGE_FOUND)}
    />
  )
}

export default Image
