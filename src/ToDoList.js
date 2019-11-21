import React from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardHeader
} from "@material-ui/core";
import { connect } from "react-redux";

function ToDoList(props) {
  return (
    <Grid item lg={4} md={4}>
      {props.toDoList.map(toDoItem => (
        <Card style={{ marginBottom: 8 }}>
          <CardHeader title={toDoItem.text} />
        </Card>
      ))}
    </Grid>
  );
}

const mapStatetoProps = state => ({
  toDoList: state.toDoList
});

//returns todolist componnet with redux store data
export default connect(mapStatetoProps, null)(ToDoList);
