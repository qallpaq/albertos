import React, {useContext} from 'react';
import {useSelector} from "react-redux";


const SelectorContext = React.createContext();

export const useSelectorContext = () => {
    return useContext(SelectorContext)
}

const SelectorContextProvider = ({children}) => {

    const selectors = {
        isFetching: useSelector(state => state.basic.isFetching),
        stars: useSelector(state => state.aboutPage.stars)
    }

    return (
        <SelectorContext.Provider value={selectors}>
            {children}
        </SelectorContext.Provider>
    )
};

export default SelectorContextProvider;