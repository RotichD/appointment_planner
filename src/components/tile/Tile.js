import React from 'react';

export const Tile = ({ tile }) => {
  return (
    <div className='tile-container'>
      {Object.values(tile).map((value, index) => {
        //for every value of each tile render a <P> with the data. Can handle either contacts or appointments even though they have different number of values by using object.values
        return (
          <p key={index} className={`${index === 0 ? 'tile-title' : ''} tile`}>
            {value}
          </p>
        );
      })}
    </div>
  );
};
