import db from '../firebaseSetup/fire';

   const data =  db.collection('data').doc('notes').get().then(da=>{
       return da
   });

   export default data;