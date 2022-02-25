/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCnI0-MM3sCfdSMZh9pym1TeRhc1lC4etQ",
  authDomain: "friendlychat-d4e53.firebaseapp.com",
  projectId: "friendlychat-d4e53",
  storageBucket: "friendlychat-d4e53.appspot.com",
  messagingSenderId: "264351211362",
  appId: "1:264351211362:web:d653063815c82d20b3563b",
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
