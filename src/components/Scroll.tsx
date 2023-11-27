import { useState } from "react"
import  { Button, Input } from "antd"
import "../styles/buttons.css"
import "../styles/scroll.css"
import ScrollModalEdit from "./ScrollModalEdit"

interface ScrollProps {
    createdElement: React.ReactNode[];
    setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
    scrollName: string;
    index: number;
}

const Scroll: React.FC<ScrollProps> = ({createdElement, setCreatedElement, scrollName, index}) => {
const [isEditModalOpen, setEditIsModalOpen] = useState<boolean>(false);

const removeScroll = () => {
    const updatedElements = createdElement.filter((_, i) => i !== index);
    setCreatedElement(updatedElements)
    localStorage.setItem("newArray", JSON.stringify(updatedElements))
}

const retrieveNames = localStorage.getItem("newArray");
const scrollNames = JSON.parse(retrieveNames);
console.log(scrollNames);
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
onClick={() => setEditIsModalOpen(true)} 
>{scrollNames[index]}
</h2>
{isEditModalOpen ? 
    <ScrollModalEdit 
    isEditModalOpen = {isEditModalOpen} 
    setEditIsModalOpen ={setEditIsModalOpen} 
    scrollNames={scrollNames}
    createdElement={createdElement}
    setCreatedElement={setCreatedElement}
    index={index}
    /> : null}
</div>

)
}
export default Scroll