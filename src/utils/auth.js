import { sign, verify } from 'jsonwebtoken'

const AUTH_SECRET = 'secret'

export const generateAccessToken = (data) => sign(data, AUTH_SECRET)

export const verifyAccessToken = (req, res, next) => {// ve se o token ta no req, res é a resposta e next é a funcao que chama se a funcao segue adiante
  try {
    const { authorization } = req.cookies
    if (!authorization) throw new Error('authorization_not_found')

    const user = verify(authorization, AUTH_SECRET)// se o verify estiver errado vai o erro do throw
    req.user = user//passando o valor do usuario daqui pra frente
    next()// a funcao que mostra que deu tudo certo
  } catch (err) {
    res.status(401).send()
  }
}