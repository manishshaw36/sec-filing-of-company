const secondScreenReducer =  ( state = {
    companyName: '',
    companyInfo: {},
    companyNews: {},
    error: null
}, action ) => {
    switch (action.type) {
        case 'GET_COMPANY_INFO':
            state = {
                ...state,
                companyInfo: action.value
            };
            break;
        case 'GET_COMPANY_NEWS':
            state = {
                ...state,
                companyNews: action.value.news,
                companyName: action.value.name
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

export default secondScreenReducer;