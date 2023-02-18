import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
const firebaseConfig = {};
let app;
let analytics;
if (typeof window != undefined) {
  app = initializeApp(firebaseConfig);
  analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
}

console.log("analystics setup");

export { app, analytics };
