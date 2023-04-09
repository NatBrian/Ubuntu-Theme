import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC73mp1AmwtiCpyN7acNwqrrC6T1Y9Z0y4",
  authDomain: "nathanael-brian.firebaseapp.com",
  projectId: "nathanael-brian",
  storageBucket: "nathanael-brian.appspot.com",
  messagingSenderId: "94857450586",
  appId: "1:94857450586:web:cc0ba6df91de111e837463",
  measurementId: "G-R4T80V40DN"
};
let app; let analytics;
if(typeof window != undefined){
  app = initializeApp(firebaseConfig);
  analytics = isSupported().then(yes => yes ? 
    getAnalytics(app) 
    : 
    null);
}

export {app, analytics}