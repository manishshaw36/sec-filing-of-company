const initialState = {
    companyOption: [],
    tickerOption: [],
    ticket: '',
    error: null,
};

const firstScreenReducer =  ( state = initialState, action ) => {
    switch (action.type) {
        case 'GET_COMPANY_DETAILS':
            state = { 
                ...state,
                companyOption: action.value
            }
            break;
        case 'HANDLE_SELECTED':
            state = {
                ...state,
                tickerOption: action.value
            };
            break;
        case 'TICKER':
            state = {
                ...state,
                ticker: action.value
            };
            break;
        case 'ERROR':
            state = {
                ...state,
                error:  action.value
            };
            break;
        default:
            break;
    }
    return state;
};

export default firstScreenReducer;