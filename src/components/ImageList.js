import './ImageList.css';
import React from 'react';

const ImageList = props => {
  // make an array of 'img' elements with the pic urls in the 'src' attribute
  const images = props.images.map((image) => {
    // console.log(image.alt_description);
    return <img key={image.id} alt={image.alt_description} src={image.urls.regular} />
  });
  
  return <div className="image-list">{images}</div>
};

export default ImageList;