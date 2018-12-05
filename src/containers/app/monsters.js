import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Monsters from "../../srd/monsters";
import MonsterCard from "../../components/monsterCard";

import Grid from '@material-ui/core/Grid';

const styles = theme => ({});

class MonstersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Monsters</Typography>
        <Grid container spacing={16} justify="center">
            { Object.keys(Monsters).map( (monster, key) => {
              if (this.props.match.params.monster === monster) {
                return (
                  <Grid item key={key}>
                    <MonsterCard 
                        monster={Monsters[monster]} 
                        monsterIndex={monster}
                        forceOpen={true}
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item key={key}>
                    <MonsterCard 
                        monster={Monsters[monster]} 
                        monsterIndex={monster}
                    />
                  </Grid>
                )
              }
            })
            }
        </Grid>

      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(MonstersComponent);
