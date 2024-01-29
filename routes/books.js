const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books.controller')



router.get('/', booksController.getAll)
router.get('/:id', booksController.getByid)
router.post('/', booksController.store)
router.delete('/:id', booksController.destroy)
router.get('/jenis/:jenis', booksController.getByJenis)
router.put('/:id', booksController.put)


module.exports = router;