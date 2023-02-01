import { useState } from "react";
import "./App.css";
import { Button, Grid } from "@mui/material";
import { convertCamelWithSpaces } from "./AppLogic.ts";

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disableButton, setDisableButton] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const changeColor = () => {
    setButtonColor(newButtonColor);
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Button
          onClick={changeColor}
          style={{ backgroundColor: disableButton ? "gray" : buttonColor }}
          variant="contained"
          disabled={disableButton}
        >
          Change to {convertCamelWithSpaces(newButtonColor)}
        </Button>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          onClick={() => setDisableButton(!disableButton)}
        />
        <label htmlFor="disable-button-checkbox">Disable Button</label>
      </Grid>
    </Grid>
  );
}

export default App;
