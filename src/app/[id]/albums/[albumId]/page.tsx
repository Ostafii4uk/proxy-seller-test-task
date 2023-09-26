import styles from './album.module.css'
import getUserPhotos from '@/services/photos'
import getUserAlbum from '@/services/album'
import Photo from '@/types/photo.types'
import Album from '@/types/album.types'
import PhotoCard from '@/components/photoCard/PhotoCard'
import Link from 'next/link'

const UserAlbum: React.FC<{params: { albumId: number, id: number }}> = async ({ params }) => {
  const album: Album[] = await getUserAlbum(params.id, params.albumId)
  const photos: Photo[] = await getUserPhotos(params.albumId)

  return (
    <div className={styles.album}>
      <h2 className={styles.title}>{ album[0].title }</h2>
      <Link className={styles.link} href={`/${params.id}/albums`}>Back to albums</Link>
      <div className={styles.photos}>
        {photos.map(photo => <PhotoCard photo={photo} key={photo.id} />)}
      </div>
    </div>
  )
}

export default UserAlbum