import { useState, useEffect } from "react";
import  { Button, Modal, Input } from "antd"
import Scroll from "./Scroll";

const ScrollModalEdit: React.FC = ({isEditModalOpen, setEditIsModalOpen, scrollNames, index, setCreatedElement }) => {

const [editScrollName, setEditScrollName] = useState<string>(scrollNames[index])

  const handleOk = () => {
    setEditIsModalOpen(false);
    const newArray = scrollNames.with(index, editScrollName)
    setCreatedElement(newArray)
    localStorage.setItem("newArray", JSON.stringify(newArray))
  };
  
  const handleCancel = () => {
    setEditIsModalOpen(false);
  };

return(
<>
<Modal 
title="Write the name of your scroll" 
open={isEditModalOpen} 
onOk={handleOk} 
onCancel={handleCancel}
>

    <Input 
      value={editScrollName}
      onChange={(e) => setEditScrollName(e.target.value)}
      maxLength="15"
    />

</Modal>
</>
)
}

export default ScrollModalEdit
