import { useState, useEffect } from "react";
import  { Modal, Input } from "antd"

const { TextArea } = Input;

const ScrollitemAdd: React.FC = ({itemModal, setItemModal, items, setItems, index}) => {

const [newItem, setNewItem] = useState<string>("");

  const handleOk = () => {
    setItemModal(false);
    const newItems = [...items, newItem]
    setItems(newItems)
    localStorage.setItem("newItems" + index, JSON.stringify(newItems))
    console.log(items);
    console.log(newItem);
  };


  const handleCancel = () => {
    setItemModal(false);
  };

return(
<>
<Modal 
title="Write your task" 
open={itemModal} 
onOk={handleOk} 
onCancel={handleCancel}
>

<TextArea 
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      maxLength="15"
/>

</Modal>
</>
)
}

export default ScrollitemAdd