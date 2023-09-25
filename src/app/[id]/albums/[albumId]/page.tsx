import styles from './album.module.css'
import getUserPhotos from '@/services/photos'
import Photo from '@/types/photo.types'
import PhotoCard from '@/components/photoCard/PhotoCard'

const UserAlbum: React.FC<{params: { albumId: number }}> = async ({ params }) => {
  const photos: Photo[] = await getUserPhotos(params.albumId)

  return (
    <div className={styles.album}>
      <h2>Album</h2>
      <div className={styles.photos}>
        {photos.map(photo => <PhotoCard photo={photo} key={photo.id} />)}
      </div>
    </div>
  )
}

export default UserAlbum