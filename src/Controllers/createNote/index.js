import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../Views/components/input';
import TextArea from '../../Views/components/textArea/index';
import saveNote from '../../Models/createNote/index';
import UserContext from '../../context/context';
import { useHistory } from 'react-router-dom';

const CreateNoteForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const context = useContext(UserContext);
    const [userData, setUserData] = useState(null);
    const history = useHistory()

    useEffect(() => {

        if (context.user !== null) {
            setUserData({
                userEmail: context.user.email,
                userId: context.user.uid
            })
        }

    }, [context])

    const submitNote = (data) => {

        if (userData !== null) {
            saveNote({ ...data, userData });
            history.push('/my-notes')
        }
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