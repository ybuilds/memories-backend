import PostMessage from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(404).json({"message": err.message});
    }
};

export const addPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);
    
    try {
        console.log("Request received:", newPost);
        await newPost.save();
        res.status(201).json(newPost);
    } catch(err) {
        res.status(409).json({"message": err.message});
    }
};