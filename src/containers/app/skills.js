import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skills from "../../srd/skills";
import AbilityScores from "../../srd/ability_scores";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  card: {
    maxWidth: 410,
    padding: "1rem",
    marginBottom: "1rem"
  },
});

let allSkills = new Set(Object.keys(Skills).map( (index) => {
  return Skills[index].ability_score
}));
const stats = Array.from(allSkills).sort();
class SkillsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={16} justify="center">
            { stats.map( (stat, key) =>{
              return (
                <React.Fragment key={key}>
                  <Grid item>
                    <Typography variant="h6">{AbilityScores[stat].full_name}</Typography>
                    { Object.keys(Skills).map( (skill, key2) => {
                      if(Skills[skill].ability_score === stat) {
                        return (
                          <React.Fragment key={key2}>
                            <Card className={classes.card}>
                              <Typography variant="h6">{Skills[skill].name}</Typography>
                              <Typography variant="body1">{Skills[skill].desc}</Typography>
                            </Card>

                          </React.Fragment>
                        )
                      }
                    })}
                  </Grid>
                </React.Fragment>
              )
            })}
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(SkillsComponent);
