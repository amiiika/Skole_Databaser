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
        personLISTVIEW.innerHTML = '';
        collectionArr.forEach(arrelement => {
          element = arrelement.data();
          personLISTVIEW.innerHTML += `
          <li> <span class="person"> ${element.Fornavn} ${element.Etternavn}</span></li>
          `
        });
    }
  });

    // getting data (eiendom)
    DB.collection(EiendomCOLLECTION).onSnapshot(snapshot =>{
      const collectionArr = snapshot.docs;
      if(collectionArr.length > 0){
          eiendomLISTVIEW.innerHTML = '';
          collectionArr.forEach(arrelement => {
            element = arrelement.data();
            eiendomLISTVIEW.innerHTML += `
            <li> <span class="eiendom"> ${element.Adresse} :${element.Eiendomsnummer}</span></li>
            `
          });
      }
    });


    // getting data (kjøretøy)
DB.collection(KjøretøyCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
      kjøretøyLISTVIEW.innerHTML = '';
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        kjøretøyLISTVIEW.innerHTML += `
        <li> <span class="person"> ${element.Kjøretøytype} ${element.Chassinummer} ${element.Eier}</span></li>
        `
      });
  }
});

// getting data (ektefelle)
DB.collection(ektefelleCOLLECTION).onSnapshot(snapshot =>{
  const collectionArr = snapshot.docs;
  if(collectionArr.length > 0){
      ektefelleLISTVIEW.innerHTML = '';
      collectionArr.forEach(arrelement => {
        element = arrelement.data();
        ektefelleLISTVIEW.innerHTML += `
        <li> <span class="person"> ${element.Ektefelle} : ${element.Personnummer}</span></li>
        `
      });
  }
});
