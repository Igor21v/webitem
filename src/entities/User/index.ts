export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/getUserAuthData/roleSelectors';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { userReducer, userActions } from './model/slice/userSlice';

export { UserRole } from './model/consts/consts';

export type { UserSchema, User } from './model/types/user';
