import db from '../firebaseSetup/fire';

const deleteNote = (theme) => {

    db.collection('data').doc('notes').get().then(resp => {

        const data = resp.data().allNotes;

        const resultList = data.reduce((acc, cVal) => {
            if (cVal.theme !== theme) {
                acc.push(cVal);
            }

            return acc
        }, [])

       return resultList;
    }).then(allNotes=>{
        db.collection('data').doc('notes').set({
            allNotes
        }).then(() => {
            console.log('Note/Notes deleted')
        }) 
    })
}

export default deleteNote;