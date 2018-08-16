import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions';
import { Layout } from 'store/layout';

const initialState: Layout = {
    sidenavOpen: false
};

export function layoutReducer(state: Layout = initialState, action: LayoutActionsUnion): Layout {
    switch (action.type) {
        case LayoutActionTypes.CloseSidenav:
            return {
                sidenavOpen: false,
            };

        case LayoutActionTypes.OpenSidenav:
            return {
                sidenavOpen: true,
            };

        default:
            return state;
    }
}
