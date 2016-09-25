import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Paper from 'material-ui/Paper';

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

export default SortOnDrawer;