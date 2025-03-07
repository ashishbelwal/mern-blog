const express = require('express');
const Post = require('../models/Post'); 
const router = express.Router();

// 1. Create a new post
router.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

// 2. Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// 3. Get a specific post by ID
router.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
});

// 4. Update a post
router.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
});

// 5. Delete a post
router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});

module.exports = router;
