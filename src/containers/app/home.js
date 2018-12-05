import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Welcome to Character Storage</Typography>
        <Typography variant="body1" gutterBottom>
          This site is powered by the 5th edition SRD as well as derived 3rd
          party works published under the Open Gaming License 1.0a.
        </Typography>
        <Typography variant="body1">
          If you like this site, feel free to help keep the lights on by kicking
          a few nickels toward my Patreon. This site is now, and will always be,
          ad-free.
        </Typography>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Home);
