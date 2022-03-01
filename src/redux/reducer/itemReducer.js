

let initialState = {
    items: [],
    selected_Product: {},
    reviews: []
}

function itemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "ADD_ITEM":
            return { ...state, items: payload }

        case "SELECT_PRODUCT":
            return { ...state, selected_Product: payload }

        case "LOAD_REVIEWS":
            return { ...state, reviews: payload }

        case "ADD_REVIEWS":
            return { ...state, reviews: state.reviews.concat(payload) }
        default:
            return state;
    }
}

export { itemReducer }