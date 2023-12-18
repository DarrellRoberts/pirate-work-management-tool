import { useState, useEffect } from "react";
import { Button } from "antd";
import ScrollModal from "./ScrollContainers/ScrollModal";
import Scroll from "./ScrollContainers/Scroll";
import "../styles/scrollRes.css"

const ScrollButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [createdElement, setCreatedElement] = useState<string[]>([]);

  const handleButtonClick = () => {
    console.log(createdElement);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storedCons = JSON.parse(localStorage.getItem("newArray") || "[]");
    setCreatedElement(storedCons);
  }, []);
  return (
    <>
    <div className="grid">
      <Button
        type="primary"
        onClick={handleButtonClick}
        className="bg-blue-500 float-left w-28"
      >
        Add Scroll
      </Button>
      {isModalOpen ? (
        <ScrollModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          createdElement={createdElement}
          setCreatedElement={setCreatedElement}
        />
      ) : null}
      <h1 className="justify-self-center text-7xl font-main underline">
        Pirate List
        </h1>
      </div>
      <div className="flex justify-start">
        {createdElement.map((con, index: number) => (
          <Scroll
            index={index}
            createdElement={createdElement}
            setCreatedElement={setCreatedElement}
          />
        ))}
      </div>
    </>
  );
};
export default ScrollButton;
