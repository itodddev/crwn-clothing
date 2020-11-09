import React from 'react';
import collections from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(({ id, ...collectionsProps }) => (
            <CollectionPreview key={ id } { ...collectionsProps } />
          ))
        }
      </div>
     
    )
  }
}

export default ShopPage;