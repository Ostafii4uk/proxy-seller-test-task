import getUserPosts from '@/services/posts'
import Post from '@/types/post.types'
import PostCard from '@/components/postCard/PostCard'
import styles from './posts.module.css'
import Link from 'next/link'

const UserPosts: React.FC<{params: { id: number }}> = async ({ params }) => {
  const posts: Post[] = await getUserPosts(params.id)
  return (
    <div className={styles.posts}>
      <Link className={styles.link} href={'/'}>Back to users</Link>
      <h1 className={styles.title}>Posts:</h1>
      {posts.map(post => <PostCard post={post} key={post.id} userId={params.id} />)}
    </div>
  )
}

export default UserPosts