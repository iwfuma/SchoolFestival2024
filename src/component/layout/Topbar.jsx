import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Button, Slide } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const TopBar = () => {
  const [showBar, setShowBar] = useState(false);
  const hoverTimeout = useRef(null);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 10) {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
        if (!showBar && !hoverTimeout.current) {
          hoverTimeout.current = setTimeout(() => {
            setShowBar(true);
            hoverTimeout.current = null;
          }, 100);
        }
      } else {
        if (hoverTimeout.current) {
          clearTimeout(hoverTimeout.current);
          hoverTimeout.current = null;
        }
        if (showBar && !hideTimeout.current) {
          hideTimeout.current = setTimeout(() => {
            setShowBar(false);
            hideTimeout.current = null;
          }, 500); // 500ms後に非表示
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [showBar]);

  return (
    <Slide direction="down" in={showBar} mountOnEnter unmountOnExit>
      <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center", gap: 2 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ textTransform: "none" }}
          >
            ホーム
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/oneclick"
            sx={{ textTransform: "none" }}
          >
            One Click Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/phishing"
            sx={{ textTransform: "none" }}
          >
            Phishing Mail
          </Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default TopBar;
