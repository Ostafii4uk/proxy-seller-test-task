import getUserAlbums from '@/services/albums'
import Post from '@/types/post.types'
import AlbumCard from '@/components/albumCard/AlbumCard'
import styles from './albums.module.css'
import Link from 'next/link'

const UserAlbums: React.FC<{params: { id: number }}> = async ({ params }) => {
  const albums: Post[] = await getUserAlbums(params.id)
  return (
    <div className={styles.albums}>
      <Link className={styles.link} href={'/'}>Back to users</Link>
      <h1 className={styles.title}>Albums:</h1>
      {albums.map(album => <AlbumCard album={album} key={album.id} userId={params.id} />)}
    </div>
  )
}

export default UserAlbums