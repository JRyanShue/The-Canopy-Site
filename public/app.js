// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6vanYrK2bph7YyJ1GJDABL_uA7Dq7Uvw",
    authDomain: "thisisthecanopy.firebaseapp.com",
    databaseURL: "https://thisisthecanopy-default-rtdb.firebaseio.com",
    projectId: "thisisthecanopy",
    storageBucket: "thisisthecanopy.appspot.com",
    messagingSenderId: "146834090182",
    appId: "1:146834090182:web:d0acb41b68b6f79f798fc7",
    measurementId: "G-SPSJFVFD50"
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.doc("users/names");
const inputText = document.querySelector("#userEmail");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function(){
    const textToSave = inputText.value;
    console.log("SAVING TO FIRESTORE: " + textToSave);
    docRef.set({
        name: textToSave
    }).then(function(){
        console.log("Name saved!");
    }).catch(function(error){
        console.log("Got an error: ", error);
    })
})