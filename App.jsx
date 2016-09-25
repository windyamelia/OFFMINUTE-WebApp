import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import SwipeableViews from 'react-swipeable-views/lib';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import SearchIcon from 'material-ui/svg-icons/action/search';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

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
  toolbar: {
  	height: 66,
  },
});

const westernMenu = 'images/westernMenuEx.png'
const asianMenu = 'images/asianMenuEx.png'
const mexicanMenu = 'images/mexicanMenuEx.png'
const popular1 = 'images/popular1.png'

const tilesData = [
  {
    img: 'images/westernMenuEx.png',
    cuisine: 'Western',
    sumRestaurant: '19 Restaurants',
  },
  {
    img: 'images/asianMenuEx.png',
    cuisine: 'Asian',
    sumRestaurant: '19 Restaurants',
  },
  {
    img: 'images/mexicanMenuEx.png',
    cuisine: 'Mexican',
    sumRestaurant: '19 Restaurants',
  },
  {
    img: 'images/mexicanMenuEx.png',
    cuisine: 'tes',
    sumRestaurant: '19 Restaurants',
  },
];

const styles = {
	sticky: {
		zIndex: 1000,
	},
	appbar: {
		boxShadow: 'none',
	},
	title: {
		fontSize: 17,
		textAlign: 'center',
		fontWeight: 400,
	},
	rightIcon: {
		margin: '6px 8px 0px -16px',
		padding: 12,
		boxSizing: 'border-box',
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
	    cursor: 'pointer',
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
	labelFavButton: {
		color: '#fff', 
		textTransform: 'capitalize', 
		fontWeight: 100, 
		fontSize: 14,
	},
	menuSearchTitle: {
		textAlign: 'center',
		color: '#000',
		display: 'block',
		/*padding: '8px 0',*/
		backgroundColor: '#f2f4f7',
		fontWeight: 500,
		fontSize: 17,
	},
	nearSearch: {
		paddingTop: 8,
		paddingBottom: 8,
		fontSize: 17,
	},
	cuisineSearch: {
		backgroundColor: '#f7f7f8',
		fontSize: 17,
		fontWeight: 500,
		paddingTop: 3,
		paddingBottom: 3,
	},
	cuisineItemSearch: {
		fontSize: 15,
	},
	toolbarSearch: {
		display: 'flex',
		margin: 0,
	    bottom: 0,
	    left: 'auto',
	    position: 'absolute',
	    zIndex: 500,
	    width: '100%',
	    backgroundColor: '#f7f7f8',
	},
	flatButtonSearch: {
		margin: '15px 13px',
	},
	labelFlatButtonSearch: {
		color: '#00bebe',
		fontSize: 17,
		textTransform: 'capitalize',
		fontWeight: 400,
	},
	toolbarSeparatorSearch: {
		top: 7, 
		height: 53, 
		marginLeft: 0,
		color: '#dadae0',
	},
	paperSearchLabel: {
		width: 360,	
		bottom: 0,
	},
	closeButtonOnPaper: {
		borderRadius: 30, 
		border: '1px solid #ef7582', 
		lineHeight: '28px', 
		height: 32,
		marginRight: 9,
	},
	closeLabelOnPaper: {
		fontSize: 12,
		padding: '0 38px',
		textTransform: 'capitalize',
		color: '#ef7582',
	},
	searchButtonOnPaper: {
		borderRadius: 30, 
		border: '1px solid #36c9c9', 
		lineHeight: '28px', 
		height: 32,
		marginLeft: 9,
	},
	searchLabelOnPaper: {
		fontSize: 12,
		padding: '0 38px',
		textTransform: 'capitalize',
		color: '#36c9c9',
	},
};

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			slideIndex: 0,
		};

		this.handleMenuToggle = this.handleMenuToggle.bind(this);
		this.state = {
			open: false,
		};
		this.handleMenuClose = this.handleMenuClose.bind(this);
	}

	handleChange(value) {
		this.setState({
			slideIndex: value,
		});
	}

	handleMenuToggle() {
		this.setState({
			open: !this.state.open,
		});
	}

	handleMenuClose() {
		this.setState({
			open: false,
		});
	}

	render() {
		return (
	      <MuiThemeProvider muiTheme={muiTheme}>
	        <div>
	        	<StickyContainer>
	        		
			        	<div style={styles.appbar}>
					        <AppBar 
					        	title={<div style={styles.title}>OFFMINUTE</div>}
					        	onLeftIconButtonTouchTap={this.handleMenuToggle}
					        	zDepth={0}
					        	iconElementRight={<img src={"images/icon/rightIcon.png"} style={styles.rightIcon} />} />
					        <DrawerSearch />
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
			          <div style={{height: 684}}>
			          	<div style={styles.cuisineCustom}>
			          		<GridList
			          			cols={1}
			          			cellHeight={228}
			          			padding={0}
			          			style={styles.gridList}
			          		>
			          			{tilesData.map((tile) => (
			          			<GridTile
			          				key={tile.cuisine}
			          				title={<span className="titleGridTile">{tile.cuisine}</span>}
			          				titleBackground='rgba(255, 255, 255, 0.8)'
			          				actionIcon={<span className="titleGridTile titleRight">{tile.sumRestaurant}</span>}
			          			>
			          				<img src={tile.img} />
			          			</GridTile>
			          			))}
			          		</GridList>
			          	</div>
			          </div>
			          <div>
			          	<div style={styles.popularCustom}>
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
				            			labelStyle={styles.distance}
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
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
					            			labelStyle={styles.labelFavButton} />
					            	</div>
				            	</div>
				            </div>
				        </div>
				        <div style={styles.popularCustom}>
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
				            			labelStyle={styles.distance}
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
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
					            			labelStyle={styles.labelFavButton} />
					            	</div>
				            	</div>
				            </div>
				        </div>
				        <div style={styles.popularCustom}>
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
				            			labelStyle={styles.distance}
				            			icon={<LocationOn />}
				            			style={{marginLeft: -15}} />
				            	</div>
				            	<div style={styles.bannerRight}>
				            		<div style={styles.grade}>
					            		<ActionGrade style={styles.starIcon}  color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
					            		<ActionGrade style={styles.starIcon} color={'#00bebe'}/>
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
					            			labelStyle={styles.labelFavButton} />
					            	</div>
				            	</div>
				            </div>
				        </div>
			          </div>
			          <div>
			            slide n°3
			          </div>
			        </SwipeableViews>
			        <Drawer
					    docked={false}
					    width={200}
					    zDepth={5}
					    open={this.state.open}
					    onRequestChange={(open) => this.setState({open})}
					>
						<MenuItem onTouchTap={this.handleMenuClose}></MenuItem>
						<MenuItem onTouchTap={this.handleMenuClose}>My account</MenuItem>
						<MenuItem onTouchTap={this.handleMenuClose}>Term and condition</MenuItem>
						<MenuItem onTouchTap={this.handleMenuClose}>Help</MenuItem>
						<MenuItem onTouchTap={this.handleMenuClose}>Settings</MenuItem>
					</Drawer>
		        </StickyContainer>
	        </div>
	      </MuiThemeProvider>
	    );
	}
}

