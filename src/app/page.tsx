import styles from './page.module.css'
import getUsers from '@/services/users'
import User from '@/types/user.types'
 
export default async function Home() {
  const users: User[] = await getUsers()
  return (
    <main className={styles.main}>
      <h1>Users</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <h3>User name: { user.name }</h3>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
