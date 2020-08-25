import React, { useState } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row';

export default function Level({ songData, songId }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const itemList = <ItemList songData={songData} onItemSelected={onItemSelected} songId={songId} />;

  const itemDetails = <ItemDetails songData={songData} itemId={selectedItem} />;

  return <Row left={itemList} right={itemDetails} />;
}