class DrawerSearch extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.handleSearchToggle = this.handleSearchToggle.bind(this);
		this.state = {
			open: false,
		};
		this.handleSearchClose = this.handleSearchClose.bind(this);
	}

	handleSearchToggle() {
		this.setState({
			open: !this.state.open,
		});
	}

	handleSearchClose() {
		this.setState({
			open: false,
		});
	}
	render () {
		return (
			<div>
				<FloatingActionButton 
					mini={false} 
				    style={styles.searchButton}  
				    backgroundColor='#47bbbb'
				    onTouchTap={this.handleSearchToggle}>
	      			<SearchIcon />
	    		</FloatingActionButton>
				<Drawer
					
				    docked={false}
					width={360}
					zDepth={5}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>

						<StickyContainer>
					    {/*<MenuItem onTouchTap={this.handleSearchClose} innerDivStyle={styles.menuSearchTitle} primaryText="Search" leftIcon={<ArrowBack style={{padding:'6px 0'}}/>}></MenuItem>*/}
					    
					    <Toolbar noGutter={true} style={{backgroundColor: '#f2f4f7'}}>
					    		<div style={{textAlign: 'center'}}>
					    		<ToolbarGroup>
					    			<IconButton onTouchTap={this.handleSearchClose} style={{padding: '19px 12px'}}>
					    				<ArrowBack />
					    			</IconButton>
					    			<div style={{width:298}}>
					    				<ToolbarTitle text="Search" style={styles.menuSearchTitle} />
					    			</div>
					    		</ToolbarGroup>	
					    		</div>					    	
					    	
					    </Toolbar>
					    
					    <Divider />
					    <div style={{width: '100%', overflowY: 'auto'}}>
					    <MenuItem primaryText="Near by" innerDivStyle={styles.nearSearch} onTouchTap={this.handleSearchClose}></MenuItem>		
						<MenuItem primaryText="Western" innerDivStyle={styles.cuisineSearch}></MenuItem>
						<MenuItem primaryText="Steak" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Pizza" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Pasta" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Fast food" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Asian" innerDivStyle={styles.cuisineSearch}></MenuItem>
						<MenuItem primaryText="Sushi" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Ramen" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
							
						<MenuItem primaryText="Indian" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Thai Food" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Chinese" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Area" innerDivStyle={styles.cuisineSearch}></MenuItem>
						<MenuItem primaryText="Dago" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="RE Martidinata" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						<MenuItem primaryText="Setiabudhi" innerDivStyle={styles.cuisineItemSearch}></MenuItem>
						</div> 
						<Toolbar style={styles.toolbarSearch}>
							<ToolbarGroup firstChild={true}>
								<SearchLabelOnDrawer />
									<ToolbarSeparator style={styles.toolbarSeparatorSearch}/>
								<SortLabelOnDrawer />
									<ToolbarSeparator style={styles.toolbarSeparatorSearch}/>
								<FilterLabelOnDrawer />
							</ToolbarGroup>
						</Toolbar>
						</StickyContainer>

				</Drawer>
			</div>
		);
	}
}

