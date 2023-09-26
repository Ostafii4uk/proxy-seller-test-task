import styles from './commentCard.module.css'
import Comment from '@/types/comments.types'

const CommentCard: React.FC<{ comment: Comment, userId: number }> = ({ comment, userId }) =>  {
  return (
    <div className={styles.comment}>
      <h4 className={styles.title}>{ comment.name }</h4>
      <p className={styles.email}>{ comment.email }</p>
      <p className={styles.text}>{ comment.body }</p>
    </div>
  )
}

export default CommentCard