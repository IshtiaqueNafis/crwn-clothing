import {createSelector} from 'reselect'

//region selectUser[inputSelector]
const selectUser = state => state.user; // get the user state from the obkect.
//endregion

//region selectCurrentUser [output selector]
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
//endregion