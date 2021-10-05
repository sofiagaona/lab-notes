const FirebasesMock = {
  auth: () => {
    return {
      signInWithEmailAndPassword: (email, password) => {
        return new Promise((resolve, reject) => {
          if (email === "test@test.com") {
            const userCredential = {
              correo: email,
              user: "Test",
            };
            resolve(userCredential);
          } else {
            reject("Error en correo");
          }
        });
      },
      signInWithPopup: (provider) => {
        return new Promise((resolve, reject) => {
          if (provider) {
            resolve("logeado con Google");
          } else {
            reject("Error en registro con Google");
          }
        });
      },

      GoogleAuthProvider: () => {
        return new Promise((resolve) => { });
      },
      signOut: () => {
        return new Promise((res) => {
          res("deslogeo");
        });
      },
    };
  },
};
export default jest.fn(() => {
  return FirebasesMock;
});

