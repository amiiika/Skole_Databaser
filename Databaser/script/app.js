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

const personLISTVIEW = document.querySelector('#personcollect');
const PersonForm =document.querySelector('#personreg');
const personCOLLECTION = 'Personregister';

const eiendomLISTVIEW = document.querySelector('#eiendomcollect');
const EiendomForm =document.querySelector('#eiendomreg');
const EiendomCOLLECTION = 'Eiendomsregister';

const kjøretøyLISTVIEW = document.querySelector('#kjøretøycollect');
const kjøretøyForm =document.querySelector('#kjøretøyreg');
const KjøretøyCOLLECTION = 'Kjøretøyregister';

  // saving data(person)
  PersonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let Fornavn = document.getElementById("fornavn").value
    let Etternavn = document.getElementById("etternavn").value
    let Fødselsdato = document.getElementById("fødselsdato").value
    let Personnummer= document.getElementById("personnummer").value
    let Postadresse = document.getElementById("postadresse").value
    let Ektefelle = document.getElementById("ektefelle").value
    DB.collection(personCOLLECTION).add({
      Fornavn,
       Etternavn,
       Fødselsdato,
       Personnummer,
       Postadresse,
       Ektefelle,
    });
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("fødselsdato").value = "";
    document.getElementById("personnummer").value = "";
    document.getElementById("postadresse").value = "";
    document.getElementById("ektefelle").value = "";
  });
  
  // saving data(eiendom)
  EiendomForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let Adresse = document.getElementById("adresse").value
    let Eiendomsnummer = document.getElementById("eiendomsnummer").value
    let Areal = document.getElementById("areal").value
    let Kommune = document.getElementById("kommune").value
    let Postnummer= document.getElementById("postnummer").value
    let Poststed = document.getElementById("poststed").value
    DB.collection(EiendomCOLLECTION).add({
      Adresse,
       Eiendomsnummer,
       Areal,
       Kommune,
       Postnummer,
       Poststed,
    });
    document.getElementById("adresse").value = "";
    document.getElementById("eiendomsnummer").value = "";
    document.getElementById("areal").value = "";
    document.getElementById("kommune").value = "";
    document.getElementById("postnummer").value = "";
    document.getElementById("poststed").value = "";
  });
  

// saving data(kjøretøy)
kjøretøyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let Eier = document.getElementById("eier").value
  let Kjøretøytype = document.getElementById("kjøretøytype").value
  let Vekt = document.getElementById("vekt").value
  let Chassinummer= document.getElementById("chassinummer").value
  let AntallSeter = document.getElementById("antallseter").value
  let Drivstoff = document.getElementById("drivstoff").value
  let Registreringsaar = document.getElementById("registreringsaar").value
  DB.collection(KjøretøyCOLLECTION).add({
    Eier,
     Kjøretøytype,
     Vekt,
     Chassinummer,
     AntallSeter,
     Drivstoff,
     Registreringsaar,
  });
  document.getElementById("eier").value = "";
  document.getElementById("kjøretøytype").value = "";
  document.getElementById("vekt").value = "";
  document.getElementById("chassinummer").value = "";
  document.getElementById("antallseter").value = "";
  document.getElementById("drivstoff").value = "";
  document.getElementById("registreringsaar").value = "";
});