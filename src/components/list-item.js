import React from 'react';

const ListItem = ({title, completed,  removeItem}) => {

  return (
    <div className='list-item'>
      <span>{title}</span>
      <button onClick={removeItem}>delete</button>
    </div>
  );
};

export default ListItem;