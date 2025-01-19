const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlogState,
  editBlog,
  deleteBlog,
  getUserBlogs,
} = require('../controllers/blogController');

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', authenticate, createBlog);
router.patch('/:id/state', authenticate, updateBlogState);
router.patch('/:id', authenticate, editBlog);
router.delete('/:id', authenticate, deleteBlog);
router.get('/user/blogs', authenticate, getUserBlogs);

module.exports = router;
