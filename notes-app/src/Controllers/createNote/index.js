import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../Views/components/input';
import TextArea from '../../Views/components/textArea/index';
import saveNote from '../../Models/createNote/index';

const CreateNoteForm = () => {

    const { register, handleSubmit, errors } = useForm();

    const submitNote = (data) => {
        saveNote(data);
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitNote)}>

                {errors.theme && <p>Theme required</p>}
                {errors.note && <p>Note field is required</p>}

                <Input
                    label="Theme"
                    name="theme"
                    reg={register({ required: true })}
                />

                <TextArea
                    name="note"
                    placeholder="Type here..."
                    reg={register({ required: true })}
                />

                <Button type="submit">Create note</Button>
            </form>


        </div>
    )
}

export default CreateNoteForm