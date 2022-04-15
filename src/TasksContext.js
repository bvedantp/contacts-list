import { createContext, useReducer, useEffect } from "react";

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

export function TasksProvider({children}) {
    const [mainState, dispatch] = useReducer(reducer, [], (initialState) => JSON.parse(localStorage.getItem("storedState")) || initialState)

    useEffect(()=> {
        localStorage.setItem("storedState", JSON.stringify(mainState))
    },[mainState])

    return (
        <TasksContext.Provider value={mainState}>
          <TasksDispatchContext.Provider value={dispatch}>
            {children}
          </TasksDispatchContext.Provider>
        </TasksContext.Provider>
      )
}

function reducer(mainState, action) {
    switch (action.type) {
        case "inputToMain":
            return [...mainState, action.addContact]

        case "deleteFromMain":
            let isPresent = mainState.findIndex(element => (element.id === action.currentId))
            if(isPresent === -1) {
                return
            } else {
                const stateCopy = mainState.slice()
                stateCopy.splice(isPresent,1)
                return [...stateCopy]
            }

        case "editTheMain":
            let isIDPresent = mainState.findIndex(element => (element.id === action.currId))
            if(isIDPresent === -1) {
                return
            } else {
                const stateCopy = mainState.slice()
                stateCopy[isIDPresent] = action.updatedState
                return [...stateCopy]
            }

        default:
            throw new Error();
    }
}
