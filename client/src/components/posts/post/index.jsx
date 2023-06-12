import React, {useState} from 'react';
import useStyles from "./styles";
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {MoreHoriz} from '@mui/icons-material';

import moment from "moment";
import {useStore} from "../../../hooks/useStore";
import {observer} from "mobx-react-lite";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import DialogModal from "./dialog";

const Post = observer(({likeCount, message, setCurrentID, selectedFile, title, createdAt, creator, tags, _id}) => {
    const classes = useStyles()
    const store = useStore()
    const [openModal, setOpenModal] = useState(false)

    const deletePost = async () => {
        await store.posts.deletePost(_id)
        handleClose()
    }

    const likePost = async () => {
        await store.posts.likePost(_id)
    }

    const handleClose = () => setOpenModal(false)
    return (
        <Card className={classes.card}>
            <DialogModal deletePost={deletePost} openModal={openModal} handleClose={handleClose}/>
            <CardMedia className={classes.media} image={selectedFile} title={title}/>
            <div className={classes.overlay}>
                <Typography variant={'h6'}>{creator}</Typography>
                <Typography variant={'body2'}>{moment(createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{color: '#fff'}} size={'small'} onClick={() => setCurrentID(_id)}>
                    <MoreHoriz/>
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant={'body2'} color={'secondary'}>{tags.map((el) => `#${el} `)}</Typography>
            </div>
            <Typography className={classes.title} variant={'h5'} gutterBottom>{title}</Typography>
            <CardContent>
                <Typography className={classes.title} variant={'h5'} gutterBottom>{message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>

                <Button size={'small'} color={'primary'} onClick={likePost} sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <ThumbUpIcon/>
                    &nbsp;like&nbsp;
                    {likeCount}
                </Button>

                <Button size={'small'} color={'primary'} onClick={() => setOpenModal(true)}>
                    <DeleteIcon/>
                    Delete
                </Button>

            </CardActions>
        </Card>
    );
});

export default Post;
