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
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../settingsSlice";


export default function Header() {
  const dispatch = useDispatch();

  const [badgeCount, setBadgeCount] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const view = useSelector((state: any) => {
    return state.settings.view;
  });

  return (
    <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            margin: "5px"
          }}
        >
          <Link to="/" className={styles.link}>
            <LogoSvg width={90} height={60} />
          </Link>
          {view === "grid" ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={() => dispatch(toggleView())}
            >
              <UnfoldMoreIcon
                sx={{ fontSize: "1.5rem" }}
                className={styles.icon}
              />
              <FormatListBulletedIcon
                sx={{ fontSize: "2rem" }}
                className={styles.icon}
              />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 5 }}
              onClick={() => dispatch(toggleView())}
            >
              <UnfoldMoreIcon
                sx={{ fontSize: "1.5rem" }}
                className={styles.icon}
              />
              <GridViewIcon sx={{ fontSize: "2rem" }} className={styles.icon} />
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
                <NotificationsIcon
                  sx={{ fontSize: "2rem" }}
                  className={styles.icon}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <TranslateIcon
                sx={{ fontSize: "2rem" }}
                className={styles.icon}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        title="Feedback"
        open={isModalOpen}
        onOk={handleOk}
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          "NewsTs" app was created using TypeScript, React, Redux , and,
          Testing, AntDesign, Material UI libraries, and, CSS modules.
          Interesting mini-project to exercise programming skills.
        </p>
      </Modal>
    </Box>
  );
}
