import {all, call,put, takeLatest} from 'redux-saga/effects';
import {USER_ACTION_TYPES} from './user.types';
import {createAuthUserWithEmailAndPassword,
        createUserDocumentForAuth, 
        getCurrentUser,
        signInAuthUserWithEmailAndPassword,
        signOutUser} from '../../utils/firebase/firebase.utils'
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess} from './user.action';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
 
export function* getSnapshotFromUserAuth (userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentForAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

//export function *signInWithEmail(action): it gets all action
export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) { 
    yield put(signInFailed(error));
  }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
       const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
       yield put(signUpSuccess(user, {displayName}));
    } catch (error) { 
        yield put(signUpFailed(error ));
      }
} 

export function* signOut() {
    console.log('signOut');
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error ));
    }
}


export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
    console.log('signup', user, additionalDetails);

  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SING_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSucess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

// listeners
export function* userSaga() {
    yield all([
           call(onCheckUserSession),
           call(onGoogleSignInStart),
           call(onEmailSignInStart),
           call(onSignUpStart),
           call(onSignUpSucess),
           call(onSignOutStart),
        ]);
}