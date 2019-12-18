import React from "react";
import "./ItemCard.css";

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    const images = require.context('../../../assets', true);
	const img = images('./' + item.image);

    return (
      <div className="item-card">
        <div className="item-image" style={{ backgroundImage: `url(${img})` }}>
        </div>
        <div className="item-info">
          <h3>{item.name}</h3>
          <p className="contact">
          	<a target="_blank" rel="noopener noreferrer" href={item.website}>Website</a> | <a href={`tel:${item.phone}`}>{item.phone}</a>
          </p>
          <p>{item.location}</p>
          <p><span className="info-title">His Favorite: </span>{item.his}</p>
          <p><span className="info-title">Her Favorite: </span>{item.hers}</p>
          <p><span className="info-title">We Recommend: </span>{item.recommendation}</p>
        </div>
      </div>
    );
  }
}

export default ItemCard;
