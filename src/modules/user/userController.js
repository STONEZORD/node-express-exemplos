import { Router } from "express";

import { signup, login } from "./userService";

const AUTH_COKKIE_NAME = 'authorization'

const router = Router()

router.post('/signup', (req, res) => {
  try { // verifica se o erro esta acontecendo em algum lugar
    const token = signup(req.body)
    res.cookie(AUTH_COKKIE_NAME, token).status(201).send() // a funcao que vai criar o cookie  1par o nome do cookie  2par o token que esta recebendo
  } catch (err) {
    if (err.message === 'email_existente')
      return res.status(400).send(err.message) // mostra o erro de usuario

    res.status(500).send(err.message) // mostra um erro desconhecido

  }
})

router.post('/login', (req, res) => {
  try{
    const token = login(req.body)
    res.cookie(AUTH_COKKIE_NAME, token).status(200).send()
  } catch (err) {
    if (err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')
    return res.status(400).send(err.message)

    res.status(500).send()

  }
})


export default router
