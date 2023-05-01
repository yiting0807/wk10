// Import the functions you need from the SDKs you need
import  {   getFirestore,collection , getDocs }from "firebase/firestore/lite"
import {initializeApp  ,getApp  ,getApps } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-xKxepkbxFJ15tHCUGXBdh1u3O8b5SUg",
  authDomain: "image-a5497.firebaseapp.com",
  projectId: "image-a5497",
  storageBucket: "image-a5497.appspot.com",
  messagingSenderId: "266136188347",
  appId: "1:266136188347:web:d394122a9269888d5f409e",
  measurementId: "G-QLTT2CQ7M6"
};
const app_length=getApps().length>0;

const app = app_length ? getApp():initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const DBBBBBB = getFirestore(app);
const productsCollection= collection(DBBBBBB , "image");

export const getProducts=async()=>{
  const querySnapshot = await getDocs(productsCollection);
  let result = [];
  querySnapshot.forEach(async(product)=>{
      await result.push(product.data());
  });
  return result;
};