import { useState } from "react";
import  { Button } from "antd" 
import ScrollModal from "./ScrollModal";

const ScrollButton: React.FC = () => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [createdElement, setCreatedElement] = useState<React.ReactNode[] >([])

const handleButtonClick = () => {
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
    {isModalOpen ? <ScrollModal isModalOpen = {isModalOpen} setIsModalOpen ={setIsModalOpen} createdElement = {createdElement} setCreatedElement = {setCreatedElement}/> : null}
    <div className="flex justify-start h-screen">
    {createdElement}
    </div>
    </>
    )
    }
    export default ScrollButton