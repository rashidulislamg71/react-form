Get data form

## 1. e.target.[name of the input field].value -- NOTE: when we submit the form then get input value

`javascript`
const handleSubmit = (e) => {
e.preventDefault();
console.log(e.target.email.value)
}

        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text " name="name" /> <br />
                <input type="email " name="email" /> <br />
                <input type="submit" value={"submit"} />
            </form>
        </div>

## 2. use form "action" and formData in the action handler. formData.get("name of the input field) -- NOTE: when we submit the form then get input value

`javascript`
const handleAction = (formData)=>{
console.log(formData.get("name"))
console.log(formData.get("email"))
}

    <div>
        <form action={handleAction}>
            <input type="text " name="name" /> <br />
            <input type="email " name="email" /> <br />
            <input type="submit" value={"submit"} />
        </form>
    </div>
