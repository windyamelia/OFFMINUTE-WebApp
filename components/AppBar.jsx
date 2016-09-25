import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const styles = {
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
};

class AppBarCustom extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
		this.state = {
			open: false,
		};
		this.handleMenuClose = this.handleMenuClose.bind(this);
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

	render () {
		return (
			<div>
				<AppBar 
					title={<div style={styles.title}>OFFMINUTE</div>}
					onLeftIconButtonTouchTap={this.handleMenuToggle}
					zDepth={0}
					iconElementRight={<img src={"images/icon/rightIcon.png"} style={styles.rightIcon} />} />
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
			</div>
		);
	}
}

export default AppBarCustom;