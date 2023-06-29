import { Dispatch } from "react";

// Define the state type
export type SearchState = {
    value: string;
    state: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
};

// Define the action types
export type SearchAction =
    | { type: 'set'; payload: string }
    | { type: 'clear' }
    | { type: 'fetch'; payload: string };

export type SearchContextType = {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
}