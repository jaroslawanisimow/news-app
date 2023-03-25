import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Header() {
  const [badgeCount, setBadgeCount] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isGrid, setIsGrid] = React.useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const toggleIcons = () => {
    setIsGrid(!isGrid);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ margin: "0 5px" }}>
          <Link to="/" className={styles.link}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "block", margin: "0 25px 0 0" }}
            >
              NewsApp.tsx
            </Typography>
          </Link>
          {isGrid ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={toggleIcons}
            >
              <GridViewIcon />
              <UnfoldMoreIcon />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={toggleIcons}
            >
              <FormatListBulletedIcon />
              <UnfoldMoreIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "block" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                setBadgeCount(0);
                showModal();
              }}
              color="inherit"
            >
              <Badge badgeContent={badgeCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        title="Text"
        open={isModalOpen}
        onOk={handleOk}
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>Some text...</p>
      </Modal>
    </Box>
  );
}
