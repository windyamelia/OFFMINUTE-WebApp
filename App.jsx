import React from 'react';
import AppBarCustom from './components/AppBar.jsx';
import GridListExplore from './components/GridListExplore.jsx';
import PopularTab from './components/PopularTab.jsx';
import SearchDrawer from './components/SearchDrawer.jsx';
import { StickyContainer, Sticky } from 'react-sticky';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views/lib';

function handleTouchTap() {
	alert('touch on');
}

const muiTheme = getMuiTheme({
  appBar: {
    color: '#f2f4f7',
    textColor: '#000',
    height: 60,
  },
  menuItem: {
  	height: 38,
  	selectedTextColor: 'red',
  },
  tabs: {
  	backgroundColor: '#f2f4f7',
  	textColor: '#000',
  	selectedTextColor: '#47bbbb',
  },
  toolbar: {
  	height: 66,
  },
});

const westernMenu = 'images/westernMenuEx.png'
const asianMenu = 'images/asianMenuEx.png'
const mexicanMenu = 'images/mexicanMenuEx.png'

const styles = {
	sticky: {
		zIndex: 1000,
	},
	appbar: {
		boxShadow: 'none',
	},
	tab: {
		textTransform: 'capitalize',
		fontSize: 16,
		fontWeight: 400,
	},
	cleardiv: {
		clear: "both",
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
	        	<StickyContainer>
			        	<div style={styles.appbar}>
					        <AppBarCustom />
					        <SearchDrawer />
					    </div>
					<Sticky style={styles.sticky}>
			        	<Tabs
				          onChange={this.handleChange}
				          value={this.state.slideIndex}
				        >
				          <Tab label={<span style={styles.tab}>Explore</span>} value={0} />
				          <Tab label={<span style={styles.tab}>Popular</span>} value={1} />
				          <Tab label={<span style={styles.tab}>Favorite</span>} value={2} />
			        	</Tabs>
			        </Sticky>

			        <SwipeableViews
			          index={this.state.slideIndex}
			          onChangeIndex={this.handleChange}
			        >
			          <div>
			          	<GridListExplore />
			          </div>
			          <div>
			          	<PopularTab />
			          </div>
			          <div>
			            slide n°3
			          </div>
			        </SwipeableViews>
			        
		        </StickyContainer>
	        </div>
	      </MuiThemeProvider>
	    );
	}
}

export default App;