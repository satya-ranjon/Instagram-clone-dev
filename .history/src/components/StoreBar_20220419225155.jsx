import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function StoreBar() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  return (
    <Stack spacing={2} direction="row">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        }
      >
        <Avatar
          alt="Travis Howard"
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
        />
      </Badge>
      <Avatar
        alt="Travis Howard"
        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
        className="border-2 p-2"
      />
    </Stack>
  );
}
