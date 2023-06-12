import React, {useEffect, useState} from 'react';
import {AppBar, Container, Grid, Grow, Typography} from "@mui/material";
import img from './assetss/memories.png'
import Posts from "./components/posts";
import Form from "./components/form";
import useStyles from './styles'
import {useStore} from "./hooks/useStore";
import {observer} from "mobx-react-lite";


const App = observer(() => {
    const classes = useStyles()
    const {posts} = useStore()

    const [currentID, setCurrentID] = useState(null)

    useEffect(() => {
        posts.getPosts()
    }, [])
    return (
        <Container maxWidth={'lg'}>
            <AppBar className={classes.appBar} sx={{
                flexDirection: 'row'
            }} position={'static'} color={'inherit'}>
                <Typography className={classes.heading} variant={'h2'} align={'center'}>Воспоминания</Typography>
                <img className={classes.image} src={img} alt="img" height={'60'}/>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentID={setCurrentID}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentID={currentID} setCurrentID={setCurrentID}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
});

export default App;
