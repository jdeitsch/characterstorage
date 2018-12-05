import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skills from "../../srd/skills";
import AbilityScores from "../../srd/ability_scores";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";

const styles = theme => ({});

class SkillsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <List>
            { Object.keys(Skills).map( (skill, key) => {
                return (
                    <React.Fragment key={key}>
                    <ListItem>
                        <ListItemText primary={Skills[skill].name} 
                          secondary={ AbilityScores[Skills[skill]["ability_score"]].name }
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
export default withStyles(styles, { withTheme: true })(SkillsComponent);
