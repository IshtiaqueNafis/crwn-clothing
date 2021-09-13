import {createSelector} from 'reselect'

//region selectUser[inputSelector]
const selectUser = state => state.user;
//endregion

//region selectCurrentUser [output selector]
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
//endregion