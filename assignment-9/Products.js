import React, { Component } from "react";
import PostProduct from "./PostProduct";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const products = await res.json();
    console.log(products);
    this.setState({ products });
  }
  render() {
    const { products } = this.state;
    return products.map((post) => <PostProduct key={post.id} post={post} />);
  }
}

export default PostList;
