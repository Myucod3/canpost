import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAri-4BOPRmjOQCjFu28HsX-12v12clqo",
  authDomain: "canli-f9093.firebaseapp.com",
  projectId: "canli-f9093",
  storageBucket: "canli-f9093.firebasestorage.app",
  messagingSenderId: "798051879179",
  appId: "1:798051879179:web:315a08c7eab5d3c2e83a0e",
  measurementId: "G-NVTHJVKEJW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);