import {initializeApp} from 'firebase/app';
import {getFirestore}  from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyChNnNm-DjWeHP5ZSOlYH3dFARiUErFh0c",
    authDomain: "my-fireblogs-app.firebaseapp.com",
    projectId: "my-fireblogs-app",
    storageBucket: "my-fireblogs-app.appspot.com",
    messagingSenderId: "426366947840",
    appId: "1:426366947840:web:901fbed9042a03314afee5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  // const timestamp = firebase.firestore.fieldValue.serverTimestamp;

  // export { timestamp };
 export default getFirestore(firebaseApp);

 
