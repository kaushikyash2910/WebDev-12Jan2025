const express = require('express');
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/postController');
const router = express.Router();

router.get('/', postCtrl.getAllPosts);
// router.get('/:id', postCtrl.getPostById);
router.post('/', auth, postCtrl.createPost);
// router.put('/:id', auth, postCtrl.updatePost);
// router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;