import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    getDocs, 
    collection, 
    query, 
    where, 
    updateDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ⚙️ Configuração oficial do teu projeto
const firebaseConfig = {
    apiKey: "AIzaSyAccxyuNdi_E9Dpz0YPnWZwRC6mBU0AcVo",
    authDomain: "loneke-site-oficial.firebaseapp.com",
    projectId: "loneke-site-oficial",
    storageBucket: "loneke-site-oficial.firebasestorage.app",
    messagingSenderId: "716824234386",
    appId: "1:716824234386:web:9bd3a8359ba388eb0dd94b",
    measurementId: "G-MGJJPNDTM0"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Torna o Auth e Banco de Dados acessíveis globalmente
window.firebaseAuth = auth;
window.firebaseDb = db;

// Funções do Firestore no escopo global
window.firebaseDoc = doc;
window.firebaseSetDoc = setDoc;
window.firebaseGetDoc = getDoc;
window.firebaseGetDocs = getDocs;
window.firebaseCollection = collection;
window.firebaseQuery = query;
window.firebaseWhere = where;
window.firebaseUpdateDoc = updateDoc;

// Funções de Autenticação no escopo global
window.firebaseCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.firebaseSignInWithEmailAndPassword = signInWithEmailAndPassword;
window.firebaseOnAuthStateChanged = onAuthStateChanged;
window.firebaseSignOut = signOut;

// Funções auxiliares de atalho
window.firebaseCreateUser = async (authObj, email, password) => {
    return await createUserWithEmailAndPassword(authObj, email, password);
};

window.firebaseResetPassword = async (authObj, email) => {
    return await sendPasswordResetEmail(authObj, email);
};