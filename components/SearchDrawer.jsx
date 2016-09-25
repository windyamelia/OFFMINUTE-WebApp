import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Checklist from 'material-ui/svg-icons/navigation/check';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const styles = {
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
	toolbarSeparatorSearch: {
		top: 7, 
		height: 53, 
		marginLeft: 0,
		color: '#dadae0',
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
	paperSearchLabel: {
		width: 360,	
		bottom: 0,
	},
	divPaper: {
		textAlign: 'center', 
		padding: '30px 0',
	},
	textfield: {
		border: '1px solid #c9c9ce', 
		width: 278, 
		height: 48,
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
		border: '1px solid #00bebe', 
		lineHeight: '28px', 
		height: 32,
		marginLeft: 9,
	},
	searchLabelOnPaper: {
		fontSize: 12,
		padding: '0 38px',
		textTransform: 'capitalize',
		color: '#00bebe',
	},
	subHeader: {
		textAlign: 'center',
		color: '#00bebe',
		fontSize: 17,
	},
	subheaderFilter: {
		fontSize: 15,
		color: '#696d6f',
		fontWeight: 400,
	},
	labelPopularity: {
		fontSize: 18,
		color: '#00bebe',
		paddingLeft: 3,
	},
	iconPopularity: {
		width: 25,
		height: 25,
	},
	buttonPopularity: {
		marginLeft: -26,
	},
};

class SearchDrawer extends React.Component{
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
								<SearchOnDrawer />
									<ToolbarSeparator style={styles.toolbarSeparatorSearch}/>
								<SortOnDrawer />
									<ToolbarSeparator style={styles.toolbarSeparatorSearch}/>
								<FilterOnDrawer />
							</ToolbarGroup>
						</Toolbar>
						</StickyContainer>

				</Drawer>
			</div>
		);
	}
}

class SearchOnDrawer extends React.Component {
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
						<div style={styles.divPaper}>
							<TextField
								hintStyle={{left: 113}}
								style={styles.textfield}
								underlineShow={false}
								hintText="Search" />
							<br />
							<br />
							<FlatButton
								label="Close"
								labelStyle={styles.closeLabelOnPaper}
								style={styles.closeButtonOnPaper}
								onTouchTap={this.handleRequestClose} />
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

class SortOnDrawer extends React.Component {
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
					label="Sort" 
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
						<div style={{padding: '10px 0'}}>
							<Subheader style={styles.subHeader}>Sort</Subheader>
							<MenuOnSort />
							<br />
							<div style={{textAlign: 'center'}}>
								<FlatButton
									label="Close"
									labelStyle={styles.closeLabelOnPaper}
									style={styles.closeButtonOnPaper}
									onTouchTap={this.handleRequestClose} />
							</div>
						</div>
					</Paper>
				</Popover>
			</div>
			
		);
	}
}

class MenuOnSort extends React.Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			selectedIndex: 0,
		};
	}

	select(index) {
		this.setState({
			selectedIndex: index
		});
	}

	render() {
		return (
			<div>
				
				<MenuItem 
								primaryText="Newest"
								rightIcon={<Checklist />} />
							<MenuItem 
								primaryText="Highest Popularity"
								rightIcon={<Checklist />} />
							<MenuItem 
								primaryText="Cheapest Price"
								rightIcon={<Checklist />} />
							<MenuItem 
								primaryText="Nearest"
								rightIcon={<Checklist />} />
							<MenuItem 
								primaryText="Highest Discount"
								rightIcon={<Checklist />} />
				
			</div>
		);
	}
}

class FilterOnDrawer extends React.Component {
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
					label="Filter" 
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
						<div style={{padding: '10px 0 20px'}}>
							<Subheader style={styles.subHeader}>Filter</Subheader>
							<div>
								<Subheader style={styles.subheaderFilter}>Discount</Subheader>
								<SliderOnSortFilter />
							</div>
							<div>
								<Subheader style={styles.subheaderFilter}>Popularity</Subheader>
								<FlatButton
						 			label="1"
						 			labelStyle={styles.labelPopularity}
						   			icon={<ActionGrade style={styles.iconPopularity} color="#00bebe" />} 
						   			style={{marginLeft: 12}} />
						   		<FlatButton
						 			label="2"
						   			labelStyle={styles.labelPopularity}
						   			icon={<ActionGrade style={styles.iconPopularity} color="#00bebe" />} 
						   			style={styles.buttonPopularity} />
						   		<FlatButton
						 			label="3"
						   			labelStyle={styles.labelPopularity}
						   			icon={<ActionGrade style={styles.iconPopularity} color="#00bebe" />} 
						   			style={styles.buttonPopularity} />
						   		<FlatButton
						 			label="4"
						   			labelStyle={styles.labelPopularity}
						   			icon={<ActionGrade style={styles.iconPopularity} color="#00bebe" />} 
						   			style={styles.buttonPopularity} />
						   		<FlatButton
						 			label="5"
						   			labelStyle={styles.labelPopularity}
						   			icon={<ActionGrade style={styles.iconPopularity} color="#00bebe" />} 
						   			style={styles.buttonPopularity} />
							</div>
							<br />
							<br />
							<div style={{textAlign: 'center'}}>
								<FlatButton
									label="Close"
									labelStyle={styles.closeLabelOnPaper}
									style={styles.closeButtonOnPaper}
									onTouchTap={this.handleRequestClose} />
								<FlatButton 
									label="Apply Filter"
									labelStyle={styles.searchLabelOnPaper}
									style={styles.searchButtonOnPaper} />
							</div>
						</div>
					</Paper>
				</Popover>
			</div>
		);
	}
}

class SliderOnSortFilter extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleFirstSlider = this.handleFirstSlider.bind(this);
		this.state = {
			firstSlider: 0.5,
			secondSlider: 50,
		}
	}

	handleFirstSlider(event, value) {
		this.setState({
			firstSlider: value,
		});
	}

	handleSecondSlider(event, value) {
		this.setState({
			secondSlider: value,
		});
	}

	render () {
		return (
			<div style={{margin: '0 16px'}}>
				<Slider
					min={0}
					max={100}
					step={1}
					defaultValue={50}
					value={this.state.secondSlider}
					onChange={this.handleSecondSlider.bind(this)}
					sliderStyle={{marginTop: 12, marginBottom: 24}} />
			</div>
		);
	}
}

export default SearchDrawer;