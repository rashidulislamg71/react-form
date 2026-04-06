
import React, { useState } from 'react'

function useInputField(defaultValue) {
    console.log(defaultValue)
 const [fieldValue, setFieldValue] = useState(defaultValue);

 const handleFieldOnChange = (e)=>{
    setFieldValue(e.target.value); 
 }
 return [fieldValue, handleFieldOnChange]
}

export default useInputField