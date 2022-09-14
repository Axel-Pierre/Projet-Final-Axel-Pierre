import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../features/login';
import homeReducer from '../features/home'
export default configureStore({

    reducer:{
        login:loginReducer,
        home:homeReducer
    }
}
)