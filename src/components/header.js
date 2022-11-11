import React from 'react';

const Header = ({length}) => {
  return (
    <div className='header'>
      <h1>todo list ({length})</h1>
    </div>
  );
};

export default Header;