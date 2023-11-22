import { useState } from "react";
import  { Button } from "antd" 
import ScrollModal from "./ScrollModal";
import Scroll from "./Scroll";

const ScrollButton: React.FC = () => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [createdElement, setCreatedElement] = useState<React.ReactNode[]>
([])

const handleButtonClick = () => {
    console.log(createdElement)
    setIsModalOpen(true);
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
    {isModalOpen ? 
    <ScrollModal 
    isModalOpen = {isModalOpen} 
    setIsModalOpen ={setIsModalOpen} 
    createdElement = {createdElement} 
    setCreatedElement = {setCreatedElement} 
    /> : null}
    <div className="flex justify-start h-screen">
    {createdElement.map((con, index: number) => (
    <Scroll 
    index={index} 
    createdElement = {createdElement} 
    setCreatedElement = {setCreatedElement}
    />))}
    </div>
    </>
    )
    }
    export default ScrollButton