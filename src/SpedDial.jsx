import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

const actions = [
  { icon: <UnpublishedOutlinedIcon />, name: "to complete" },
  { icon: <TaskAltOutlinedIcon />, name: "completed" },
];

export default function SpedDial() {
  return (
    <Box sx={{ height: 20, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ right: 16, marginLeft: 160, top: "auto" }}
        aria-label="Add"
        className="classes.fab"
        style={{ position: "fixed" }}
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
