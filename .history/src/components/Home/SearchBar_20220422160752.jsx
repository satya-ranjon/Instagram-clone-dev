import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const list = () => (

  );

  return (
    <div>
    <Box sx="top" role="presentation">
      <List className="h-96"></List>
    </Box>
    </div>
  );
}
