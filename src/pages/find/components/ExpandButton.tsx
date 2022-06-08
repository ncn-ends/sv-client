import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
import { SetStateUtil } from "@/types/main";

type ExpandButton = ( props: {
                          isMenuExpanded: boolean,
                          setIsMenuExpanded: SetStateUtil<boolean>
                      }
) => JSX.Element;

const style = `
bg-gray-800 
text-xl 
flex
justify-center
w-[calc(100%-(2rem))] 
py-[3px] 
text-gray-500 
border-t-2 
border-gray-700 
px-2 
duration-200 
cursor-pointer 
hover:text-blue-400 
hover:border-blue-400`;


const ExpandButton: ExpandButton = ( { isMenuExpanded, setIsMenuExpanded } ) => {
    return (
        <button
            onClick={ () => setIsMenuExpanded( prevState => !prevState ) }
            className={ style }
        >
            { isMenuExpanded ? <BsArrowsCollapse /> : <BsArrowsExpand /> }
        </button>
    )
}

export { ExpandButton };