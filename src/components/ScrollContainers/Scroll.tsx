import { useState } from "react";
import { Button } from "antd";
import "../../styles/buttons.css";
import "../../styles/scroll.css";
import ScrollModalEdit from "./ScrollModalEdit";
import ScrollitemAdd from "../Scrollitems/ScrollitemAdd";
import ScrollitemRemove from "../Scrollitems/ScrollitemRemove";
import ScrollitemEdit from "../Scrollitems/ScrollitemEdit";

interface ScrollProps {
  createdElement: React.ReactNode[];
  setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
  scrollName: string;
  index: number;
}

const Scroll: React.FC<ScrollProps> = ({
  createdElement,
  setCreatedElement,
  index,
}) => {
  const [isEditModalOpen, setEditIsModalOpen] = useState<boolean>(false);
  const [itemModal, setItemModal] = useState<boolean>(false);
  const [items, setItems] = useState<string[] | null>([]);
  const [strikethroughIndices, setStrikethroughIndices] = useState<number[]>(
    []
  );

  const retrieveNames = localStorage.getItem("newArray");
  const scrollNames: string[] = JSON.parse(retrieveNames);

  const retrieveItems = localStorage.getItem(`${scrollNames[index]}`);
  const itemNames: string[] = JSON.parse(retrieveItems);

  const handleClick = (index: number) => {
    const updatedIndices = [...strikethroughIndices];
    const indexPosition = updatedIndices.indexOf(index);

    if (indexPosition === -1) {
      updatedIndices.push(index);
    } else {
      updatedIndices.splice(indexPosition, 1);
    }
    setStrikethroughIndices(updatedIndices);
  };

  const removeScroll = () => {
    const updatedElements = createdElement.filter((_, i) => i !== index);
    setCreatedElement(updatedElements);
    localStorage.removeItem(`${scrollNames[index]}`);
    localStorage.setItem("newArray", JSON.stringify(updatedElements));
  };
  return (
    <div className="bg-scroll flex-col items-center bg-no-repeat bg-cover bg-center h-[700px] w-[400px] ml-5 mr-5 mt-5">
      <Button
        type="primary"
        // className="ml-60 mt-20 bg-black"
        className="X"
        onClick={removeScroll}
      >
        X
      </Button>

      <h2 className="scrollTitle" onClick={() => setEditIsModalOpen(true)}>
        {scrollNames[index]}
      </h2>

      {isEditModalOpen ? (
        <ScrollModalEdit
          isEditModalOpen={isEditModalOpen}
          setEditIsModalOpen={setEditIsModalOpen}
          scrollNames={scrollNames}
          index={index}
          createdElement={createdElement}
          setCreatedElement={setCreatedElement}
        />
      ) : null}

      {itemNames
        ? itemNames.map((item, itemIndex: number) => (
            <div key={itemIndex} className="AddText">
              <ScrollitemRemove
                itemIndex={itemIndex}
                itemNames={itemNames}
                index={index}
                setItems={setItems}
                scrollNames={scrollNames}
              />
              <span
                //   onClick={!strike ? () => setStrike(true) : () => setStrike(false)}
                //   className={strike ? "line-through hover:cursor-crosshair" : "hover:cursor-crosshair"}
                onClick={() => handleClick(itemIndex)}
                className={
                  strikethroughIndices.includes(itemIndex)
                    ? "line-through hover:cursor-crosshair"
                    : "hover:cursor-crosshair"
                }
              >
                {item}
              </span>
              <ScrollitemEdit
                itemIndex={itemIndex}
                index={index}
                itemNames={itemNames}
                setItems={setItems}
                scrollNames={scrollNames}
              />
            </div>
          ))
        : null}
      <Button
        ghost
        type="dashed"
        className="Add"
        onClick={() => setItemModal(true)}
      >
        +
      </Button>
      {itemModal ? (
        <ScrollitemAdd
          itemModal={itemModal}
          setItemModal={setItemModal}
          items={items}
          setItems={setItems}
          index={index}
          scrollNames={scrollNames}
        />
      ) : null}
    </div>
  );
};
export default Scroll;
