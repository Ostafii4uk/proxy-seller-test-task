async function getUserPhotos(albumId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default getUserPhotos