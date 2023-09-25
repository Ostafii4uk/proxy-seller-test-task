import styles from './page.module.css'
import getUsers from '@/services/users'
import User from '@/types/user.types'
import UserCard from '@/components/userCard/UserCard'
 
export default async function Home() {
  const users: User[] = await getUsers()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Users:</h1>
      {users.map(user => <UserCard user={user} key={user.id} />)}
    </main>
  )
}
