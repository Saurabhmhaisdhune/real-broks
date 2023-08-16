import React from "react";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import "./PropertyCard.css";

export default function PropertyCard(props) {
  const { title, price, image, address, beds, bathroom, size } = props;
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="property" className="pro-picture" />
      </div>
      <div className="pro-details">
        <label className="pro-price"><span className="pro-prices">₹ {price}</span>/months</label>
        <label className="pro-name">{title}</label>
        <label className="pro-address">{address}</label>
      </div>
      <div className="pro-rooms">
        <label className="pro-beds">
          <BedOutlinedIcon className="icons" />
          <span> {beds} Beds</span>
        </label>
        <label className="pro-bathrooms">
          <BathtubOutlinedIcon className="icons" />
          <span> {bathroom} Bathrooms</span>
        </label>
        <label className="pro-size">
          <AspectRatioOutlinedIcon className="icons" />
          <span>{size}</span>
        </label>
      </div>
    </div>
  );
}
