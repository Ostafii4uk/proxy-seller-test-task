async function getUserPosts(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default getUserPosts