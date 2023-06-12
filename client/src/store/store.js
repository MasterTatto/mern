import PostStore from "./post.store";

class Store {
    constructor() {
        this.posts = PostStore
    }
}

export const store = new Store()


