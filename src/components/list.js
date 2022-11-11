import React from 'react';
import ListItem from './list-item';

const List = ({task, removeItem}) => {
  return (
    <div className='list'>
      {
        task.map(item => {
          return <ListItem removeItem={() => removeItem(item.id)} key={item.id} {...item}/>
        })
      }
    </div>
  );
};

export default List;