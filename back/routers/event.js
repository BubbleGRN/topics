import { Router } from 'express'
import * as event from '../controllers/event.js'
import * as auth from '../middlewares/auth.js'
import upload from '../middlewares/upload.js'

const router = Router()

router.post('/', auth.jwt, upload, event.create)
router.get('/all', auth.jwt, event.getAll)
router.get('/:id', event.getId)
router.patch('/:id', auth.jwt, auth.admin, upload, event.edit)

export default router
