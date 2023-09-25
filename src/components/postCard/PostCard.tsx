import styles from './postCard.module.css'
import Post from '@/types/post.types'

const PostCard: React.FC<{ post: Post }> = ({ post }) =>  {
  return (
    <div className={styles.post}>
      <h3>Title: { post.title }</h3>
      <p>{ post.body }</p>
    </div>
  )
}

export default PostCard