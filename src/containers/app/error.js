import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({});

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>I am Error</Typography>
        <Typography variant="body1" gutterBottom>
          Deepest apologies, it seems you've hit a dead-end and I can't find a pape to serve you.
        </Typography>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Error);