class SearchLabelOnDrawer extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.state = {
			open: false,
		};
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleTouchTap(event) {
		event.preventDefault();
		this.setState({
			open: true,
			anchorEl: event.currentTarget,
		});
	}

	handleRequestClose() {
		this.setState({
			open: false,
		});
	}

	render() {
		return (
			<div>	
				<FlatButton 
					style={styles.flatButtonSearch}
					label="Search"
					labelStyle={styles.labelFlatButtonSearch}
					onTouchTap={this.handleTouchTap} />
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{vertical:'bottom', horizontal: 'left'}}
					targetOrigin={{vertical:'bottom', horizontal: 'left'}}
					onRequestClose={this.handleRequestClose}
					animation={PopoverAnimationVertical}
				>
					<Paper style={styles.paperSearchLabel} zDepth={1}>
						<div style={{textAlign: 'center', padding: '30px 0'}}>
							<TextField
								hintStyle={{left: 113}}
								style={{border: '1px solid #c9c9ce', width: 278, height: 48}}
								underlineShow={false}
								hintText="Search" />
							<br />
							<br />
							<FlatButton
								label="Close"
								labelStyle={styles.closeLabelOnPaper}
								style={styles.closeButtonOnPaper} />
							<FlatButton 
								label="Search"
								labelStyle={styles.searchLabelOnPaper}
								style={styles.searchButtonOnPaper} />
						</div>
					</Paper>
				</Popover>
			</div>
		);
	}
}

class SortLabelOnDrawer extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false,
		};
	}

	render() {
		return (
			<div>
					
							
						<FlatButton style={styles.flatButtonSearch} label="Sort" labelStyle={styles.labelFlatButtonSearch} />
							
						
					
			</div>
		);
	}
}

class FilterLabelOnDrawer extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false,
		};
	}

	render() {
		return (
			<div>
					
							
						<FlatButton style={styles.flatButtonSearch} label="Filter" labelStyle={styles.labelFlatButtonSearch} />
					
			</div>
		);
	}
}

export default App;