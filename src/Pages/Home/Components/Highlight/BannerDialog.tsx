import {
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { SetStateAction } from "react";
import { MediaType } from "./NewHighlight";

const BannerDialog = ({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  item: MediaType;
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    open && (
      <Dialog
        open={open}
        maxWidth={"xl"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {item.data.attributes.mime.includes("video") ? (
            <video
              src={item.data.attributes.url}
              poster="poster.jpg"
              loop
              muted
              autoPlay
              style={{ height: "100%", paddingRight: "-105%" }}
            >
              <a href={item.data.attributes.url}>Download song</a>
            </video>
          ) : (
            <img
              src={item.data.attributes.url}
              style={{ height: "100%", paddingRight: "-105%" }}
            />
          )}
          <Typography className="MediaCaption">
            {item.data.attributes.name}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    )
  );
};

export default BannerDialog;
