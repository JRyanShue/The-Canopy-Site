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
const confirmText = document.querySelector("#confirmText");

saveButton.addEventListener("click", function(){
    const textToSave = inputText.value;

    //check to see that valid email address is being entered
    if (validateEmail(textToSave)) {
        //save email and display success message
        console.log("SAVING TO FIRESTORE: " + textToSave);

        docRef.set({
            name: textToSave
        }).then(function(){
            console.log("Name saved!");
            document.getElementById("confirmText").innerHTML=("Thank you for subscribing! You will receive periodic updates about the Canopy.");
            document.getElementById("confirmText").style.color="white";
        }).catch(function(error){
            console.log("Got an error: ", error);
        })
    } else {
        //display fail message
        document.getElementById("confirmText").innerHTML=("Not a valid email address, please try again.");
        document.getElementById("confirmText").style.color="red";
    }
})

//clear textfield on click
saveButton.addEventListener("click", () => {
    inputText.value = "";
});

//validating email address with regex
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

