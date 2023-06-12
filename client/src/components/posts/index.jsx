import React from 'react';
import Post from "./post";
import useStyles from "./styles";
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";

const Posts = observer(() => {
    const classes = useStyles()
    const store = useStore()
    console.log(store.posts.isLoading)
    return (
        <div>
            {store.posts.isLoading ? 'loading...' : <>
                {store.posts.posts.map((el, i) => {
                    return <h1 key={i}>{el.title}</h1>
                })}
            </>}
        </div>
    );
});

export default Posts;
