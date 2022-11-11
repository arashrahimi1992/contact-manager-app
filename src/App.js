import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import SecondPage from './components/SecondPage'
import { ContactContext } from './context/contactContext'
import { useState, useEffect } from 'react';
import axios from 'axios'


const App = () => {
  const [list, setList] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [job, setJob] = useState()
  const [number, setNumber] = useState(0)
  const [post, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const [lengthArray, setLengthArray] = useState()


  //getallcontact
  useEffect(() => {
    const fetchData = async () => {
try{
  const res = await axios.get("http://localhost:9000/login")
  setList(res.data)
  setPost(res.data)
  setCurrentPage(res.data)
  setLengthArray(res.data.length)
}catch(err){
  console.log(err.massage)

}  
    }
    fetchData()
  }, [])

  //register
  const register = async () => {
    const contact = {
      firstName,
      lastName,
      password,
      mobile,
      email,
      age,
      job
    }
    await axios.post("http://localhost:9000/login", contact)
  }
  const setContact = () => {
    if (firstName === "" || lastName === "" || password === "" || mobile === "" || email === "" || age === "" || job === "") {
      alert("لطفا تمامی فیلدها را پر کنید")
    }
    register()
    setFirstName("")
    setLastName("")
    setPassword("")
    setMobile("")
    setEmail("")
    setAge("")
    setJob("")
  }

  //delete contact 
  const Del = (id) => {
    const fetchData = async () => {
        const res = await axios.delete(`http://localhost:9000/login/${id}`)
        if (res) {
            const { data } = await axios.get("http://localhost:9000/login")
            setPost(data)
            setNumber(-1)
        }
    }
    fetchData()
}
//edit contact
const update=async(id,contact)=>{
  const res =await axios.put(`http://localhost:9000/login/${id}`,contact)
  if(res){
    const { data } = await axios.get("http://localhost:9000/login")
            setPost(data)
            setNumber(0)
  }
}

  return (
    <ContactContext.Provider value={{
      list,
      setList,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      password,
      setPassword,
      mobile,
      setMobile,
      email,
      setEmail,
      age,
      setAge,
      job,
      setJob,
      register,
      post,
      setPost,
      currentPage,
      setCurrentPage,
      lengthArray,
      setLengthArray,
      Del,
      update,
      number,
      setNumber,
      setContact
    

    }} >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/spage' element={<SecondPage />} />
      </Routes>
    </ContactContext.Provider>
  );
};
export default App;