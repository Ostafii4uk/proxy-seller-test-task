import styles from './userCard.module.css'
import User from '@/types/user.types'
import Link from 'next/link'

const UserCard: React.FC<{ user: User }> = ({ user }) =>  {
  return (
    <div className={styles.user}>
      <h3>Name: { user.name }</h3>
      <p>Email: <a href={`mailto: ${user.email}`}>{ user.email }</a></p>
      <p>City: <a href={`https://www.google.com.ua/maps/search/${user.address.city}`} target='_blank'>{ user.address.city }</a></p>
      <div className={styles.links}>
        <Link className={styles.link} href={`${user.id}/posts`}>Posts</Link>
        <Link className={styles.link} href={`${user.id}/albums`}>Albums</Link>
      </div>
    </div>
  )
}

export default UserCard