import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from "../Button";
import Stats from "../Stats";

import "./styles.css";

class ImageGrid extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, isloading, error, loadImages, imageStats } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <Stats stats={imageStats[image.id]} />
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
const mapStatToProps = ({ isloading, images, error, imageStats }) => ({
  isloading,
  images,
  error,
  imageStats,
});
const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});
export default connect(mapStatToProps, mapDispatchToProps)(ImageGrid);
