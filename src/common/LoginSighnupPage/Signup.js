

import { database } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
function Signup() {
  const[login,setlogin]=useState(false)
  const[Signup,setignup]=useState(true)
    const [formData, setFormData] =useState({
        username: '',
        email: '',
        password: '',
      });
      
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'username') {
        setErrors({
          ...errors,
          username: value.length < 3 ? 'Username must be at least 3 characters' : '',
        });
      } else if (name === 'email') {
        setErrors({
          ...errors,
          email: !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email address' : '',
        });
      } else if (name === 'password') {
        setErrors({
          ...errors,
          password: value.length < 6 ? 'Password must be at least 6 characters' : '',
        });
      }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // const username=e.target.username.value
        const email=e.target.email.value
        const password=e.target.password.value
        createUserWithEmailAndPassword (database,email,password).then(data=>{
            console.log(data,"authData")
            alert('Register Successfully')
            window.location.reload();
        }).catch(err=>{
          alert(err.code)
        })
    }
      const validateForm = () => {
        return formData.username.length >= 3 && /^\S+@\S+\.\S+$/.test(formData.email) && formData.password.length >= 6;
      };
      
    return (
        <MDBContainer fluid className='d-flex justify-content-center'>
         
            <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ marginTop: '2rem' }}>
            <span className='text-center text-danger' style={{fontWeight:24, fontWeight:'bold'}}> Kindly Register for Further information and get premium account  </span>

                <MDBCol col='12'>

                    <MDBCard className='bg-white my-3 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <MDBCardBody className='p-2 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-1 text-center">TrustSoftware</h2>
                            <h2 className="fw-bold mb-1text-center">Sign Up</h2>
                  


                            
                                <MDBInput
                                    wrapperClass='mb-2 w-100'
                                    label='User Name'
                                    type="text"
                                    id='formControlLg'
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    size="lg" />

                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='Email address'
                                    id='formControlLg'
                                    name="email"
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    size="lg" />
                               
                                <MDBInput
                                    wrapperClass='mb-2 w-100'
                                    label='Password'
                                    id='formControlLg'
                                    name="password"
                                    type='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    size="lg" />
                                  {errors.email && <span className="error" style={{color:'red',fontSize:'12px'}}>{errors.email}</span>}
                                  {errors.password && <span className="error" style={{color:'red',fontSize:'12px'}}>{errors.password}</span>}
                                  
                                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}

                                <Button
                               
                                type='submit' size='lg' >
                                    SignUp
                                </Button>
                           

                            <div className="fw-bold mb-2 "></div>


                        </MDBCardBody>
                        </form>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Signup;
