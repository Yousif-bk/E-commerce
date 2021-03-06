import React, {useRef} from 'react'
import {addDoc, collection} from "@firebase/firestore";
import {firestore} from '../firebase'
import { useStateContext } from '../contexts/ContextProvider';
import axios from '../axios-orders';
import { Header } from '../components';
function AddProduct() {

  


    const handleSave = async(e) => {
      const order = {
          customer: {
              name: 'Max Schwarzmüller',
              address: {
                  street: 'Teststreet 1',
                  zipCode: '41351',
                  country: 'Germany'
              },
              email: 'test@test.com'
          },
          deliveryMethod: 'fastest'
      }
      axios.post( '/orders.json', order )
      .then( response => {
      } )
      .catch( error => {
      } );
      }

  return (
<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

<Header category="Page" title="Add Product" />
<form>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password"  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button  onClick={handleSave} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>

  )
}

export default AddProduct