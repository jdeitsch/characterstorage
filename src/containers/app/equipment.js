import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Equipment from "../../srd/equipment";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";

const styles = theme => ({});

class EquipmentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Equipment</Typography>
        <List>
            { Object.keys(Equipment).map( (item, key) => {
                return (
                    <React.Fragment key={key}>
                    <ListItem>
                        <ListItemText primary={Equipment[item].name} 
                          secondary={ Equipment[item].equipment_category }
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
export default withStyles(styles, { withTheme: true })(EquipmentComponent);
