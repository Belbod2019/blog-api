const Blog = require('../models/Blog');
const calculateReadingTime = require('../utils/calculateReadingTime');

const getAllBlogs = async (req, res) => {
  try {
    const { search, tags, state, sortBy, order = 'desc', page = 1, limit = 20 } = req.query;

    const filter = { state: 'published' };
    if (search) {
      filter.$or = [
        { title: new RegExp(search, 'i') },
        { tags: new RegExp(search, 'i') },
      ];
    }
    if (tags) filter.tags = { $in: tags.split(',') };
    if (state) filter.state = state;

    const blogs = await Blog.find(filter)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('author', 'first_name last_name email');

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Other controller functions: getBlogById, createBlog, updateBlogState, editBlog, deleteBlog, getUserBlogs
// Refer to your provided code for these implementations.
