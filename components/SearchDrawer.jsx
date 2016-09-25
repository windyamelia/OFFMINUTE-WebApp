import React from 'react';
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
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

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
						<div style={{padding: '30px 0'}}>
							<Subheader style={{textAlign: 'center'}}>Sort</Subheader>
						</div>
					</Paper>
				</Popover>
			</div>
		);
	}
}

class FilterOnDrawer extends React.Component {
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

export default SearchDrawer;