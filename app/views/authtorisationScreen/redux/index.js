import constans from './constans';

const initialState = {
    isLogged: '',
    UserName: '',
    UserPassword: '',

}
export default (state = initialState, action) => {
    const { type, data } = action;
    console.log('state--->>>', state)
    switch (type) {
        case constans.IS_LOGGED:
            return {
                ...state,
                 isLogged:data
            }
        case constans.USER_NAME:
            return {
                ...state,
                UserName:data
            }
       case constans.USER_PASSWORD:
           return {
               ...state,
               UserPassword:data
           }

        default:
            return state;
    }
};