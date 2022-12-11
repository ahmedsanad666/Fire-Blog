import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "../../../firebase/firebaseInit";

export default {
  async signUp( _,payload) {
    // creating user opject
    const newUser = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      userName: payload.userName,
      email: payload.email,
    };

 

    //send response to  signup user infos
    const response = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    // get response data
    // const responseData = await response;
    // ................add users in db.........
    const userId = response.user.uid;
    await setDoc(doc(db, "users", userId), newUser)
      .then(function (res) {
        console.log("added");
      })
      .catch(function (e) {
        console.log("faild to db" + e.code);
      });

    // context.commit("setUser", userId);
  },
  // log in method
  async logIn(context, payloadl) {
    await signInWithEmailAndPassword(auth, payloadl.email, payloadl.password)
      .then(() => {
        return;
      })
      .catch((e) => {
        const error = new Error(e.code || "filed to log in ");
        throw error;
      });
  },
  // ...........try login...........

  // reset user password with email............
  async resetPassword(_, payload) {
    console.log(payload);
    await sendPasswordResetEmail(auth, payload)
      .then(() => {
        console.log("email sent");
      })
      .catch((err) => {
        const error = err.code;
        console.log("worng", error);
        throw error;
      });
  },
 
  // ...get current user data method.......
  async getCurrentUser(context) {
    const docRef = doc(db, "users", auth.currentUser.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      context.commit("setUserData", docSnap);
      console.log(docSnap.data());
    } else {
      const error = new Error("Document does not exists");
      throw error;
    }
  },
  signOut() {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  //update user data

  async update(context,payload){

  const docRef = doc(db,'users',auth.currentUser.uid);
  
  await updateDoc(docRef,payload).then(docRef=>{
    console.log('user updated');
    context.commit('update',payload);
    

  }).catch(err =>{
    const error = new Error(err.code);
    throw error;
  })



  }
};
