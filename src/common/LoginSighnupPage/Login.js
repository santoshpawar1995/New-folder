


import { database } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
import { Link, useNavigate, useNavigation } from 'react-router-dom';

function Login() {
const [login, setLogin] =useState(false)
    const navigate=useNavigate(); 

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
       
        email: '',
        password: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        if (name === 'email') {
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
        const handleSubmit =  (e) => {
            e.preventDefault();
            const email=e.target.email.value
            const password=e.target.password.value
            signInWithEmailAndPassword (database,email,password).then(data=>{
                console.log(data,"authData")
                navigate("/");
            }).catch(err=>{
              alert(err.code)
              setLogin(true)
            })
           
          };
        //   const validateForm = () => {
        //     return (formData.email) && formData.password.length >= 6;
        //   };  
             
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ marginTop: '2rem' }}>

                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <form onSubmit={(e)=>handleSubmit(e,login)}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">TrustSoftware</h2>
                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>
                           
                            <MDBInput
                                wrapperClass='mb-4 w-100'
                                label='Email address'
                                id='formControlLg'
                                type='email'
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                size="lg" />
                                {errors.email && <span className="error">{errors.email}</span>}
                            <MDBInput
                                wrapperClass='mb-4 w-100'
                                label='Password'
                                id='formControlLg'
                                type='password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}

                                size="lg" />
                                {errors.password && <span className="error">{errors.password}</span>}

            
                            <MDBBtn type='submit' size='lg'>
                                Login
                            </MDBBtn>
                            <p className="text-white-50 ">Please enter your login and password!</p>
                            <div className="fw-bold mb-2 ">Dont have an account?<Link to="/Signup"> Create account</Link></div>
                        

                        </MDBCardBody>
                        </form>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;
