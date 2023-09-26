async function getUserPost(userId, postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getUserPost