import styles from './postCard.module.css'
import Post from '@/types/post.types'
import Link from 'next/link'

const PostCard: React.FC<{ post: Post, userId: number }> = ({ post, userId }) =>  {
  return (
    <Link href={`/${userId}/posts/${post.id}`} className={styles.post}>
      <h3 className={styles.title}>{ post.title }</h3>
      <p>{ post.body }</p>
    </Link>
  )
}

export default PostCard