import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import LocationOn from 'material-ui/svg-icons/communication/location-on';

const popular1 = 'images/popular1.png';

const styles = {
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
};

class PopularTab extends React.Component {
	render() {
		return (
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
		);
	}
}

export default PopularTab;