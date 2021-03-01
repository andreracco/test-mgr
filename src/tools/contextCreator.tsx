import IBook from 'interfaces/IBook';
import React, { createContext, ReactElement, useReducer } from 'react';

type ProviderProps = {
    children: ReactElement;
};

type ActionType = {
    type: string;
    payload: IBook;
};

export default function <StateType>(
    reducer: (state: StateType, action: ActionType) => StateType,
    actions: any,
    initialState: StateType,
) {
    type ContextType = {
        state: StateType;
        actions: typeof actions;
    };
    
    const Context = createContext<ContextType>({
      state: initialState,
      actions,
    });

    const Provider = ({ children }: ProviderProps) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const contextActions: any = {};

        for (let key in actions) {
            contextActions[key] = actions[key](dispatch);
        }
        return (
            <Context.Provider value={{ state, actions:{
                ...contextActions
            } }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
}