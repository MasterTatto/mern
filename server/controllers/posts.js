import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Нет постов по такому id')

    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true})

    res.status(201).json(updatePost)
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Нет постов по такому id')

    const deletePost = await PostMessage.findByIdAndRemove(_id)

    res.status(201).json(deletePost)
}

export const likePost = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Нет постов по такому id')

    const post = await PostMessage.findById(id)
    const updatePost = await PostMessage.findByIdAndUpdate(id, {
        likeCount: post.likeCount + 1
    }, {new: true})
    console.log(updatePost)

    res.status(201).json({likeCount: updatePost.likeCount})
}
