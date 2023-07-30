import {Router}from 'express'
import { getNews } from '../controller/newsController.js'
export const router=Router()
router.get('/',getNews)