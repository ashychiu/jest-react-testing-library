import { useState } from "react";
import "./App.css";
import { Button, Grid } from "@mui/material";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

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
          style={{ backgroundColor: buttonColor }}
          variant="contained"
        >
          Change to {newButtonColor}
        </Button>
        <input type="checkbox" />
      </Grid>
    </Grid>
  );
}

export default App;
