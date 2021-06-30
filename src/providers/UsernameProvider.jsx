import { createContext, useState, useContext } from 'react';

const UsernameContext = createContext({});

export default function UsernameProvider(props) {
    const [data, setData] = useState("");
    const [repository, setRepository] = useState("");

    return (
        <UsernameContext.Provider
            value={{
                data,
                setData,
                repository,
                setRepository
            }}
        >
            {props.children}
        </UsernameContext.Provider>
    );
}

export const useData = () => useContext(UsernameContext);