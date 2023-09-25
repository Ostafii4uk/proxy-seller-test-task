import styles from './photoCard.module.css'
import Photo from '@/types/photo.types'
import Image from 'next/image'

const PhotoCard: React.FC<{ photo: Photo }> = ({ photo }) =>  {
  return (
    <div className={styles.photo}>
      <p>{ photo.title }</p>
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
    </div>
  )
}

export default PhotoCard