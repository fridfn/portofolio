import React, { useState } from "react"
import EachUtils from "@/utils/EachUtils"

const InputForms = ({ data, formData, handleChange }) => {
  const { icons, name, type, maxLength, placeholder } = data;
  return (
   <div className="items">
    <div className="box-icon">
     <ion-icon className="icon" name={icons}></ion-icon>
    </div>
    <textarea type={type} name={name} required placeholder={placeholder} value={formData[name]}  onChange={handleChange} className="input" maxLength={maxLength}></textarea>
   </div>
  )
}

const Forms = ({ data }) => {
  const [ formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: '',
  })
  
  const handleChange = (e) => {
   const { name, value } = e.target;
   
   setFormData({
    ...formData,
    [name]: value
   })
  }
  
  const handleSubmit = (e) => {
   e.preventDefault()
   console.log({formData})
  }
  
  const ListInput = [
    {
     name: "name",
     type: "text",
     maxLength: "15",
     icons: "pencil",
     placeholder: "name*",
    },
    {
     type: "email",
     name: "email",
     maxLength: "30",
     icons: "mail",
     placeholder: "email*",
    },
    {
     type: "text",
     name: "subject",
     maxLength: "15",
     icons: "create",
     placeholder: "subject*",
    },
   ]
  
  return (
   <>
    <div className="forms">
     <form
      id="form-email"
      className="form-input"
      onSubmit={(e) => handleSubmit(e)}>
      <EachUtils
       of={ListInput}
       render={(value, index) => (
         <InputForms
           formData={formData} 
           data={value} key={index}
           handleChange={handleChange} />
       )}/>
      <div className="items">
       <textarea type="text" name="message" required placeholder="message*" value={formData.message} onChange={handleChange} className="input" rows="9"></textarea>
      </div>
     </form>
     <button type="submit" className="submit-button" form="form-email">
     <ion-icon className="icon" name="mail"></ion-icon>
     send message
     </button>
    </div>
   </>
  )
}

export default Forms;