import React, { useContext } from "react";
import useStyles from "./style";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

function List() {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 200,
      date: "Sun Dec 27 2020",
    },
    {
      id: 2,
      type: "Expenses",
      category: "Transport",
      amount: 20,
      date: "Tues Dec 29 2020",
    },
    {
      id: 3,
      type: "Income",
      category: "Stocks",
      amount: 100,
      date: "Wed Dec 30 2020",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
