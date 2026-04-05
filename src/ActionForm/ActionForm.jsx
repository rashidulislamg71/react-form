import React, { useState } from 'react'

function ActionForm() {
    const [password, setPassword] = useState(" ")
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.email.value)
    // }

    // const handleAction = (formData) => {
    //     console.log(formData.get("name"))
    //     console.log(formData.get("email"))
    // }

    const passwordOnChangeHandle = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
        <div>

            {/* <h4>use onSubmit</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text " name="name" /> <br />
                <input type="email " name="email" /> <br />
                <input type="submit" value={"submit"} />
            </form>

            <h4>use action</h4>
            <form action={handleAction}>
                <input type="text " name="name" /> <br />
                <input type="email " name="email" /> <br />
                <input type="submit" value={"submit"} />
            </form> */}

            <h4>use onChange
            </h4>
            <form >
                <input type="email " name="email" required placeholder='email'/> <br />
                <input type="password" name="password" onChange={passwordOnChangeHandle}  required placeholder='password'/> <br />
                <input type="submit" value={"submit"} />
            </form>
        </div>
    )
}

export default ActionForm