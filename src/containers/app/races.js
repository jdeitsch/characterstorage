import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Races from "../../srd/races";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({});

class RacesComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Races</Typography>
        <List>
            { Object.keys(Races).map( (race, key) => {
                return (
                    <React.Fragment key={key}>
                    <ListItem>
                        <ListItemText primary={Races[race].name} />
                    </ListItem>
                        {Races[race].subraces.length > 0 &&
                            <React.Fragment>
                            {Races[race].subraces.map( (subrace, key) => {
                                return (
                                    <ListItem key={key}>
                                        <ListItemText secondary={subrace.name} />
                                    </ListItem>
                                )
                            })}
                            </React.Fragment>
                        }
                        <Divider />
                    </React.Fragment>
                )
            })
            }
        </List>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(RacesComponent);
