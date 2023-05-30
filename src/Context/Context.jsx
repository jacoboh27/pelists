import { createContext, useState } from "react";

// const PeListsContext = createContext();
export const PeListsContext = createContext();

export const PeListsProvider = ({ children }) => {
    const preLists = [
        {
            id: 1,
            title: 'With my girlfriend',
            with: [
                "luisapineda321@gmail.com"
            ],
            list: [
                {
                    title: "Shker 3",
                    platform: "Netflix",
                    completed: false
                },
                {
                    title: "La Madre",
                    platform: "Netflix",
                    completed: true
                },
                {
                    title: "Interestelar",
                    platform: "Prime Video",
                    completed: false
                },
                {
                    title: "Actividad Paranormal",
                    platform: "Ninguna",
                    completed: false
                },
            ]
        },
        {
            id: 2,
            title: 'Lista Personal',
            with: [],
            list: [
                {
                    title: "Navidad con papá",
                    platform: "Star+",
                    completed: false
                }
            ]
        },
        {
            id: 3,
            title: 'Para ver en Familia',
            with: [
                "luisapineda321@gmail.com",
                "alejoalvaritoyes@hotmail.es",
                "estefaisaza@gmail.com",
                "sorbeatrizisaza@gmail.com"
            ],
            list: [
                {
                    title: "La casa Embrujada",
                    platform: "HBO+",
                    completed: true
                },
                {
                    title: "Vacaciones en Familia",
                    platform: "Netflix",
                    completed: false
                },
                {
                    title: "ICarly la nueva",
                    platform: "Paramount+",
                    completed: false
                },
            ]
        },
    ];
    const [lists, setLists] = useState(preLists);

    return (
        <PeListsContext.Provider value={{
            lists,
            setLists,
        }}>
        {children}
    </PeListsContext.Provider>
    );
}
