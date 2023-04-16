import { generateAccessToken } from '../../utils/auth'

let users = []// variavel temporaria enqt nao ultiza banco de dados

const getUserByEmail = (searchEmail) => 
  users.find((obj) => obj.email === searchEmail)// users.find((obj) se achar retorna esse dado se n retorna undefined

export const signup = (data) => {
  if (getUserByEmail(data.email)) throw new Error('email_existente')// throw n deixa avançar o codigio ele pausa


  users.push(data)// no data se n tiver o email cadastrado ele cadastra
  return generateAccessToken({ email: data.email })
}

export const login = (data) => {
  const user = getUserByEmail(data.email)
  if (!user) throw new Error('email_nao_encontrado')

  if (user.password !== data.password) throw new Error('senha_incorreta')

  return generateAccessToken({ email: data.email })
}