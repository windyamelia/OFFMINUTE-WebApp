import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

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
	cuisineCustom: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 480,
	    overflowY: 'auto',
	},
};


class GridListExplore extends React.Component {
	render () {
		return (
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
		);
	}
}

export default GridListExplore;