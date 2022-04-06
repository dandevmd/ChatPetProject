import { CreateContext } from 'react';

const appContext = CreateContext()


export const appProvider = ({ children }) => {
    <appContext.Provider value={{}}>
        {children}
    </appContext.Provider>
}


export default appContext