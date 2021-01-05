import React from "react";
import { Grid } from "@material-ui/core";
import Detail from "./components/Details/Detail";
import Main from "./components/Main/Main";
import useStyles from "./appstyle";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={1}
        alignItems="center"
        justify="center"
        style={{ height: "100vh " }}
      >
        <Grid item xs={12} sm={4}>
          <Detail title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Detail title="Expenses" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
