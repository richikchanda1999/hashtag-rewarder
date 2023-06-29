import { ReactNode, createContext, useReducer } from "react";
import { SearchAction, SearchContextType, SearchState } from "src/types";
 
export const SearchContext = createContext<SearchContextType | null>(null);

// Define the reducer function
function reducer(state: SearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case 'set':
            return { value: action.payload, state: 'IDLE' };
        case 'clear':
            return { value: '', state: 'IDLE' };
        case 'fetch':
            // Let's pretend this is a API call, you'd normally handle this a bit differently
            console.log(`Fetching data for "${action.payload}"`);
            return { ...state, state: 'LOADING' };
        default:
            return { ...state, state: 'ERROR' };
    }
}

// Define the initial state
const initialState: SearchState = { value: '', state: 'IDLE' };

export function SearchProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <SearchContext.Provider value={{state, dispatch}}>{children}</SearchContext.Provider>
}