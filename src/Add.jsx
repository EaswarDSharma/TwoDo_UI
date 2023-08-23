import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  TextField,
  Fab,
  Toolbar,
  Stack,
  CssBaseline,
  Button,
} from "@mui/material";
import React from "react";
import { Height } from "@mui/icons-material";
//
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function Add(props) {
  return (
    <>
          <CssBaseline />
      <AppBar
        position="fixed"
        elevation={4}
        color="primary"
        sx={{ top: "auto", bottom: 0, minHeight: "100px" }}
      >
          <Toolbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledFab   variant="contained" color="secondary" aria-label="add">
              <AddIcon fontSize="large" />
            </StyledFab>
            <TextField
              style={{
                width: 350,
                fontSize: 14,
                backgroundColor: "white",
                borderRadius: 5,
                marginLeft:"550px",
                
              }}
              rows={3.4}
              multiline={true}
              size="large"
              placeholder="add a task"
              margin="dense"
            />
            <Button variant="contained" color="secondary" style={{marginLeft:'470px',marginTop:'40px' }} >Logout</Button>
  </div>
          </Toolbar>
      </AppBar>
    </>
  );
}

export default Add;
