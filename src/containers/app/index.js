import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import CharClassesComponent from './charClasses'
import RacesComponent from './races'
import SkillsComponent from './skills'
import EquipmentComponent from './equipment'
import SpellsComponent from './spells'
import MonstersComponent from './monsters'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Settings from '@material-ui/icons/Settings';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        open: false,
        collapseOpen: false,
        characters: []
        };
    }

    handleDrawerOpen = () => {
    this.setState({ open: true });
    };

    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    handleCollapse = () => {
    this.setState((prevState) => 
        ({ collapseOpen: !prevState.collapseOpen })
    )};

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
    
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5" color="inherit" noWrap>
                  Character Storage
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose} color="inherit">
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                {this.state.characters.length === 0 &&
                  <ListItem button>
                    <ListItemIcon><AddCircleIcon /></ListItemIcon>
                    <ListItemText primary="Create a Character" />
                  </ListItem>
                }
                {this.state.characters.length > 0 &&
                <React.Fragment>
                  {[this.state.characters].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon><BarbarianIcon /></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                  <ListItem button>
                    <ListItemIcon><AddCircleIcon /></ListItemIcon>
                    <ListItemText primary="Create a Character" />
                  </ListItem>
                </React.Fragment>
                }
                <Divider />
              <ListItem button onClick={this.handleCollapse}>
                <ListItemIcon>
                  <LibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Rules Reference" />
                {this.state.collapseOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.collapseOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {["Races", "Classes", "Skills", "Spells", "Equipment", "Monsters"].map( (text, key) => (
                      <Link style={{textDecoration: "none"}} to={"/"+ text.toLowerCase()} key={key}>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary={text} />
                        </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
              <Divider />
              <ListItem button>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
              </ListItem>
              </List>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
    
              <Route exact path="/" component={Home} />
              <Route exact path="/classes" component={CharClassesComponent} />
              <Route exact path="/races" component={RacesComponent} />
              <Route exact path="/skills" component={SkillsComponent} />
              <Route exact path="/equipment" component={EquipmentComponent} />
              <Route exact path="/spells" component={SpellsComponent} />
              <Route exact path="/monsters" component={MonstersComponent} />
              <Route path="/monsters/:monster" component={MonstersComponent} />

          </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
