import React from 'react';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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

const styles = {
	appbar: {
		boxShadow: 'none',
	},
	title: {
		cursor: 'pointer',
		fontSize: 30,
		textAlign: 'center',
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
	cuisine: {
		backgroundColor: '#fff',
		opacity: 0.5,
		color: '#000',
		fontSize: 40,
		position: 'absolute',
		top: 346,
		zIndex: 100,
		width: 950,
		paddingLeft: 15,
		paddingRight: 15,
	},
	cuisineTwo: {
		backgroundColor: '#fff',
		opacity: 0.5,
		color: '#000',
		fontSize: 40,
		position: 'absolute',
		top: 823,
		zIndex: 100,
		width: 950,
		paddingLeft: 15,
		paddingRight: 15,
	},
	cuisineThree: {
		backgroundColor: '#fff',
		opacity: 0.5,
		color: '#000',
		fontSize: 40,
		position: 'absolute',
		top: 1297,
		zIndex: 100,
		width: 950,
		paddingLeft: 15,
		paddingRight: 15,
	},
	li: {
		display: "inline-block",
		listStyleType: "none",
	},
	sumRestaurant: {
		float: 'right',
		fontSize: 30,
		display: "inline-block",
		listStyleType: "none",
		verticalAlign: "middle",
		marginTop: 8,
		marginRight: 25,
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
			        	zDepth={0} />
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
			          	<div>
				            <img src={"images/western-menu.png"} />
				            <div style={styles.cuisine}>
				            	<ul>
					            	<li style={styles.li}>Western</li>
					            	<li style={styles.sumRestaurant}>20 Restaurants</li>
				            	</ul>
				            </div>
				        </div>
				        <div>
				            <img src={"images/western-menu.png"} />
				            <div style={styles.cuisineTwo}>
				            	<ul>
					            	<li style={styles.li}>Asian</li>
					            	<li style={styles.sumRestaurant}>35 Restaurants</li>
				            	</ul>
				            </div>
				        </div>
				        <div>
				            <img src={"images/western-menu.png"} />
				            <div style={styles.cuisineThree}>
				            	<ul>
					            	<li style={styles.li}>Maxican</li>
					            	<li style={styles.sumRestaurant}>19 Restaurants</li>
				            	</ul>
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