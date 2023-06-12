import React from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

const DialogModal = ({openModal, handleClose, deletePost}) => {
    return (
        <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Удалить пост?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={deletePost}>Согласен</Button>
                <Button onClick={handleClose} autoFocus>
                    Отмена
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogModal;
