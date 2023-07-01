import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

const breakpointColumnsObj = {
  //https://www.npmjs.com/package/react-masonry-css
  default: 4,
  3000: 6, //3000 px of width show 6 columns
  2000: 5, //2000 px of width show 5 columns
  1200: 3, //1200 px of width show 3 columns
  1000: 2, //1000 px of width show 2 columns
  500: 1, //500 px of width show 1 columns
};

const MasonryLayout = ({ pins }) => (
  <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
    {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
  </Masonry>
);

export default MasonryLayout;