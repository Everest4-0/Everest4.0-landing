import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ListItem, Typography } from "@mui/material";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Check } from "lucide-react";

export function NestedList({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <List component="div" disablePadding>
        {items.map((desc) => (
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary={desc} />
          </ListItem>
        ))}
      </List>
    </List>
  );
}

export interface TabPanelProps {
  index?: number;
  value?: number;
  img: any;
  title: string;
  items: Array<string>;
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 10 }}>
          <div className="row">
            <div
              data-aos="fade-up"
              className="col-md-6"
              style={{
                height: "60vh",
                backgroundImage: `url(${props.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="col-md-6" style={{ padding: "5%", backgroundColor: "#fff" }}>
              <h2 data-aos="fade-up" data-aos-delay="50">
                {props.title}
              </h2>
              <div
                className="description pt-3"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <NestedList items={props.items} title={props.title} />
              </div>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyTab({ data }: { data: Array<TabPanelProps> }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          display: "flex",
          justifyContent: "center",
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {data.map((el, index) => (
            <Tab label={el.title} key={"tab-" + index} {...a11yProps(0)} />
          ))}
        </Tabs>
      </Box>

      {data.map((el, index) => (
        <CustomTabPanel
          key={"tabPanel-" + index}
          index={index}
          value={value}
          img={el.img}
          title={el.title}
          items={el.items}
        />
      ))}
    </Box>
  );
}
