import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import sections from './directory.data.js';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          // Destructure props into individual variables
          this.state.sections.map(({ id, title, imageUrl, size }) => (
            <MenuItem
              key={ id } 
              title={ title }
              imageUrl={ imageUrl }
              size={ size }
            />
          ))
        }
      </div>
    );
  } 
};

export default Directory;