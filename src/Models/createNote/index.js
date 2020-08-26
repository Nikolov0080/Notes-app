import db from '../firebaseSetup/fire';

const saveNote = (note) => {

    db.collection('data').doc('notes').get().then(resp => {
 
        const data = resp.data()
        
        data.allNotes.push(note)

        return data.allNotes
    }).then(allNotes => {

        db.collection('data').doc('notes').set({
            allNotes
        }).then(() => {
            console.log('Note added')
        })
    })
}

export default saveNote;