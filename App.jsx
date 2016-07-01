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
  tabs: {
  	backgroundColor: '#fff',
  	textColor: '#000',
  	selectedTextColor: '#64b5f6',
  },
});

const styles = {
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
	slide: {
		padding: 10,
		height: 890,
	},
	tab: {
		textTransform: 'capitalize',
	},
	cuisine: {
		backgroundColor: '#fff',
		opacity: 0.5,
		color: '#000',
		fontSize: 40,
		position: 'absolute',
		left: 10,
		top: 350,
		zIndex: 100,
		width: 720,
		paddingLeft: 15,
		paddingRight: 15,
	},
	li: {
		display: "inline",
		listStyleType: "none",
	},
	sumRestaurant: {
		float: 'right',
		fontSize: 30,
		display: "inline",
		listStyleType: "none",
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
	        	<div>
			        <AppBar 
			        	title={<div style={styles.title}>OFFMINUTE</div>}
			        	onTitleTouchTap={handleTouchTap} />
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
			          <div style={styles.slide}>
			            <img src={"images/western-menu.png"} />
			            <div style={styles.cuisine}>
			            	<ul>
				            	<li style={styles.li}>Western</li>
				            	<li style={styles.sumRestaurant}>20 Restaurant</li>
			            	</ul>
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