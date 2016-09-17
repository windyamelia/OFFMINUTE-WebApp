import React from 'react';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import getStyles from 'material-ui/Tabs/Tab';
import SwipeableViews from 'react-swipeable-views';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
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
const popular1 = 'images/popular1.png'

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
		fontSize: 32,
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
	popular1: {
		backgroundImage: 'url('+popular1+')',
		backgroundSize: 'cover',
		overflow: 'hidden',
		height: 351,
	},
	ulCircleBanner: {
		marginTop: 30,
		float: 'right',
	},
	circleBanner: {
		display: 'inline-block',
		height: 90,
		width: 90,
		opacity: 0.8,
		textAlign: 'center',
		marginRight: 35,
		backgroundColor: '#47bbbb',
		borderRadius: 100 + '%',
		color: '#fff',
	},
	percentage: {
		fontSize: 28,
		marginTop: 18,
		marginBottom: 0,
	},
	timeDisc: {
		fontSize: 12,
		margin: 0,
	},
	banner: {
		height: 124,
		backgroundColor: '#fff',
	},
	bannerLeft: {
		float: 'left',
		marginLeft: 42,
		color: '#000',
	},
	bannerRight: {
		float: 'right',
		marginRight: 42,
		color: '#000',
		textAlign: 'right',
	},
	grade: {
		marginTop: 15,
	},
	bannerTitle: {
		marginBottom: 0,
		marginTop: 15,
		fontSize: 28,
		fontWeight: 400,
	},
	address: {
		marginBottom: 0,
		marginTop: 5,
		fontSize: 20,
		fontWeight: 100,
	},
	distance: {
		marginBottom: 0,
		marginTop: 5,
		fontSize: 20,
		fontWeight: 100,
	},
	wordSpace: {
		fontSize: 20,
	},
	bannerButton: {
		marginTop: 5,
	},
	favButton: {
		borderRadius: 40,
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

	get styles() {
		return {
			button: {
				height: 120,
			},
		};
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
			          <Tab style={this.styles.button} label={<span style={styles.tab}>Explore</span>} value={0} />
			          <Tab style={this.styles.button} label={<span style={styles.tab}>Popular</span>} value={1} />
			          <Tab style={this.styles.button} label={<span style={styles.tab}>Favorite</span>} value={2} />
			        </Tabs>
			        <SwipeableViews
			          index={this.state.slideIndex}
			          onChangeIndex={this.handleChange}
			        >
			          <div>
			          	<div>
				          	<FloatingActionButton 
				          		mini={false} 
				          		style={styles.searchButton} 
				          		iconStyle={{width: '90px', height: '90px'}} 
				          		backgroundColor='#47bbbb'>
	      						<SearchIcon />
	    					</FloatingActionButton>
	    				</div>
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
				        <div style={styles.cuisineType3}>
				            <div style={styles.cuisine}>
				            	<p style={styles.alignleft}>Mexican</p>
				            	<p style={styles.alignright}>19 Restaurants</p>
				            </div>
				        </div>
			          </div>
			          <div>
			            <div>
			            	<div style={styles.popular1}>
			            		<ul style={styles.ulCircleBanner}>
			            			<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-20%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            	<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-30%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            </ul>
			            	</div>
				            <div style={styles.banner}>
				            	<div style={styles.bannerLeft}>
				            		<h5 style={styles.bannerTitle}>Sushi Tei</h5>
				            		<p style={styles.address}>Jl. Sumatera No. 1</p>
				            		<FlatButton
				            			label="1.54 km"
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            	</div>
					            	<div>
					            		<span style={styles.wordSpace} id="blueMoney">$ $ $ </span>
					            		<span style={styles.wordSpace} id="greyMoney">$ $ $</span>
					            	</div>
					            	<div style={styles.bannerButton}>
					            		<FlatButton
					            			backgroundColor="#ed5564"
					            			label="Add to Favorite"
					            			style={styles.favButton}
					            			labelStyle={{color: '#fff', textTransform: 'capitalize', fontWeight: 100}} />
					            	</div>
				            	</div>
				            </div>
				        </div>
				        <div>
			            	<div style={styles.popular1}>
			            		<ul style={styles.ulCircleBanner}>
			            			<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-20%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            	<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-30%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            </ul>
			            	</div>
				            <div style={styles.banner}>
				            	<div style={styles.bannerLeft}>
				            		<h5 style={styles.bannerTitle}>Sushi Tei</h5>
				            		<p style={styles.address}>Jl. Sumatera No. 1</p>
				            		<FlatButton
				            			label="1.54 km"
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            	</div>
					            	<div>
					            		<span style={styles.wordSpace} id="blueMoney">$ $ $ </span>
					            		<span style={styles.wordSpace} id="greyMoney">$ $ $</span>
					            	</div>
					            	<div style={styles.bannerButton}>
					            		<FlatButton
					            			backgroundColor="#ed5564"
					            			label="Add to Favorite"
					            			style={styles.favButton}
					            			labelStyle={{color: '#fff', textTransform: 'capitalize', fontWeight: 100}} />
					            	</div>
				            	</div>
				            </div>
				        </div>
				        <div>
			            	<div style={styles.popular1}>
			            		<ul style={styles.ulCircleBanner}>
			            			<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-20%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            	<li style={styles.circleBanner}>
					            		<p style={styles.percentage}>-30%</p>
					            		<p style={styles.timeDisc}>15.00-20.00</p>
					            	</li>
					            </ul>
			            	</div>
				            <div style={styles.banner}>
				            	<div style={styles.bannerLeft}>
				            		<h5 style={styles.bannerTitle}>Sushi Tei</h5>
				            		<p style={styles.address}>Jl. Sumatera No. 1</p>
				            		<FlatButton
				            			label="1.54 km"
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            		<ActionGrade color={'#00bebe'}/>
					            	</div>
					            	<div>
					            		<span style={styles.wordSpace} id="blueMoney">$ $ $ </span>
					            		<span style={styles.wordSpace} id="greyMoney">$ $ $</span>
					            	</div>
					            	<div style={styles.bannerButton}>
					            		<FlatButton
					            			backgroundColor="#ed5564"
					            			label="Add to Favorite"
					            			style={styles.favButton}
					            			labelStyle={{color: '#fff', textTransform: 'capitalize', fontWeight: 100}} />
					            	</div>
				            	</div>
				            </div>
				        </div>
			          </div>
			          <div>
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