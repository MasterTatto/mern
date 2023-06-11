import React, {useEffect} from 'react';
import axios from "axios";
import {AppBar, Container, Grid, Grow, Typography} from "@mui/material";
import img from './assetss/memories.png'
import Posts from "./components/posts";
import Form from "./components/form";
import useStyles from './styles'
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts";

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/posts')
                debugger
            } catch (e) {
                console.log(e)
            }
        }
        getData()
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
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
