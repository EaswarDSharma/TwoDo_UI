import {
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  IconButton,
  TextField,
  Box, Divider, Switch, styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
function Comp() {
  var compdata = [
    {  "createdAt":"2023-08-17T11:31:25.999Z","updatedAt":"2023-08-17T13:04:55.008Z",
    descrip: "asasasasasas", time: "" },
  ];
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: 300,
      margin: 100,
    },
    //style for font size
    resize: {
      fontSize: 50,
    },
  };
    // themeing
   const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#616161",
      },
    },
  });
  const storedDarkMode = (localStorage.getItem("dark-Mode") === "true")
  const [darkMode, setLight] = React.useState(storedDarkMode===true);
  React.useEffect(() => {localStorage.setItem("dark-Mode", darkMode); 
 // console.log("setting mode to ....->"+(darkMode))
 }, [darkMode]);
  var c = darkMode===true ? "#fffde7" : "#6d4c41"; //card
  var b = darkMode===true ? "#fafafa" : "#bdbdbd";//paper
//  console.log(darkMode+"  t  "+ localStorage.getItem("dark-Mode"));
   
  return (
    <div  sx={{}}>
      <Box>
      <ThemeProvider
          theme={
            darkMode===false ? themeDark:themeLight
          }>
                <CssBaseline />
                <MaterialUISwitch checked={!darkMode}
            onClick={() => {setLight(!darkMode); console.log("changing mode to   ....->"+(!darkMode))}}
            sx={{ margin: "20px 10px " }}
          />
      <Typography 
 variant="h3"
 fontFamily="Helvetica"
 color="black"
 fontWeight="900"
  style={{ flex: 1, textAlign: 'center', marginBottom: 5, }}>
        Two Do
          </Typography>
          
      <Divider sx={{ margin: "0px 0px 0px 5px" }}>
        <Button
          variant="outlined"
          startIcon={<TaskAltOutlinedIcon />}
          sx={{ margin: "0px 20px 30px 10px", minWidth: 50,mb: 2, }}
          size="large"
        >
          to complete
        </Button>
      </Divider>
      <Stack direction="column" spacing={2} sx={{ marginBottom: "100px" }}>
        {compdata.map((n, i = 0) => {
          i++;
          return (
            <Stack direction="row" key={i + 5} sx={{ spacing: 4 }}>
              <Chip
                key={i + 1}
                label={i}
                sx={{
                  margin: "5px",
                  background:
                    "linear-gradient(to right bottom, #430089, #82ffa1)",
                }}
              />
               <Chip
                key={i + 2}
                label={n.descrip.slice(0,15)}
                sx={{ margin: "0px 20px", minWidth: 200 }}
                onClick={1}
              />{" "}
              <Accordion
                TransitionProps={{ unmountOnExit: true }}
                key={i + 9}
                disableGutters
                style={{
                  '&:before': {
                    display: 'none', },
                  margin: "0px 20px ",
                  width: 400,
                  borderRadius: "20px",
                }}
              >
                
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id={i}>
                  <div>{n.preview}</div>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    style={{ width: 350 }}
                    maxRows={12}
                    multiline={true}
                    minRows={5}
                    inputProps={{
                      style: { fontSize: 14, color: "primary", minRows: 5 },
                    }}
                    size="large"
                    defaultValue={n.descrip}
                  />
                  <Stack direction="row" justifyContent="flex-end">
                    <IconButton aria-label="edit">
                      <SaveIcon color="action" />
                    </IconButton>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Chip
                  key={i + 2}
                  label={n.updatedAt.substring(10, 5)}
                  color="primary"
                  sx={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                />{" "}
              <Chip
                key={i + 2}
                label={n.updatedAt.substring(0,10)}
                color="primary"
                sx={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                key={i + 2}
                label={"created on "+n.createdAt.substring(0,10)}
                color="primary"
                sx={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
              />
              <Chip
                label={"done"}
                color="primary"
                sx={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                onClick={1}
              />
              <Chip
                icon={<DeleteIcon />}
                sx={{ margin: "0px 20px", backgroundColor: "white" }}
              >
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Chip>
            </Stack>
          );
        })}
      </Stack>
      </ThemeProvider>
      </Box>

    </div>
  );
}
export default Comp;
