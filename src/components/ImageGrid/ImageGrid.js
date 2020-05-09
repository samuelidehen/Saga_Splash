import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from "../Button";

import "./styles.css";

class ImageGrid extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, isloading, error, loadImages } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isloading && loadImages()} loading={isloading}>
          Load More
        </Button>
      </div>
    );
  }
}
const mapStatToProps = ({ isloading, images, error }) => ({
  isloading,
  images,
  error,
});
const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});
export default connect(mapStatToProps, mapDispatchToProps)(ImageGrid);
