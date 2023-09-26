async function getUserAlbum(userId, albumId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}&id=${albumId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getUserAlbum