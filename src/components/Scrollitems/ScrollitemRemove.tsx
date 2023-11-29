import { useState } from "react";
import  { Button } from "antd"

const ScrollitemRemove: React.FC = ({itemNames, itemIndex, index, setItems, scrollNames}) => {

  const removeItem = () => {
    const updatedItems = itemNames.filter((_, i: number) => itemNames[i] !== itemNames[itemIndex]);
    console.log(updatedItems);
    setItems(updatedItems)
    localStorage.setItem(`${scrollNames[index]}`, JSON.stringify(updatedItems))
}

return(
<>
<Button
        type="primary"
        className="X"
        onClick={removeItem}
        >
        X
</Button>
</>
)
}

export default ScrollitemRemove
