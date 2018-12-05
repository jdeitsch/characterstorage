import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Classes from "../../srd/classes";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BarbarianIcon from "../../classIcons/barbarian";
import BardIcon from "../../classIcons/bard";
import ClericIcon from "../../classIcons/cleric";
import DruidIcon from "../../classIcons/druid";
import FighterIcon from "../../classIcons/fighter";
import MonkIcon from "../../classIcons/monk";
import PaladinIcon from "../../classIcons/paladin";
import RangerIcon from "../../classIcons/ranger";
import RogueIcon from "../../classIcons/rogue";
import SorcererIcon from "../../classIcons/sorcerer";
import WarlockIcon from "../../classIcons/warlock";
import WizardIcon from "../../classIcons/wizard";

const styles = theme => ({});

class ClassesComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Classes</Typography>
        <List>
                { Object.keys(Classes).map( (characterClass, key) => {
                    return (
                        <React.Fragment key={key}>
                        <ListItem>
                            <ListItemText primary={Classes[characterClass].name} />
                        </ListItem>
                            {Classes[characterClass].subclasses.length > 0 &&
                                <div>
                                {Classes[characterClass].subclasses.map( (subclass, key) => {
                                    return (
                                        <ListItem key={key}>
                                            <ListItemIcon>
                                              {characterClass === "Barbarian" &&
                                                <BarbarianIcon />
                                              }
                                              {characterClass === "Bard" &&
                                                <BardIcon />
                                              }
                                              {characterClass === "Cleric" &&
                                                <ClericIcon />
                                              }
                                              {characterClass === "Druid" &&
                                                <DruidIcon />
                                              }
                                              {characterClass === "Fighter" &&
                                                <FighterIcon />
                                              }
                                              {characterClass === "Monk" &&
                                                <MonkIcon />
                                              }
                                              {characterClass === "Paladin" &&
                                                <PaladinIcon />
                                              }
                                              {characterClass === "Ranger" &&
                                                <RangerIcon />
                                              }
                                              {characterClass === "Rogue" &&
                                                <RogueIcon />
                                              }
                                              {characterClass === "Sorcerer" &&
                                                <SorcererIcon />
                                              }
                                              {characterClass === "Warlock" &&
                                                <WarlockIcon />
                                              }
                                              {characterClass === "Wizard" &&
                                                <WizardIcon />
                                              }
                                              
                                            </ListItemIcon>
                                            <ListItemText primary={subclass.name} />
                                        </ListItem>
                                    )
                                })}
                                </div>
                            }
                        </React.Fragment>
                    )
                })
                }
            </List>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(ClassesComponent);
