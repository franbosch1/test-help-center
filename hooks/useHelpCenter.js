import { useContext } from "react";
import HelpCenterContext from "../context/HelpCenterProvider";

const useHelpCenter = () => {
    return useContext(HelpCenterContext)
}

export default useHelpCenter