import React, { Component } from "react";
import "./PostProduct.css";
const PostProduct = ({ post }) => {
  return (
    <div className="product">
      <img className="image" src={post.image}></img>
      <h4 className="title">{post.title}</h4>
      <p className="price">Price: {post.price} RS</p>
      <button className="btn">
        <i className="fa fa-cart-shopping"></i>&nbsp;&nbsp;Add To Cart
      </button>
    </div>
  );
};
export default PostProduct;
