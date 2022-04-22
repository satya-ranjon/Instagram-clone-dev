import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import User from "../Assets/User";

export default function StoreBar() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  return (
    <div>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        }
      >
        <Avatar alt="Travis Howard" src={User} />
      </Badge>
    </div>
  );
}
