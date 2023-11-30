import { useState } from "react";
import  { Modal, Input } from "antd"

const { TextArea } = Input;

const ScrollitemEdit: React.FC = ({itemIndex, index, itemNames, setItems, scrollNames}) => {

const [isEditItemOpen, setEditIsItemOpen] = useState<boolean>(false);
const [newItem, setNewItem] = useState<string>(itemNames[itemIndex]);

  const handleOk = () => {
    setEditIsItemOpen(false);
    const newArray = itemNames.with(itemIndex, newItem)
    setItems(newArray)
    localStorage.setItem(`${scrollNames[index]}`, JSON.stringify(newArray))
  };


  const handleCancel = () => {
    setEditIsItemOpen(false);
  };
return(
<>
<div
onClick={() => setEditIsItemOpen(true)}
className="hover:cursor-pointer"
>
✒️
</div>

{isEditItemOpen &&
<Modal 
title="Write your task" 
open={isEditItemOpen} 
onOk={handleOk} 
onCancel={handleCancel}
>

<TextArea 
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      maxLength="30"
/>

</Modal>
}
</>
)
}

export default ScrollitemEdit
