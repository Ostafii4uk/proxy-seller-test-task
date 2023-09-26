import styles from './post.module.css'
import getUserPost from '@/services/post'
import getPostComments from '@/services/comments'
import Post from '@/types/post.types'
import Comments from '@/types/comments.types'

const UserPost: React.FC<{params: { id: number, postId: number }}> = async ({ params }) => {
  const post: Post[] = await getUserPost(params.id, params.postId)
  const comments: Comments[] = await getPostComments(params.postId)
  
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <h2>{ post[0].title }</h2>
        <span>{ post[0].body }</span>
      </div>
      <div className={styles.postComments}>

      </div>
    </div>
  )
}

export default UserPost