import { CommentFragment, PaginatedResult, PostFragment } from "@lens-protocol/client";
import { Dispatch } from "react";

// Define the state type
export type SearchState = 
| {
    value: string;
    state: 'IDLE' | 'LOADING' | 'ERROR';
}
| {
    value: PaginatedResult<CommentFragment | PostFragment>,
    state: 'SUCCESS'
};

// Define the action types
export type SearchAction =
    | { type: 'set'; payload: string }
    | { type: 'clear' }
    | { type: 'fetch'; payload: string }
    | { type: 'done', payload: { status: 'error' | 'success', data: any } };

export type SearchContextType = {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
}