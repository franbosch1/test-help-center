import { useState, createContext } from "react";

const HelpCenterContext = createContext()

const HelpCenterProvider = ({children}) => {
    //State para desaparecer el menu
    const [isSliderMenuVisible, setSliderMenuVisible] = useState(false);
    //State para desaparecer Sales Process
    const [isLastContentVisible, setIsLastContentVisible] = useState(false);
    //State para desaparecer el menu y Sales Process
    const [isFirstClick, setIsFirstClick] = useState(true);
    //State para mostrar preguntas
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);
    //State para mostrar sugerencias
    const [isSubMenu, setIsSubMenu] = useState(false)

    //Funciones
    const handleSubMenu = () => {
        setIsSubMenu(!isSubMenu)
    }
    const handleShowMenu = () => {
        setSliderMenuVisible(!isSliderMenuVisible);
    };
    const handleLastIconClick = () => {
        setIsLastContentVisible(!isLastContentVisible);
    };
    const handleClick = () => {
         setIsLastContentVisible(true);

        if (isFirstClick) {
            handleLastIconClick(true);
            setIsQuestionVisible(true)
            
        } else {
            handleLastIconClick(false)
            
        }
        setIsFirstClick(false)
        setIsLastContentVisible(false)
        setIsQuestionVisible(false)
        
    };
    const handleQuestionClick = () => {
      setIsQuestionVisible(!isQuestionVisible); 
    };
    const handleColor = () => {

    }
    return (
        <HelpCenterContext.Provider
            value = {{
                isSliderMenuVisible,
                setSliderMenuVisible, 
                handleShowMenu,
                isLastContentVisible,
                handleLastIconClick,
                isFirstClick,
                handleClick,
                handleQuestionClick,
                isQuestionVisible,
                handleSubMenu, 
                isSubMenu, 
                handleColor
            }}
        >
            {children}
        </HelpCenterContext.Provider>
    )
}

export {
    HelpCenterProvider
}

export default HelpCenterContext