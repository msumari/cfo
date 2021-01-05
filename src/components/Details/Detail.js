import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";

function Detail({ title }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expenses}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">$100</Typography>
          {/* <Doughnut data="DATA" /> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Detail;
