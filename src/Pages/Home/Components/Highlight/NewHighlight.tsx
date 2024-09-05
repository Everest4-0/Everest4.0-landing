import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import {
  Content,
  ContentBox,
  HighComponentBox,
  HighComponentVideoBox,
} from "./NewHighlightStyled";
import BannerDialog from "./BannerDialog";
import useApi from "../../../../hooks/useApi";

export type MediaType = {
  data: {
    attributes: { url: string; mime: string; name: string };
  };
};

export type HighlightType = {
  id?: string;
  attributes: {
    title: string;
    caption: any;
    contentPosition: "left" | "right";
    media: MediaType
  };
};

export function NewHighlight(props: any) {
  const { data, error, loading } = useApi<HighlightType[]>({
    endpoint: "/highlights?populate=media",
    method: "GET",
  });

  return (
    <>
      {data && (
        <Carousel className="container pt-5 ">
          {data?.map((item, key) => {
            return <Item key={key} item={item} />;
          })}
        </Carousel>
      )}
    </>
  );
}

function Item({ item, key }: { key: number; item: HighlightType }) {
  const [open, setOpen] = useState(false);
  const [currentContent, setContent] = useState<any>();

  const handleClick = (item: MediaType) => {
    setContent(item);
    setOpen(true);
  };

  return (
    <Paper className="border-0 shadow-none" key={`item-${key} `}>
      <ContentBox className="row p-0">
        <Content
          className={`col-md-6 order-${key} `}
          /* className="col-md-4 order-2" */
        >
          <h2 className="title h2" style={{ paddingTop: "28px" }}>
            {item.attributes.title}
          </h2>
          <ReactMarkdown className="markdown-content">{item.attributes.caption}</ReactMarkdown>;
        </Content>

        {item.attributes.media.data.attributes.mime
          .includes("video") ? (
          <>
            <HighComponentVideoBox
              onClick={() => handleClick(item.attributes.media)}
              className={` col-md-6   p-0`}
            >
              <video
                src={item.attributes.media.data.attributes.url}
                poster="poster.jpg"
                loop
                muted
                autoPlay
              >
                <a href={item.attributes.media.data.attributes.url}>
                  Download song
                </a>
              </video>
            </HighComponentVideoBox>
          </>
        ) : (
          <HighComponentBox
            onClick={() => handleClick(item.attributes.media)}
            className={` col-md-6   p-0`}
            image={item.attributes.media.data.attributes.url}
          >
            <div className="banner">banner</div>
          </HighComponentBox>
        )}
      </ContentBox>
      <BannerDialog open={open} setOpen={setOpen} item={currentContent} />
    </Paper>
  );
}
