import React from 'react';
import Post from "./post";
import useStyles from "./styles";
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import {CircularProgress, Grid} from "@mui/material";

const Posts = observer(({setCurrentID}) => {
    const classes = useStyles()
    const store = useStore()
    console.log(store.posts.isLoading)
    return (
        <div>
            {store.posts.isLoading ? <CircularProgress/> :
                <Grid className={classes.container} container alignItems={'stretch'} spacing={3}>
                    {store.posts.posts.map((el, i) => {
                        return <Grid item key={i} xs={12} sm={6}>
                            <Post setCurrentID={setCurrentID} {...el}/>
                        </Grid>
                    })}
                </Grid>}
        </div>
    );
});

export default Posts;
