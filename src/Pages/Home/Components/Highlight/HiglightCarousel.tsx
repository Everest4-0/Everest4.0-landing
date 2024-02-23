import React, { useState } from 'react';
import Settings, { DefaultSettingsT, SettingsT } from './Settings';
import Carousel from 'react-material-ui-carousel';
import './Style.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@mui/material';
import items, { Item } from './Items';
import BannerDialog from './BannerDialog';


const HighlightCaroucel = () => {

    const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

    return (
        <div style={{ marginTop: "0px", color: "#494949" }}>
            <Carousel
                className="Example"
                {...settings}
            // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
            // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
            // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

            // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
            // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
            // indicatorContainerProps={{style: {margin: "20px"}}}
            // NextIcon='next'
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
        </div>
    );
}



interface BannerProps {
    item: Item,
    contentPosition: "left" | "right" | "middle",
    length?: number,

}


const Banner = (props: BannerProps) => {
    const [open, setOpen] = React.useState(false);
    const [currentContent, setContent] = React.useState<any>();

    const handleClick = (item: any) => {
        setContent(item)
        setOpen(true);
    }
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems: number = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>
                {/*
                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>*/}
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={4} key={item.Name}>
                {item.Type === 'Video' ?

                    <video onClick={()=>handleClick(item)} src={item.Image} poster="poster.jpg" loop muted autoPlay style={{ height: "100%", paddingRight: "-105%" }} >
                        <a href={item.Image}>Download song</a>
                    </video>
                    :
                    <CardMedia
                    onClick={()=>handleClick(item)}
                        className="Media"
                        image={item.Image}
                        title={item.Name}
                    >
                        <Typography className="MediaCaption">
                            {item.Name}
                        </Typography>
                    </CardMedia>}
            </Grid>
        )
        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
            <BannerDialog open={open} setOpen={setOpen} item={currentContent} />
        </Card>
    )
}

export default HighlightCaroucel;