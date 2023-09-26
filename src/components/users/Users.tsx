'use client'

import { useState } from 'react'
import User from '@/types/user.types'
import styles from './users.module.css'
import UserCard from '@/components/userCard/UserCard'


const Users: React.FC<{ users: User[] }> = ({ users }) => {
  const [searchParam, setSearchParam] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const searchUsers = (param: string) => {
    setSearchParam(param)
    const result = users.filter(user => user.name.toLowerCase().includes(param.toLowerCase()))
    setFilteredUsers(result)
  }

  const sortASC = () => {
    const result = [...filteredUsers.sort((userA, userB) => userA.name.localeCompare(userB.name))]
    setFilteredUsers(result)
  }

  const sortDESC = () => {
    const result = [...filteredUsers.sort((userA, userB) => userB.name.localeCompare(userA.name))]
    setFilteredUsers(result)
  }

  return (
    <>
      <h1 className={styles.title}>Users:</h1>
      <div className={styles.settings}>
        <div className={styles.findUsers}>
          <span>Find user:</span>
          <input className={styles.searchInput} type="text" value={searchParam} onChange={event => searchUsers(event.target.value)} />
        </div>
        <div className={styles.sorting}>
          <button className={styles.button} onClick={() => sortASC()}>ASC</button>
          <button className={styles.button} onClick={() => sortDESC()}>DESC</button>
        </div>
      </div>
      {filteredUsers.map(user => <UserCard user={user} key={user.id} />)}
    </>
  )
}

export default Users