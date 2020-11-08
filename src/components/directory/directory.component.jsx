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
          this.state.sections.map(({ id, ...sectionProps }) => (
            <MenuItem
              key={ id } 
              { ...sectionProps }
            />
          ))
        }
      </div>
    );
  } 
};

export default Directory;