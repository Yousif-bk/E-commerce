import React, { useState,useEffect } from 'react'
import { Header, Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import axios from '../axios-orders';
import { useNavigate } from 'react-router-dom';
function AddOrder() {

  const { currentColor } = useStateContext();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const initialValue = {fullName: "", email: "", item: "", location:""}
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value});
  }

  const orderHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue))
    setIsSubmit(true);
    setIsLoading(true)
    // axios.post('/orders.json', formValue)
    //   .then(response => {
    //     navigate("/orders");
    //     setIsLoading(true)
    //   })
    //   .catch(error => {
    //     this.setIsLoading(false)
    //   });
  }
  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formErrors)
    }
    
  },[formErrors])

  const validate = (value) =>{
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!value.fullName){
      error.fullName = "FullName is required !"
    }
    if(!value.email){
      error.email = "Email is required !"
    } else if (!regex.test(value.email)) {
      error.email = "This is not a valid email format!";
    }
    if(!value.item){
      error.item = "Item is required !"
    }
    if(!value.location){
      error.location = "Location is required !"
    }
    return error;
  }




  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Add Order" />
      <form>
        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
          <input type="text" value={formValue.fullName} name="fullName" onChange={handleChange} id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          <p className="text-red-600">{formErrors.fullName}</p>
        </div>
      
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" value={formValue.email}  name="email" onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            <p className="text-red-600">{formErrors.email}</p>
          </div>

          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item</label>
            <input type="text" id="text" value={formValue.item} name="item" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <p className="text-red-600">{formErrors.item}</p>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Your Location</label>
          <select id="countries" value={formValue.location} onChange={handleChange} name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
          <p className="text-red-600">{formErrors.location}</p>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>

        <div className="flex justify-end">
          {/* <Button
            color='white'
            bgColor={currentColor}
            text="Submit"
            isLoading borderRadius="10px"
            onClick={orderHandler}
          /> */}
          <button onClick={orderHandler} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
            {isLoading && <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg>}
            Submit
          </button>

          

        </div>




      </form>
    </div>
  )
}

export default AddOrder