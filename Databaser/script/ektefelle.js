// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvTEh1ZuDNs-uinMdO9a_BExdzQZkVPpc",
    authDomain: "databaseoppgave-5ef8a.firebaseapp.com",
    projectId: "databaseoppgave-5ef8a",
    storageBucket: "databaseoppgave-5ef8a.appspot.com",
    messagingSenderId: "954467113566",
    appId: "1:954467113566:web:ea7a4b388efb143b0c32cf",
    measurementId: "G-D734Y4HMZV"
  };
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();


const ektefelleLISTVIEW = document.querySelector('#ektefellecollect');
const ektefelleCOLLECTION = DB.collection('Personregister');
ektefelleCOLLECTION.get().then(snapshot => {
     
        let allePersoner = snapshot.docs;
        let venstreside = [];
        let hoyreside = [];

        for( let i= 0; i<allePersoner.length; ++i){
        let ektefelle = allePersoner[i].data().Ektefelle;
        console.log(ektefelle);
        console.log(`${i < allePersoner.length-1} ${i} < ${allePersoner.length}`);
        if(i < allePersoner.length - 1 && ektefelle !== 0){ //er vi på sisteplassen?
            console.log("if checks out");
            for( let y = i+1; y < allePersoner.length; ++y){
                if(ektefelle == allePersoner[y].data().Ektefelle){
                    if(hoyreside.includes(allePersoner[y].data().Ektefelle)){
                        hoyreside.push(allePersoner[y].data().Ektefelle);
                        venstreside.push (allePersoner[y].data());
                        }
                    }
                }
            }
        }
        console.log(hoyreside, venstreside);
    });


//logikken , les om dataabaser



//var query = ektefelleCOLLECTION.where("Ektefelle", "==", personnummer);


  
/* // getting data (ektefelle)
DB.collection(ektefelleCOLLECTION).onSnapshot(snapshot =>{
    const collectionArr = snapshot.docs;
    if(collectionArr.length > 0){
        //ektefelleLISTVIEW.innerHTML = '';
        collectionArr.forEach(arrelement => {
          element = arrelement.data();
          ektefelleLISTVIEW.innerHTML += `
          <tr> <span class="person"> </span></tr>
          `
        });
    }
  });
  */
