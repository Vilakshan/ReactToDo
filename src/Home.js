import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };
  }

  addNewToDo = text => {
    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, ...[text]]
    });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        style={{ padding: 16, flexGrow: 1, display: "flex" }}
        spacing={2}
      >
        <Grid item lg={4}>
          <Link to="ToDoDetail">ToDo Detail</Link>
        </Grid>
        <NewToDo addNewToDo={this.addNewToDo} />
        <ToDoList />
      </Grid>
    );
  }
}

export default Home;
