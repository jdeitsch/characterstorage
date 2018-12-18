import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Chip from "@material-ui/core/Chip";
import Monsters from "../../srd/monsters";
import MonsterCard from "../../components/monsterCard";

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
    },
  },
};

class MonstersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMap: [],
      crs: [],
      selectedCRs: [],
      monsterTypes: [],
      selectedMonsterTypes: [],
      searchString: ''
    }
  }

  componentDidMount() {
    let crs = Array.from(new Set(Object.keys(Monsters).map((index) => {
      return Monsters[index].challenge_rating
    }))).sort((a,b)=>{return a-b});
    let monsterTypes = Array.from(new Set(Object.keys(Monsters).map((index) => {
      return Monsters[index].type
    }))).sort();

    let inputMap = Array.from(new Set(Object.keys(Monsters).map((index) => {
      return {
        index: index,
        name: Monsters[index].name,
        cr: Monsters[index].challenge_rating,
        type: Monsters[index].type
      }
    }))).sort();
    this.setState({
      inputMap: inputMap,
      crs: crs,
      monsterTypes: monsterTypes
    })
  }

  handleFractions = (number) => {
    if (number >= 1 || number === 0) { return number }
    else {
        if (number === 0.5) { return "½" }
        if (number === 0.25) { return "¼" }
        if (number === 0.125) { return "⅛"}
    }
  }

  titleCase = str => {
    return str.replace(/(^|\s)\S/g, function(t) {
      return t.toUpperCase();
    });
  };

  handleCRChange = (e) => {
    let value = e.target.value;
    this.setState({ selectedCRs: value.sort( (a,b) => { return a-b } ) }, this.updateTypeList(e.target.value));
  };

  updateTypeList = (list) => {
    let monsterTypes = Array.from(new Set(Object.keys(Monsters).map( monster => {
      if (list.includes(Monsters[monster].challenge_rating)) {
        return Monsters[monster].type
      }
    }))).sort();
    if (monsterTypes.indexOf(undefined) > 0) {
      monsterTypes.splice(monsterTypes.indexOf(undefined), 1)
    }
    this.setState({ monsterTypes: monsterTypes });
  }

  handleTypeChange = (e) => {
    let value = e.target.value;
    this.setState({ selectedMonsterTypes: value.sort() }, this.updateCRList(e.target.value));
  };

  updateCRList = (list) => {
    let crs = Array.from(new Set(Object.keys(Monsters).map( monster => {
      if (list.includes(Monsters[monster].type)) {
        return Monsters[monster].challenge_rating
      }
    }))).sort((a,b) => { return a-b});
    if (crs.indexOf(undefined) > 0) {
      crs.splice(crs.indexOf(undefined), 1)
    }
    this.setState({ crs: crs });
  }

  handleCRDelete = (e) => {
    let selectedCRs = JSON.parse(JSON.stringify(this.state.selectedCRs));
    selectedCRs.splice( selectedCRs.indexOf(e.target.closest("div.chipWrapper").dataset.value), 1);
    this.setState({ selectedCRs: selectedCRs })
  }

  handleTypeDelete = (e) => {
    let selectedMonsterTypes = JSON.parse(JSON.stringify(this.state.selectedMonsterTypes).toLowerCase());
    const thisOne = e.target.closest("div.chipWrapper").dataset.value.toLowerCase();
    selectedMonsterTypes.splice( selectedMonsterTypes.indexOf(thisOne), 1);
    this.setState({ selectedMonsterTypes: selectedMonsterTypes })
  }

  handleSearch = (e) => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>Monsters</Typography>
        <Grid container spacing={16}>
          <Grid item>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Filter by CR</InputLabel>
              <Select
                multiple
                onChange={this.handleCRChange}
                value={this.state.selectedCRs}
                renderValue={ selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <div className="chipWrapper" data-value={value} key={value}>
                        <Chip 
                          label={this.handleFractions(value)} 
                          className={classes.chip} 
                          onDelete={this.handleCRDelete}
                          />
                      </div>
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
                autoWidth
              >
                {this.state.crs.map((cr, key) => (
                  <MenuItem key={key} value={cr}>
                    {this.handleFractions(cr)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Filter by Type</InputLabel>
              <Select
                multiple
                onChange={this.handleTypeChange}
                value={this.state.selectedMonsterTypes}
                renderValue={ selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <div className="chipWrapper" data-value={value} key={value}>
                        <Chip 
                          label={this.titleCase(value)} 
                          className={classes.chip} 
                          onDelete={this.handleTypeDelete}
                        />
                      </div>
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
                autoWidth
              >
                {this.state.monsterTypes.map((monsterType, key) => (
                  <MenuItem key={key} value={monsterType}>
                    {this.titleCase(monsterType)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
            <TextField
              id="search"
              label="Search"
              className={classes.textField}
              value={this.state.searchString}
              onInput={this.handleSearch}
            />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={16} justify="center">
            { Object.keys(Monsters).map( (monster, key) => {
              if (
                (this.state.selectedCRs.length === 0 || (this.state.selectedCRs.length > 0 && this.state.selectedCRs.includes(Monsters[monster].challenge_rating))) &&
                (this.state.selectedMonsterTypes.length === 0 || (this.state.selectedMonsterTypes.length > 0 && this.state.selectedMonsterTypes.includes(Monsters[monster].type))) &&
                (this.state.searchString.length === 0 || (Monsters[monster].name.toLowerCase().includes( this.state.searchString.toLowerCase() )))
                )
              {
              if (this.props.match.params.monster === monster) {
                return (
                  <Grid item key={key}>
                    <MonsterCard 
                        monsterIndex={monster}
                        forceOpen={true}
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item key={key}>
                    <MonsterCard 
                        monsterIndex={monster}
                    />
                  </Grid>
                )
              }
            }})
            }
        </Grid>

      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(MonstersComponent);
