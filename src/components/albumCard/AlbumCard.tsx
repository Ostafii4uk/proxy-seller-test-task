import styles from './albumCard.module.css'
import Album from '@/types/album.types'
import Link from 'next/link'

const AlbumCard: React.FC<{ album: Album, userId: number }> = ({ album, userId }) =>  {
  return (
    <Link href={`/${userId}/albums/${album.id}`} className={styles.album}>
      <h3>Title: { album.title }</h3>
    </Link>
  )
}

export default AlbumCard