import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function StoreBar() {
  return (
    <div>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        }
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
    </div>
  );
}
