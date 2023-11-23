import  { Button } from "antd"
import "../styles/buttons.css"

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
console.log(scrollName);
const retrieveNames = localStorage.getItem("newArray");
const scrollNames = JSON.parse(retrieveNames);

return (
<div className="bg-scroll flex-col wrap bg-no-repeat bg-cover bg-center h-[400px] w-[300px]">
<Button
type="primary"
className="ml-60 mt-20 bg-black"
onClick={removeScroll}
>
X
</Button>
<h1>{scrollNames[index]}</h1>
</div>

)
}
export default Scroll