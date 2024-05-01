import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import items, { ItemType } from "./Items";
import {
  Content,
  ContentBox,
  HighComponentBox,
  HighComponentVideoBox,
} from "./NewHighlightStyled";
import BannerDialog from "./BannerDialog";

interface Iitem {
  i: number;
  item: ItemType;
}

export function NewHighlight(props: any) {
  return (
    <Carousel className="container pt-5 ">
      {items.map((item, i) => (
        <Item i={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item, i }: Iitem) {
  const [open, setOpen] = React.useState(false);
  const [currentContent, setContent] = React.useState<any>();

  const handleClick = (item: any) => {
    setContent(item)
    setOpen(true);
  }
  return (
    <Paper className="border-0 shadow-none">
      <ContentBox className="row p-0">
        <Content
          className={`col-md-4 order-${i} `}
          /* className="col-md-4 order-2" */ key={i}
        >
          <h2 className="title h2">{item.Name}</h2>
          <Typography className="Title">{item.Name}</Typography>
          <Typography className="Caption">{item.Caption}</Typography>
        </Content>

        {item.Items.map((data, key) => {
          {
            return data.Type == "Video" ? (
              <>
                <HighComponentVideoBox  onClick={()=>handleClick(data)} className={` col-md-4   p-0`}>
                  <video
                    src={data.Image}
                    poster="poster.jpg"
                    loop
                    muted
                    autoPlay
                  >
                    <a href={data.Image}>Download song</a>
                  </video>
                </HighComponentVideoBox>
              </>
            ) : (
              <HighComponentBox onClick={()=>handleClick(data)}
                className={` col-md-4  order-${key} p-0`}
                key={key}
                image={data.Image}
              >
                <div className="banner">banner</div>
              </HighComponentBox>
            );
          }
        })}
      </ContentBox>
      <BannerDialog open={open} setOpen={setOpen} item={currentContent} />
    </Paper>
  );
}
