import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'// funcao de middleware

import { createPost, getPosts } from './postService'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => { // 1par rota/ 2par middleware
  try {
    const post = createPost(req.body, req.user)
    res.status(200).send(post)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  try {
    const posts = getPosts(req.params.id)// pega o id
    res.status(200).send(posts)
  } catch (err) {
    if (err.message === 'post_nao_existe')
      return res.status(400).send(err.message)

    res.status(500).send(err.message)
  }
})

export default router
