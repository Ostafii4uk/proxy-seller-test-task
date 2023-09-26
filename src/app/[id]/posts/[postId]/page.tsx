import styles from './post.module.css'
import getUserPost from '@/services/post'
import getPostComments from '@/services/comments'
import Post from '@/types/post.types'
import Comment from '@/types/comments.types'
import CommentCard from '@/components/commentCard/CommentCard'
import Link from 'next/link'

const UserPost: React.FC<{params: { id: number, postId: number }}> = async ({ params }) => {
  const post: Post[] = await getUserPost(params.id, params.postId)
  const comments: Comment[] = await getPostComments(params.postId)
  
  return (
    <div className={styles.post}>
      <Link className={styles.link} href={`/${params.id}/posts`}>Back to posts</Link>
      <div className={styles.postContent}>
        <h2 className={styles.title}>{ post[0].title }</h2>
        <span className={styles.text}>{ post[0].body }</span>
      </div>
      <div className={styles.postComments}>
        <strong>Comments:</strong>
        {comments.map(comment => <CommentCard comment={comment} userId={params.id} key={comment.id} />)}
      </div>
    </div>
  )
}

export default UserPost