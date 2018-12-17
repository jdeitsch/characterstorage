import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import LinkIcon from "@material-ui/icons/Link";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Monsters from "../srd/monsters";
import Skills from "../srd/skills";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

const styles = theme => ({
  card: {
    maxWidth: 410
  },
  chip: {
    float: "right"
  },
  chipMargin: {
    marginLeft: "30px"
  },
  statChip: {
    marginRight: 8,
    marginBottom: 8
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 100,
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    maxHeight: "90%",
    overflow: "auto"
  }
});

class MonsterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tooltipOpen: false,
      monster:  Monsters[this.props.monsterIndex]
    };
  }

  componentDidMount() {
      if(this.props.forceOpen) {
          this.setState({ open: true });
      }
  };

  componentWillReceiveProps() {};

  titleCase = str => {
    return str.replace(/(^|\s)\S/g, function(t) {
      return t.toUpperCase();
    });
  };

  checkSkills = monster => {
    let skills = [];
    Object.keys(Skills).map(skill => {
      skills.push(Skills[skill].name.toLowerCase().replace(" ", "_"));
    });
    let hasSkills = false;
    Object.keys(monster).map(attr => {
      if (skills.includes(attr)) {
        hasSkills = true;
      }
    });
    return hasSkills;
  };

  openModal = () => {
    this.setState({ open: true } );
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  copyDeepUrl = () => {
    navigator.clipboard.writeText(window.location.origin+'/#/monsters/'+this.props.monsterIndex)
    .then(() => {
        this.setState({ tooltipOpen: true });
    })
    .catch(err => {
        // This can happen if the user denies clipboard permissions:
        console.error('Could not copy text: ', err);
    });
  };

  handleTooltipClose = () => {
      this.setState({ tooltipOpen: false });
  };

  handleFractions = (number) => {
      if (number >= 1 || number === 0) { return number }
      else {
          if (number === 0.5) { return "½" }
          if (number === 0.25) { return "¼" }
          if (number === 0.125) { return "⅛"}
      }
  }

  render() {
    const { classes } = this.props;
    const AbilityScores = {
      strength: "STR ",
      constitution: "CON ",
      dexterity: "DEX ",
      wisdom: "WIS ",
      intelligence: "INT ",
      charisma: "CHA "
    };
    return (
      <Card className={classes.card}>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
          <IconButton 
            style={{float: "right"}} 
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
          <ClickAwayListener onClickAway={this.handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={this.handleTooltipClose}
                  open={this.state.tooltipOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Link Copied"
                  placement="top"
                >
                    <IconButton
                        style={{float: "right"}}
                        onClick={this.copyDeepUrl}
                    >
                        <LinkIcon />
                    </IconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>
          

          <Typography variant="h5" component="h2">
            {this.state.monster.name} 
            <Chip
                label={"CR: " + this.handleFractions(this.state.monster.challenge_rating)}
                color="primary"
                className={classes.chipMargin}
            />
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {this.state.monster.size} Size &mdash;{" "}
            {this.titleCase(this.state.monster.type)}{" "}
            {this.state.monster.subtype
              ? " - " + this.titleCase(this.state.monster.subtype)
              : ""}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2" gutterBottom>
            {this.titleCase(this.state.monster.alignment)}
          </Typography>
          <Typography variant="body1">
            <strong>AC:</strong> {this.state.monster.armor_class}
            <br />
            <strong>HP:</strong> {this.state.monster.hit_points} (
            {this.state.monster.hit_dice})<br />
            <strong>Speed:</strong> {this.state.monster.speed}
          </Typography>
          <Divider />
          <Typography variant="h6">Ability Scores</Typography>
          {Object.keys(AbilityScores).map((ability, key) => {
            if (this.state.monster[ability]) {
              return (
                <Chip
                  label={AbilityScores[ability] + this.state.monster[ability]}
                  className={classes.statChip}
                  key={key}
                />
              );
            }
          })}
            <Divider />

          {(this.state.monster.strength_save ||
            this.state.monster.constitution_save ||
            this.state.monster.dexterity_save ||
            this.state.monster.wisdom_save ||
            this.state.monster.intelligence_save ||
            this.state.monster.charisma_save) && (
            <React.Fragment>
              <Typography variant="h6">Saves</Typography>
            </React.Fragment>
          )}
          {Object.keys(AbilityScores).map((ability, key) => {
            if (this.state.monster[ability + "_save"]) {
              return (
                <Chip
                  label={
                    this.state.monster[ability + "_save"] > 0
                      ? AbilityScores[ability] +
                        "+" +
                        this.state.monster[ability + "_save"]
                      : AbilityScores[ability] +
                        this.state.monster[ability + "_save"]
                  }
                  className={classes.statChip}
                  key={key}
                />
              );
            }
          })}
          <Divider />

          <Typography variant="h6">Senses</Typography>
          <Typography variant="body1">
            {this.titleCase(this.state.monster.senses)}
          </Typography>
          <Divider />

          {this.state.monster.languages && (
            <React.Fragment>
              <Typography variant="h6">Languages</Typography>
              <Typography variant="body1">
                {this.state.monster.languages}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.checkSkills(this.state.monster) && (
            <React.Fragment>
              <Typography variant="h6">Skills</Typography>
              <Typography variant="body1">
                {Object.keys(Skills).map((index, key) => {
                  if (
                    this.state.monster[
                      Skills[index].name.toLowerCase().replace(" ", "_")
                    ]
                  ) {
                    return (
                      <React.Fragment key={key}>
                        <strong>{Skills[index].name}:</strong>{" "}
                        {this.state.monster[
                          Skills[index].name.toLowerCase().replace(" ", "_")
                        ].toString()}
                        <br />
                      </React.Fragment>
                    );
                  }
                })}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.state.monster.damage_vulnerabilities.length > 0 && (
            <React.Fragment>
              <Typography variant="h6">
                Damage Vulnerabilities
              </Typography>
              <Typography variant="body1">
                {this.titleCase(this.state.monster.damage_vulnerabilities)}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.state.monster.damage_resistances.length > 0 && (
            <React.Fragment>
              <Typography variant="h6">Damage Resistances</Typography>
              <Typography variant="body1">
                {this.titleCase(this.state.monster.damage_resistances)}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.state.monster.damage_immunities.length > 0 && (
            <React.Fragment>
              <Typography variant="h6">Damage Immunities</Typography>
              <Typography variant="body1">
                {this.titleCase(this.state.monster.damage_immunities)}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.state.monster.condition_immunities.length > 0 && (
            <React.Fragment>
              <Typography variant="h6">Condition Immunities</Typography>
              <Typography variant="body1">
                {this.titleCase(this.state.monster.condition_immunities)}
              </Typography>
              <Divider />
            </React.Fragment>
          )}

          {this.state.monster.special_abilities &&
          <React.Fragment>
          <Typography variant="h6">Special Abilities</Typography>
            {this.state.monster.special_abilities.map( (special, key) => {
                return (
                <React.Fragment key={key}>
                <Typography variant="body1">
                    <strong>{special.name}</strong><br />
                    {special.desc}
                    {(special.attack_bonus !== 0) &&
                    <React.Fragment>
                        <br />
                        Attack Bonus: {(special.attack_bonus > 0) ? "+" + special.attack_bonus : special.attack_bonus}
                    </React.Fragment>
                    }
                </Typography>
                <Divider />
                </React.Fragment>
                )
            })}
          </React.Fragment>
          }

          {this.state.monster.actions &&
          <React.Fragment>
          <Typography variant="h6">Actions</Typography>
          {this.state.monster.actions.map( (action, key) => {
                return (
                <React.Fragment key={key}>
                <Typography variant="body1">
                    <strong>{action.name}</strong><br />
                    {action.desc}
                    {(action.attack_bonus !== 0) &&
                    <React.Fragment>
                        <br />
                        Attack Bonus: {(action.attack_bonus > 0) ? "+" + action.attack_bonus : action.attack_bonus}
                    </React.Fragment>
                    }
                </Typography>
                <Divider />
                </React.Fragment>
                )
            })}
          </React.Fragment>
          }

          {this.state.monster.legendary_actions &&
          <React.Fragment>
          <Typography variant="h6">Legendary Actions</Typography>
          {this.state.monster.legendary_actions.map( (action, key) => {
                return (
                <React.Fragment key={key}>
                <Typography variant="body1">
                    <strong>{action.name}</strong><br />
                    {action.desc}
                    {(action.attack_bonus !== 0) &&
                    <React.Fragment>
                        <br />
                        Attack Bonus: {(action.attack_bonus > 0) ? "+" + action.attack_bonus : action.attack_bonus}
                    </React.Fragment>
                    }
                </Typography>
                <Divider />
                </React.Fragment>
                )
            })}
            </React.Fragment>
          }

          </div>
        </Modal>

        <CardContent>
          <Chip
            label={"CR: " + this.handleFractions(this.state.monster.challenge_rating)}
            className={classes.chip}
            color="primary"
          />
          <Typography variant="h5" component="h2">
            {this.state.monster.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {this.state.monster.size} Size &mdash;{" "}
            {this.titleCase(this.state.monster.type)}{" "}
            {this.state.monster.subtype
              ? " - " + this.titleCase(this.state.monster.subtype)
              : ""}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2" gutterBottom>
            {this.titleCase(this.state.monster.alignment)}
          </Typography>
          <Typography variant="body1">
            <strong>AC:</strong> {this.state.monster.armor_class}
            <br />
            <strong>HP:</strong> {this.state.monster.hit_points} (
            {this.state.monster.hit_dice})<br />
            <strong>Speed:</strong> {this.state.monster.speed}
          </Typography>
          <Divider />
          <Typography variant="subtitle2">Ability Scores</Typography>
          {Object.keys(AbilityScores).map((ability, key) => {
            if (this.state.monster[ability]) {
              return (
                <Chip
                  label={AbilityScores[ability] + this.state.monster[ability]}
                  className={classes.statChip}
                  key={key}
                />
              );
            }
          })}

          {(this.state.monster.strength_save ||
            this.state.monster.constitution_save ||
            this.state.monster.dexterity_save ||
            this.state.monster.wisdom_save ||
            this.state.monster.intelligence_save ||
            this.state.monster.charisma_save) && (
            <React.Fragment>
              <Divider />
              <Typography variant="subtitle2">Saves</Typography>
            </React.Fragment>
          )}
          {Object.keys(AbilityScores).map((ability, key) => {
            if (this.state.monster[ability + "_save"]) {
              return (
                <Chip
                  label={
                    this.state.monster[ability + "_save"] > 0
                      ? AbilityScores[ability] +
                        "+" +
                        this.state.monster[ability + "_save"]
                      : AbilityScores[ability] +
                        this.state.monster[ability + "_save"]
                  }
                  className={classes.statChip}
                  key={key}
                />
              );
            }
          })}
          <Divider />
          <Typography variant="subtitle2">Senses</Typography>
          <Typography variant="body1">
            {this.titleCase(this.state.monster.senses)}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.openModal}
          >
            View All Information
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MonsterCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MonsterCard);
