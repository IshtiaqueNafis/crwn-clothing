import {createSelector} from 'reselect'

//region selectUser[inputSelector]
const selectUser = state => state.user; // get the user state from the obkect.
//endregion

//region selectCurrentUser [output selector]
export const selectCurrentUser = createSelector(
    [selectUser], // selectUser is the state witht he user
    user => user.currentUser // gives currentUser object.
)
//endregion