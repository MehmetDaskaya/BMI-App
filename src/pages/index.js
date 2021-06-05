import React, { useState } from "react";
import logoImg from "../images/logo.png";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import "./styles.css";

function Main() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setBMI] = useState("");

  const calculateImc = () => {
    const heightm = height / 100;
    setBMI((weight / (heightm * heightm)).toFixed(2));
  };

  const verifyImc = () => {
    if (imc < 18.5) return "Underweight";
    if (imc < 24.9) return "Normal Weight";
    if (imc < 29.9) return "Pre-Obesity";
    if (imc < 39.9) return "Obesity";
    if (imc > 40.0) return "Over Obesity";
    return "Not defined";
  };

  return (
    <div id="page">
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={12} sm={6}>
            <div className="logo-container">
              <img src={logoImg} alt="Logo" />

              <p>
                Body mass index is a value derived from the mass and height of a
                person. The BMI is defined as the body mass divided by the
                square of the body height, and is expressed in units of kg/m²,
                resulting from mass in kilograms and height in metres.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="infos">
              <Container>
                <Grid container direction="column" spacing={4}>
                  <Typography variant="h2">Calculate Your BMI</Typography>
                  <Grid item>
                    <TextField
                      label="Height in cm"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={height}
                      onChange={({ target }) => setHeight(target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Weight in kg"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={weight}
                      onChange={({ target }) => setWeight(target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => calculateImc()}
                    >
                      Calculate
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="p">
                      Your BMI is: {imc} kg/m2 - {verifyImc()}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
