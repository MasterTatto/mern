import React, {useState} from 'react';
import useStyles from "./styles";
import {Button, Paper, TextField, Typography} from "@mui/material";
import FileBase from "react-file-base64";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";

const Form = observer(() => {
    const classes = useStyles()
    const store = useStore()
    const [postDate, setPostDate] = useState({
        created: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const onChange = (key, value) => setPostDate({...postDate, [key]: value})
    const handleSubmit = () => {
        store.posts.addedPost(postDate)
    }
    const clear = () => setPostDate({
        created: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    return (
        <Paper className={classes.paper} sx={{
            padding: '10px 15px'
        }}>
            <form autoComplete={'off'} noValidate className={classes.from} onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <Typography variant={'h6'}>Создать пост</Typography>
                <br/>
                <TextField
                    name={'creator'}
                    variant={'outlined'}
                    label={'Создатель'}
                    fullWidth
                    value={postDate.created}
                    onChange={(e) => onChange('created', e.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    name={'title'}
                    variant={'outlined'}
                    label={'Тайтл'}
                    fullWidth
                    value={postDate.title}
                    onChange={(e) => onChange('title', e.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    name={'message'}
                    variant={'outlined'}
                    label={'Сообщение'}
                    fullWidth
                    value={postDate.message}
                    onChange={(e) => onChange('message', e.target.value)}
                />
                <br/>
                <br/>
                <TextField
                    name={'tags'}
                    variant={'outlined'}
                    label={'Теги'}
                    fullWidth
                    value={postDate.tags}
                    onChange={(e) => onChange('tags', e.target.value)}
                />
                <br/>
                <br/>
                <div>
                    <FileBase type={'file'} multiple={false} onDone={({base64}) => onChange('selectedFile', base64)}/>
                </div>
                <br/>

                <Button className={classes.buttonSubmit} variant={'contained'} size={'large'} fullWidth
                        type={'submit'}>Отправить</Button>
                <br/>
                <br/>
                <Button className={classes.buttonSubmit} variant={'contained'} color={'secondary'} size={'large'}
                        fullWidth
                        onClick={clear}>Очистить</Button>
            </form>
        </Paper>
    );
});

export default Form;
