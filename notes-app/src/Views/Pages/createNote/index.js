import React from 'react'
import PageLayout from '../../utils/PageLayout/PageLayout';
import CreateNoteForm from '../../../Controllers/createNote/index';

const CreateNote = () => {
    return (
        <div>
            <PageLayout>

                <h1>Create Note</h1>
            
               <CreateNoteForm />
            </PageLayout>
        </div>
    )
}

export default CreateNote
