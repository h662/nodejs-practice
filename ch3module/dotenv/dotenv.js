require('dotenv').config()

const password = process.env.USER_PASSWORD
const secret = process.env.USER_SECRET

console.log(password)
console.log(secret)