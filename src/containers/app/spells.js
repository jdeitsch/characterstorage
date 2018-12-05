import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Spells from "../../srd/spells";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";

const styles = theme => ({});

class SpellsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Spells</Typography>
        <List>
            { Object.keys(Spells).map( (spell, key) => {
                return (
                    <React.Fragment key={key}>
                    <ListItem>
                        <ListItemText primary={Spells[spell].name} 
                          secondary={ Spells[spell].desc }
                        />
                    </ListItem>
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
export default withStyles(styles, { withTheme: true })(SpellsComponent);
