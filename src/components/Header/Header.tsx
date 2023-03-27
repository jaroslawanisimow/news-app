import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TranslateIcon from "@mui/icons-material/Translate";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { LogoSvg } from "../Logo/Logo";

type Props = {
  onClick1: () => void;
};

export default function Header({ onClick1 }: Props) {
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
    onClick1();
  };

  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, width: "100%", zIndex: 10 }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            margin: "5px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Link to="/" className={styles.link}>
            <LogoSvg width={125} height={50} />
          </Link>
          {isGrid ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={() => {
                toggleIcons();
              }}
            >
              <UnfoldMoreIcon sx={{ fontSize: "1.5rem" }} />
              <FormatListBulletedIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={() => {
                toggleIcons();
              }}
              // onClick={toggleIcons}
              // onClick1();
              // onClick={() => setIsGrid(!isGrid)}
            >
              <UnfoldMoreIcon sx={{ fontSize: "1.5rem" }} />
              <GridViewIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
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
                <NotificationsIcon sx={{ fontSize: "2rem" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <TranslateIcon sx={{ fontSize: "2rem" }} />
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
