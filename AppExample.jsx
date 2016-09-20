import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';

function handleTouchTap() {
	alert('touch on');
}

const muiTheme = getMuiTheme({
  appBar: {
    color: '#f2f4f7',
    textColor: '#000',
    height: 60,
  },
  tabs: {
  	backgroundColor: '#f2f4f7',
  	textColor: '#000',
  	selectedTextColor: '#47bbbb',
  },
});

const westernMenu = 'images/westernMenuEx.png'
const asianMenu = 'images/asianMenuEx.png'
const mexicanMenu = 'images/mexicanMenuEx.png'
const popular1 = 'images/popular1.png'

const styles = {
	sticky: {
		zIndex: 1000,
	},
	appbar: {
		boxShadow: 'none',
	},
	title: {
		cursor: 'pointer',
		fontSize: 15,
		textAlign: 'center',
	},
	rightIcon: {
		margin: '6px 8px 0px -16px',
		padding: 12,
		boxSizing: 'border-box',
	},
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
	tab: {
		textTransform: 'capitalize',
		fontSize: 16,
		fontWeight: 400,
	},
	cleardiv: {
		clear: "both",
	},
	cuisineCustom: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 480,
	    overflowY: 'auto',
	},
	searchButton: {
		display: 'flex',
		margin: 0,
	    top: 'auto',
	    right: 20,
	    bottom: 20,
	    left: 'auto',
	    position: 'fixed',
	    zIndex: 500,
	    backgroundColor: '#47bbbb',
	},
	popularCustom: {
		margin: '0 auto',
		maxWidth: 480,
	},
	popular1: {
		backgroundImage: 'url('+popular1+')',
		overflow: 'hidden',
		backgroundSize: 'cover',
		height: 170,
		maxWidth: 480,
		textAlign: 'center',
	},
	ulCircleBanner: {
		marginTop: 12,
		float: 'right',
	},
	circleBanner: {
		display: 'inline-block',
		height: 52,
		width: 52,
		opacity: 0.8,
		textAlign: 'center',
		marginRight: 18,
		backgroundColor: '#47bbbb',
		borderRadius: 100 + '%',
		color: '#fff',
	},
	percentage: {
		fontSize: 16,
		marginTop: 10,
		marginBottom: 0,
	},
	timeDisc: {
		fontSize: 8,
		margin: 0,
	},
	banner: {
		height: 86,
		backgroundColor: '#fff',
		maxWidth: 480,
		margin: '6px 0',
	},
	bannerLeft: {
		float: 'left',
		marginLeft: 20,
		color: '#000',
	},
	bannerRight: {
		float: 'right',
		marginRight: 20,
		color: '#000',
		textAlign: 'right',
	},
	starIcon: {
		width: 20,
		height: 20,
	},
	bannerTitle: {
		marginTop: 0,
		marginBottom: 0,
		fontSize: 20,
		fontWeight: 400,
	},
	address: {
		marginBottom: 0,
		marginTop: 4,
		fontSize: 14,
		fontWeight: 100,
	},
	distance: {
		marginBottom: 0,
		fontSize: 14,
		fontWeight: 100,
		padding: 0,
	},
	wordSpace: {
		fontSize: 14,
	},
	bannerButton: {
		marginTop: 4,
	},
	favButton: {
		borderRadius: 40,
		height: 34,
	},
};

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			slideIndex: 0,
		};
		this.handleToggle = this.handleToggle.bind(this);
		this.state = {
			open: false,
		};
		this.handleClose = this.handleClose.bind(this);
	}

	handleChange(value) {
		this.setState({
			slideIndex: value,
		});
	}

	handleToggle() {
		this.setState({
			open: !this.state.open,
		});
	}

	handleClose() {
		this.setState({
			open: false,
		});
	}

	render() {
		return (
	      <MuiThemeProvider muiTheme={muiTheme}>
	        <div>
	        	<StickyContainer>
	        		<Sticky style={styles.sticky}>
		        	<div style={styles.appbar}>
				        <AppBar 
				        	title={<div style={styles.title}>OFFMINUTE</div>}
				        	onTitleTouchTap={handleTouchTap}
				        	onLeftIconButtonTouchTap={this.handleToggle}
				        	zDepth={0}
				        	iconElementRight={<img src={"images/icon/rightIcon.png"} style={styles.rightIcon} />} />
				    </div>
		        	
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        </Sticky>
        <div style={styles.cleardiv}></div>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={{height: 684}}>
				        <FloatingActionButton 
				        	mini={false} 
				        	style={styles.searchButton}  
				        	backgroundColor='#47bbbb'>
	      					<SearchIcon />
	    				</FloatingActionButton>
			          	<div style={styles.cuisineCustom}>
			          		<GridList
			          			cols={1}
			          			cellHeight={228}
			          			padding={0}
			          			style={styles.gridList}
			          		>
			          			<GridTile
			          				title={<span className="titleGridTile">Western</span>}
			          				titleBackground='rgba(255, 255, 255, 0.8)'
			          				actionIcon={<span className="titleGridTile titleRight">19 Restaurants</span>}
			          			>
			          				<img src={'images/westernMenuEx.png'} />

			          			</GridTile>
			          		</GridList>
			          	</div>
			          	<div style={styles.cuisineCustom}>
			          		<GridList
			          			cols={1}
			          			cellHeight={228}
			          			padding={0}
			          			style={styles.gridList}
			          		>
			          			<GridTile
			          				title={<span className="titleGridTile">Asian</span>}
			          				titleBackground='rgba(255, 255, 255, 0.8)'
			          				actionIcon={<span className="titleGridTile titleRight">19 Restaurants</span>}
			          			>
			          				<img src={'images/asianMenuEx.png'} />
			          			</GridTile>
			          		</GridList>
			          	</div>
			        </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
        <Drawer
					        docked={false}
					        width={200}
					        zDepth={5}
					        open={this.state.open}
					        onRequestChange={(open) => this.handleClose()}
				        >
					        <MenuItem onTouchTap={this.handleClose}>My account</MenuItem>
					        <MenuItem onTouchTap={this.handleClose}>Term and condition</MenuItem>
					        <MenuItem onTouchTap={this.handleClose}>Help</MenuItem>
					        <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
				        </Drawer>
      
		        </StickyContainer>
	        </div>
	      </MuiThemeProvider>
	    );
	}
}

export default App;