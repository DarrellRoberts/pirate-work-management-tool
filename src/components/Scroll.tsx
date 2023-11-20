import  { Button } from "antd"

interface ScrollProps {
    createdElement: React.ReactNode[];
    setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}

const Scroll: React.FC<ScrollProps> = ({createdElement, setCreatedElement }) => {
const removeScroll = (indexToRemove: number) => {
    const updatedElements = [...createdElement];
    updatedElements.splice(indexToRemove, 1);
    setCreatedElement(updatedElements);
}
return (
<div className="bg-scroll flex-row items-end  bg-no-repeat bg-contain h-3/6">
<Button
type="primary"
className="mt-20 ml-10 bg-red-500"
onClick={() => removeScroll(createdElement.indexOf(scroll))}
>
X
</Button>
</div>

)
}
export default Scroll