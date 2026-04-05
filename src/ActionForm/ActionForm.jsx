import React, { useState } from 'react'

function ActionForm() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // const handleAction = (formData) => {
    //     console.log(formData.get("name"))
    //     console.log(formData.get("email"))
    // }

    const passwordOnChangeHandle = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        if (password.length < 6) {
            setError("Password must be at least 6 characters!")
        }
        else { setError(" ") }
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
            <form onSubmit={handleSubmit}>
                <input type="email " name="email" required placeholder='email' /> <br />
                <input type="password" name="password" onChange={passwordOnChangeHandle} required placeholder='password' /> <br />
                <input type="submit" value={"submit"} />
            </form>

            <small style={{ color: "red" }}>{error}</small>
        </div>
    )
}

export default ActionForm