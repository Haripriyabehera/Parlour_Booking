import { createContext, useContext, useState } from "react";

const ParlourContext = createContext()

export const ParlourProvider = ({children}) => {
    const [selectedParlour, setSelectedParlour] = useState(null)

    return (
        <ParlourContext.Provider value={{selectedParlour, setSelectedParlour}}>
            {children}
        </ParlourContext.Provider>
    )
}

export function useParlour() {
    return useContext(ParlourContext)
}