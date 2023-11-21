import { useState, useEffect } from "react";
import  { Button, Modal, Input } from "antd"
import Scroll from "./Scroll";

const ScrollModal: React.FC = ({isModalOpen, setIsModalOpen, createdElement, setCreatedElement}) => {
const [scrollName, setScrollName] = useState<string>("")

  const handleOk = () => {
    setIsModalOpen(false);
    const newElement = 
    <Scroll
    createdElement={createdElement} 
    setCreatedElement={setCreatedElement} 
    scrollName={scrollName} 
    />
    const newArray = [...createdElement, newElement]
    setCreatedElement(newArray);
    console.log(newArray);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

return(
<>
<Modal 
title="Write the name of your scroll" 
open={isModalOpen} 
onOk={handleOk} 
onCancel={handleCancel}>

        <Input 
        value={scrollName}
        onChange={(e) => setScrollName(e.target.value)}
        />

</Modal>
</>
)
}

export default ScrollModal
