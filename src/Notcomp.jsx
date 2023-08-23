import {
  Chip,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
function Notcomp() {
 
  var compdata = [
    {  "createdAt":"2023-08-17T11:31:25.999Z","updatedAt":"2023-08-17T13:04:55.008Z",
    descrip: "asasasasasas", time: "" },
    {  "createdAt":"2023-08-17T11:31:25.999Z","updatedAt":"2023-08-17T13:04:55.008Z",
    descrip: "asasasasasas", time: "" },
  ];

  return (
    <div>
      <Divider sx={{ margin: "0px 0px 0px 5px" }}>
        <Button
          variant="outlined"
          startIcon={<UnpublishedOutlinedIcon />}
          sx={{ margin: "0px 20px 30px 10px", minWidth: 50 }}
          size="large"
        >
          completed
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
                color="primary"
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
                  style={{
                    margin: "0px 20px ",
                    width: 400,
                    borderRadius: "20px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} id={i}>
                    <div>{n.descrip.slice(0,15)}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{n.descrip}</Typography>
                  </AccordionDetails>
                </Accordion>{" "}
                <Chip
                  key={i + 2}
                  label={n.updatedAt.substring(10, 5)}
                  color="primary"
                  sx={{ margin: "0px 20px", minWidth: 100, fontSize: 17 }}
                />{" "}
              <Chip
                key={i + 2}
                label={""+n.updatedAt.substring(0,10)}
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
                label={"undone"}
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
    </div>
  );
}
export default Notcomp;
