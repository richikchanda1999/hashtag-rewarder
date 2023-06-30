import { CommentFragment, LensClient, PaginatedResult, PostFragment, development, production } from "@lens-protocol/client";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { SearchAction, SearchContextType, SearchState } from "src/types";

export const SearchContext = createContext<SearchContextType | null>(null);

async function fetchPosts(hashtag: string): Promise<PaginatedResult<CommentFragment | PostFragment>> {
    console.log('Fetching posts for: ', hashtag)
    const lensClient = new LensClient({
        environment: production
    });

    const result = await lensClient.search.publications({
        query: hashtag,
        limit: 10,
    });

    console.log(result.items)

    return result
}

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
            return { value: action.payload, state: 'LOADING' };
        case 'done':
            console.log('Fetching complete!')
            return { value: action.payload.data, state: action.payload.status === 'error' ? 'ERROR' : 'SUCCESS' }
        default:
            return { value: '', state: 'ERROR' };
    }
}

// Define the initial state
const initialState: SearchState = { value: '', state: 'IDLE' };

export function SearchProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.state === 'LOADING' && state.value !== '') {
            fetchPosts(state.value).then((posts) => {
                dispatch({ payload: { status: 'success', data: posts }, type: 'done' })
            })
        }
    }, [state.state, state.value])

    return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>
}