export default interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: UserAdress
}

interface UserAdress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}