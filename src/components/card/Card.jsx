import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="Location" />
          <span>{item.address}</span>
        </p>
        <p className="price"> $ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="Bed" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="Bath" />
              <span>{item.bathroom} Bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
