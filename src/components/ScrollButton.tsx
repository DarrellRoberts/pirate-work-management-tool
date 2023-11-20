import { useState } from "react";
import  { Button } from "antd"
import Scroll from "./Scroll" 

const ScrollButton: React.FC = () => {
const [createdElement, setCreatedElement] = useState<React.ReactNode[] >([])
console.log(createdElement)
const handleButtonClick = () => {
    const newElement = <Scroll createdElement={createdElement} setCreatedElement={setCreatedElement} />
    const newArray = [...createdElement, newElement]
    setCreatedElement(newArray);
}

    return (
    <>
    <Button
    type="primary"
    onClick={handleButtonClick}
    className="bg-blue-500"
    >
    Add Scroll
    </Button>
    {createdElement}
    </>
    )
    }
    export default ScrollButton