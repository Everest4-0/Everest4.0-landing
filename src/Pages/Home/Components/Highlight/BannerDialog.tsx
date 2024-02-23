import { Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const BannerDialog = ({ open, setOpen, item }: any) => {

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            maxWidth={'xl'}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>

                {item?.Type === 'Video' ?
                    <video src={item?.Image} poster="poster.jpg" loop muted autoPlay style={{ height: "100%", paddingRight: "-105%" }} >
                        <a href={item?.Image}>Download song</a>
                    </video>
                    :
                    <img src={item?.Image} style={{ height: "100%", paddingRight: "-105%" }}/>
                }
                <Typography className="MediaCaption">
                    {item?.Name}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Fechar</Button>

            </DialogActions>
        </Dialog>
    )
}

export default BannerDialog
