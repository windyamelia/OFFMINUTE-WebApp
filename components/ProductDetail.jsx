import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const styles = {
	bannerTitle: {
		height: 32,
	},
	labelBanner: {
		textTransform: 'capitalize', 
		fontSize: 18, 
		fontWeight: 400, 
		paddingLeft: 0,
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
};

class ProductDetail extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleProductOpen = this.handleProductOpen.bind(this);
		this.state = {
			open: false,
		};
		this.handleProductClose = this.handleProductClose.bind(this);
	}

	handleProductOpen() {
		this.setState({
			open: !this.state.open,
		});
	}

	handleProductClose() {
		this.setState({
			open: false,
		});
	}

	render() {
		return (
			<div>
				<FlatButton
					   			label="Sushi Tei"
					   			labelStyle={styles.labelBanner}
					   			style={styles.bannerTitle} 
					   			onTouchTap={this.handleProductOpen} />
				<Drawer
					width={360}
					zDepth={5}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}>

						<Toolbar noGutter={true} style={{backgroundColor: '#f2f4f7'}}>
					    		<div style={{textAlign: 'center'}}>
						    		<ToolbarGroup>
						    			<IconButton onTouchTap={this.handleProductClose} style={{padding: '19px 12px'}}>
						    				<ArrowBack />
						    			</IconButton>
						    			<div style={{width:298}}>
						    				<ToolbarTitle text="Sushi Tei" style={styles.menuSearchTitle} />
						    			</div>
						    		</ToolbarGroup>	
					    		</div>					    	
					    </Toolbar>
					    
					    <Divider />

				</Drawer>
			</div>
		);
	}
}

export default ProductDetail;
