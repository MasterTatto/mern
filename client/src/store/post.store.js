import {makeAutoObservable} from "mobx";
import PostService from "./services/post.service";

const convertToJson = (data) => {
    const res = JSON.stringify(data)
    return JSON.parse(res)
}

class PostStore {
    posts = []
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAllPost(posts) {
        this.posts = posts
    }

    setIsLoading(loading) {
        this.isLoading = loading
    }

    async getPosts() {
        this.setIsLoading(true)
        try {
            const res = await PostService.getPosts()
            this.setAllPost(convertToJson(res.data))
            this.setIsLoading(false)
        } catch (e) {
            console.log(e)
            this.setIsLoading(false)
        }
    }

    async addedPost(post) {
        try {
            const res = await PostService.addedPost(post)
            this.setAllPost([...this.posts, res.data])
        } catch (e) {
            console.log(e)

        }
    }

    async updatePost(id, post) {
        try {
            const res = await PostService.updatePost(id, post)
            this.setAllPost(this.posts.map((el) => el._id === id ? res.data : el))
        } catch (e) {
            console.log(e)

        }
    }

    async deletePost(id) {
        try {
            await PostService.deletePost(id)
            this.setAllPost(this.posts.filter((f) => f._id !== id))
        } catch (e) {
            console.log(e)

        }
    }

    async likePost(id) {
        try {
            const res = await PostService.likePost(id)
            this.setAllPost(this.posts.map((el) => el._id === id ? ({...el, likeCount: res.data.likeCount}) : el))
        } catch (e) {
            console.log(e)

        }
    }
}

export default new PostStore()
