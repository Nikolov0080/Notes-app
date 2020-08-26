import firebase from 'firebase';

const firebaseLogin = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error.message);
    });
}

export default firebaseLogin;