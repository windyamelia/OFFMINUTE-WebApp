import React from 'react';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const styles = {
	rightIcon: {
		margin: '6px 8px 0px -16px',
		padding: 12,
		boxSizing: 'border-box',
	},
	menuSearchTitle: {
		textAlign: 'center',
		color: '#000',
		display: 'block',
		backgroundColor: '#f2f4f7',
		fontWeight: 500,
		fontSize: 17,
	},
	recentSubheader: {
		fontSize: 17,
		color: '#000',
		fontWeight: 400,
		paddingTop: 12, 
		paddingBottom: 12,
	},
	gridListRoot: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridListBookings: {
		width: 480,
		overflowY: 'auto',
		margin: 0,
	}
};

class Bookings extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleBookingsToggle = this.handleBookingsToggle.bind(this);
		this.state = {
			open: false,
		};
		this.handleBookingsClose = this.handleBookingsClose.bind(this);
	}

	handleBookingsToggle() {
		this.setState({
			open: !this.state.open,
		});
	}

	handleBookingsClose() {
		this.setState({
			open: false,
		});
	}

	render () {
		return (
			<div>
				<IconButton onTouchTap={this.handleBookingsToggle}>
					<img src={"./images/icon/rightIcon.png"} style={styles.rightIcon} />
				</IconButton>
				<Drawer
					width={360}
					zDepth={5}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>
					
					<Toolbar noGutter={true} style={{backgroundColor: '#f2f4f7'}}>
					    <div style={{textAlign: 'center'}}>
					    	<ToolbarGroup>
					    		<IconButton onTouchTap={this.handleBookingsClose} style={{padding: '19px 12px'}}>
					    			<ArrowBack />
					    		</IconButton>
					    		<div style={{width:298}}>
					    			<ToolbarTitle text="My Bookings" style={styles.menuSearchTitle} />
					    		</div>
					    	</ToolbarGroup>	
					    </div>					    		
					</Toolbar>
					<Subheader style={styles.recentSubheader}>Recent</Subheader>
					<Divider />
					<div style={{width: '100%', padding: '14px 0'}}>
						<div style={{position: 'relative', width: '40%', display: 'inline-block'}}>
							<div style={{textAlign: 'center'}}>
								<img src={'images/bookings-picture.png'} />							
							</div>
						</div>
						<div style={{position: 'relative', width: '60%', display: 'inline-block'}}>
							<span style={{fontSize: 17, fontWeight: 500}}>Sushi Tei</span>
							<span style={{fontSize: 10, marginLeft: 6}}>Jl. Sumatra No. 1</span>
							<p style={{margin: '6px 0', fontSize: 13, fontWeight: 300}}>2 person</p>
							<p style={{margin: '6px 0 20px', fontSize: 13, fontWeight: 300}}>May, 29 2016 14.00</p>
							<FlatButton
								label="Cancel"
								backgroundColor="#ed5564"
								labelStyle={{color: '#fff', textTransform: 'capitalize', fontSize: 10, fontWeight: 400}}
								style={{borderRadius: 30, lineHeight: '28px', height: 28, minWidth: 74}} />
							<FlatButton 
								label="Make a call"
								backgroundColor="#00bebe"
								labelStyle={{color: '#fff', textTransform: 'capitalize', fontSize: 10, fontWeight: 400}}
								style={{borderRadius: 30, lineHeight: '28px', height: 28, minWidth: 74, marginLeft: 9}} />
						</div>
					</div>
					<Divider />
					<div style={{width: '100%', padding: '14px 0'}}>
						<div style={{position: 'relative', width: '40%', display: 'inline-block'}}>
							<div style={{textAlign: 'center'}}>
								<img src={'images/bookings-picture.png'} />							
							</div>
						</div>
						<div style={{position: 'relative', width: '60%', display: 'inline-block'}}>
							<span style={{fontSize: 17, fontWeight: 500}}>Sushi Tei</span>
							<span style={{fontSize: 10, marginLeft: 6}}>Jl. Sumatra No. 1</span>
							<p style={{margin: '6px 0', fontSize: 13, fontWeight: 300}}>2 person</p>
							<p style={{margin: '6px 0 20px', fontSize: 13, fontWeight: 300}}>May, 29 2016 14.00</p>
							<FlatButton
								label="Cancel"
								backgroundColor="#ed5564"
								labelStyle={{color: '#fff', textTransform: 'capitalize', fontSize: 10, fontWeight: 400}}
								style={{borderRadius: 30, lineHeight: '28px', height: 28, minWidth: 74}} />
							<FlatButton 
								label="Make a call"
								backgroundColor="#00bebe"
								labelStyle={{color: '#fff', textTransform: 'capitalize', fontSize: 10, fontWeight: 400}}
								style={{borderRadius: 30, lineHeight: '28px', height: 28, minWidth: 74, marginLeft: 9}} />
						</div>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default Bookings;