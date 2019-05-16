import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  // make an array of 'img' elements with the pic urls in the 'src' attribute
  const images = props.images.map((image) => {
    // console.log(image.alt_description);
    return <ImageCard key={image.id} image={image} />
  });
  
  return <div className="image-list">{images}</div>
};

export default ImageList;