import api from "../../api";


class PostService {
    async getPosts() {
        return await api().get('posts')
    }

    async addedPost(post) {
        return await api().post('posts', post)
    }

    async updatePost(id, post) {
        return await api().patch(`posts/${id}`, post)
    }

    async deletePost(id) {
        return await api().delete(`posts/${id}`)
    }

    async likePost(id) {
        return await api().patch(`posts/${id}/likePost`)
    }
}

export default new PostService()
