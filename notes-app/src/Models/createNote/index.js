import db from '../firebaseSetup/fire';

const saveNote = (note)=>{
    
    db.collection('notes').add({
        note
    }).then((response)=>{
        console.log(response.id)
    })
}

export default saveNote;