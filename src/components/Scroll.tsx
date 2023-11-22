import  { Button } from "antd"

interface ScrollProps {
    createdElement: React.ReactNode[];
    setCreatedElement: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
    scrollName: string;
    index: number;
}

const Scroll: React.FC<ScrollProps> = ({createdElement, setCreatedElement, scrollName, index}) => {

const removeScroll = () => {
    const updatedElements = createdElement.filter((_, i) => i !== index);
    setCreatedElement(updatedElements)
    localStorage.setItem("newArray", JSON.stringify(updatedElements))
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
<h1>{scrollName}</h1>
</div>

)
}
export default Scroll