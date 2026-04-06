import React from 'react'
import useInputField from './hooks/useInputField';

function HookForm() {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");


    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitted", name, email)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={nameOnChange} type="text" placeholder='name' /><br />
                <input type="email" value={email} onChange={emailOnChange} placeholder='email' /> <br />
                <input type="submit" value={"submit"
                } />
            </form>
   
        </div>
    )
}

export default HookForm