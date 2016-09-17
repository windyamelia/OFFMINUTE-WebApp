import React from 'react';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

function handleTouchTap() {
	alert('touch on');
}

const muiTheme = getMuiTheme({
  appBar: {
    color: '#f2f4f7',
    textColor: '#000',
    height: 80,
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

const styles = {
	appbar: {
		boxShadow: 'none',
	},
	title: {
		cursor: 'pointer',
		fontSize: 30,
		textAlign: 'center',
	},
	rightIcon: {
		marginRight: 38,
	},
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
	tab: {
		textTransform: 'capitalize',
	},
	cleardiv: {
		clear: "both",
	},
	cuisineType1: {
		backgroundImage: 'url('+westernMenu+')',
		backgroundSize: 'cover',
		overflow: 'hidden',
		height: 470,
	},
	cuisineType2: {
		backgroundImage: 'url('+asianMenu+')',
		backgroundSize: 'cover',
		overflow: 'hidden',
		height: 470,
	},
	cuisineType3: {
		backgroundImage: 'url('+mexicanMenu+')',
		backgroundSize: 'cover',
		overflow: 'hidden',
		height: 470,
	},
	cuisine: {
		height: 136,
		backgroundColor: '#fff',
		opacity: 0.8,
		marginTop: 335, 
	},
	alignleft: {
		float: 'left',
		marginLeft: 42,
		color: '#000',
		fontSize: 42,
		fontWeight: 100,
	},
	alignright: {
		float: 'right',
		marginRight: 42,
		color: '#000',
		fontSize: 32,
		verticalAlign: 'middle',
		marginTop: 52,
		fontWeight: 100,
	},
	searchButton: {
		margin: 0,
	    top: 'auto',
	    right: 42,
	    bottom: 60,
	    left: 'auto',
	    position: 'absolute',
	    zIndex: 1000,
	    padding: 30,
	    backgroundColor: '#47bbbb',
	},
	searchButtonIcon: {
		width: 100,
		height: 100,
	},
};

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			slideIndex: 0,
		};
	}

	handleChange(value) {
		this.setState({
			slideIndex: value,
		});
	}

	render() {
		return (
	      <MuiThemeProvider muiTheme={muiTheme}>
	        <div>
	        	<div style={styles.appbar}>
			        <AppBar 
			        	title={<div style={styles.title}>OFFMINUTE</div>}
			        	onTitleTouchTap={handleTouchTap}
			        	zDepth={0}
			        	iconElementRight={<img src={"images/icon/rightIcon.png"} style={styles.rightIcon} />} />
			    </div>
		        <div>
		        	<Tabs
			          onChange={this.handleChange}
			          value={this.state.slideIndex}
			        >
			          <Tab label={<span style={styles.tab}>Explore</span>} value={0} />
			          <Tab label={<span style={styles.tab}>Popular</span>} value={1} />
			          <Tab label={<span style={styles.tab}>Favorite</span>} value={2} />
			        </Tabs>
			        <SwipeableViews
			          index={this.state.slideIndex}
			          onChangeIndex={this.handleChange}
			        >
			          <div>
			          	<FloatingActionButton mini={false} style={styles.searchButton} iconStyle={{width: '115px', height: '115px'}}>
      						<SearchIcon />
    					</FloatingActionButton>
			          	<div style={styles.cuisineType1}>
				            <div style={styles.cuisine}>
				            	<p style={styles.alignleft}>Western</p>
				            	<p style={styles.alignright}>20 Restaurants</p>
				            </div>
				        </div>
				        <div style={styles.cuisineType2}>
				            <div style={styles.cuisine}>
				            	<p style={styles.alignleft}>Asian</p>
				            	<p style={styles.alignright}>35 Restaurants</p>
				            </div>
				        </div>
				        <div style={styles.cuisineType3}>
				            <div style={styles.cuisine}>
				            	<p style={styles.alignleft}>Mexican</p>
				            	<p style={styles.alignright}>19 Restaurants</p>
				            </div>
				        </div>
			          </div>
			          <div style={styles.slide}>
			            <img src={"images/test-image.jpg"} />
			          </div>
			          <div style={styles.slide}>
			            slide n°3
			          </div>
			        </SwipeableViews>
		        </div>
	        </div>
	      </MuiThemeProvider>
	    );
	}
}

export default App;