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
  const personCOLLECTION = 'Personregister';
  
  const eiendomLISTVIEW = document.querySelector('#eiendomcollect');
  const EiendomCOLLECTION = 'Eiendomsregister';

  const kjøretøyLISTVIEW = document.querySelector('#kjøretøycollect');
  const KjøretøyCOLLECTION = 'Kjøretøyregister';

  const ektefelleLISTVIEW = document.querySelector('#ektefellecollect');
  const ektefelleCOLLECTION = 'Personregister';



  // getting data (person)
  DB.collection(personCOLLECTION).onSnapshot(snapshot =>{
    const collectionArr = snapshot.docs;
    if(collectionArr.length > 0){
      //  personLISTVIEW.innerHTML = '';
        collectionArr.forEach(arrelement => {
          element = arrelement.data();
          personLISTVIEW.innerHTML += `
          <tr> <span class="person"> <td> ${element.Fornavn}</td> <td>${element.Etternavn}</td><td> ${element.Fødselsdato}</td><td> ${element.Postadresse}</td></span></tr>
          `
        });
    }
  });

    // getting data (eiendom)
    DB.collection(EiendomCOLLECTION).onSnapshot(snapshot =>{
      const collectionArr = snapshot.docs;
      if(collectionArr.length > 0){
         // eiendomLISTVIEW.innerHTML = '';
          collectionArr.forEach(arrelement => {
            element = arrelement.data();
            eiendomLISTVIEW.innerHTML += `
            <tr> <span class="eiendom"> <td> ${element.Adresse}</td> <td>${element.Eiendomsnummer}</td> <td>${element.Kommune}</td> <td>${element.Postnummer}</td></span></tr>
            `
          });
      }
    });


    // getting data (kjøretøy)
DB.collection(KjøretøyCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
     // kjøretøyLISTVIEW.innerHTML = '';
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        kjøretøyLISTVIEW.innerHTML += `
        <tr> <span class="person"> <td> ${element.Eier}</td> <td>${element.Kjøretøytype}</td> <td> ${element.Chassinummer}</td> </span></tr>
        `
      });
  }
});

 // getting data (ektefelle)
 DB.collection(ektefelleCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        ektefelleLISTVIEW.innerHTML += `
        <tr> <span class="ektefelle"> <td> ${element.Fornavn} ${element.Etternavn} </td> <td> ${element.Personnummer}</td> <td>${element.Ektefelle}</td> </span></tr>
        `
      });
  }
});

