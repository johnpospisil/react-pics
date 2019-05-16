import React from 'react';

const ImageList = props => {
  // make an array of 'img' elements with the pic urls in the 'src' attribute
  const images = props.images.map((image) => {
    // console.log(image.alt_description);
    return <img alt={image.alt_description} src={image.urls.regular} />
  });
  
  return <div>{images}</div>
};

export default ImageList;