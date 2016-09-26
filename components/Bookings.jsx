import React from 'react';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
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
					<Subheader>Recents</Subheader>

				</Drawer>
			</div>
		);
	}
}

export default Bookings;