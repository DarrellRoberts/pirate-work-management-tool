import  { Button } from "antd"

interface ScrollProps {
    createdElement: React.ReactNode[];
    setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}

const Scroll: React.FC<ScrollProps> = ({createdElement, setCreatedElement, scrollName}) => {
const removeScroll = (indexToRemove: number) => {
    // const updatedElements = [...createdElement];
    let deleted = delete createdElement[indexToRemove]
    setCreatedElement(createdElement)
}
return (
<div className="bg-scroll flex-col wrap bg-no-repeat bg-cover bg-center h-[400px] w-[300px]">
<Button
type="primary"
className="ml-60 mt-20 bg-red-500"
onClick={removeScroll}
>
X
</Button>
<h2>{scrollName}</h2>
</div>

)
}
export default Scroll