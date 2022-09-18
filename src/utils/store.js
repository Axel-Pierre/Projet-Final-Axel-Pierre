import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../features/login';
import homeReducer from '../features/home'
import modifReducer from '../features/modifUser'
import profilesReducer from '../features/profiles';
export default configureStore({

    reducer:{
        login:loginReducer,
        home:homeReducer,
        modif: modifReducer,
        profiles: profilesReducer
    }
}
)