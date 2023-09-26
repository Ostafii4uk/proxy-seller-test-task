import styles from './page.module.css'
import getUsers from '@/services/users'
import User from '@/types/user.types'
import Users from '@/components/users/Users'
 
export default async function Home() {
  const users: User[] = await getUsers()

  return (
    <main className={styles.main}>
      <Users users={users} /> 
    </main>
  )
}
