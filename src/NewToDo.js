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
import { addToDo } from "./Redux/Actions";

class NewToDo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ""
    };
    this.onToDoTextChange = this.onToDoTextChange.bind(this);
  }

  onToDoTextChange(event) {
    this.setState({
      ...this.state,
      newToDo: event.target.value
    });
  }

  onBtnClick = () => {
    this.props.dispatch(addToDo(this.state.newToDo));
    this.setState({
      ...this.state,
      newToDo: ""
    });
  };

  render() {
    return (
      <Grid item lg={4} md={4}>
        <TextField
          fullWidth
          value={this.state.newToDo}
          variant="outlined"
          label="New ToDo"
          onChange={this.onToDoTextChange}
          style={{ marginBottom: 16 }}
        />
        <Button variant="contained" color="primary" onClick={this.onBtnClick}>
          Add
        </Button>
      </Grid>
    );
  }
}

export default connect(null, null)(NewToDo);
