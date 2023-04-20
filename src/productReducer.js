import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
} from './action';

const initialState = {
    products: [],
    product: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
