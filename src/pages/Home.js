import React, { useRef } from 'react';
import { fireStore } from '../firebase';

import { addDoc, collection } from 'firebase/firestore'

function Home(props) {
    const messageRef = useRef()
    const msgColRef = collection(fireStore, 'messages')

    function handleSave(e) {
        e.preventDefault()
        console.log(messageRef.current.value);

        const data = {
            message: messageRef.current.value
        }
        try {
            addDoc(msgColRef, data)
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <label>Enter Message</label>
                <input type='text' ref={messageRef} />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default Home;