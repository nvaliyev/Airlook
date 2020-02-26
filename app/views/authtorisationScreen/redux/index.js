import constans from './constans';

const initialState = {
    isShowName: false
}
export default (state = initialState, action) => {
    const { type, data } = action;
    console.log('state--->>>',state)
    switch (type) {
        case constans.IS_SHOW_NAME:
            return {
                ...state,
                ...data
            }
            break;
        default:
            return state;
    }
};