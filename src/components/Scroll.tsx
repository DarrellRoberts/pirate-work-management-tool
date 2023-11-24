import { useState } from "react"
import  { Button, Input } from "antd"
import "../styles/buttons.css"
import "../styles/scroll.css"
import ScrollModal from "./ScrollModal"

interface ScrollProps {
    createdElement: React.ReactNode[];
    setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
    scrollName: string;
    index: number;
}

const Scroll: React.FC<ScrollProps> = ({createdElement, setCreatedElement, scrollName, index}) => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const removeScroll = () => {
    const updatedElements = createdElement.filter((_, i) => i !== index);
    setCreatedElement(updatedElements)
    localStorage.setItem("newArray", JSON.stringify(updatedElements))
}
console.log(scrollName);
const retrieveNames = localStorage.getItem("newArray");
const scrollNames = JSON.parse(retrieveNames);

return (
<div className="bg-scroll flex-col bg-no-repeat bg-cover bg-center h-[550px] w-[450px]">
<Button
type="primary"
// className="ml-60 mt-20 bg-black"
className="X"
onClick={removeScroll}
>
X
</Button>
<h2 
className="scrollTitle"
onClick={() => setIsModalOpen(true)} 
>{scrollNames[index]}
</h2>
{isModalOpen ? 
    <ScrollModal 
    isModalOpen = {isModalOpen} 
    setIsModalOpen ={setIsModalOpen} 
    createdElement = {createdElement} 
    setCreatedElement = {setCreatedElement} 
    /> : null}
</div>

)
}
export default Scroll