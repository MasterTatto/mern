import api from "../../api";


class PostService {
    async getPosts() {
        return await api().get('posts')
    }

    async addedPost(post) {
        return await api().post('posts', post)
    }
}

export default new PostService()
