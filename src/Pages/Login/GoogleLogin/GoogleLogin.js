import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../Images/google.png';

const GoogleLogin = () => {



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '5px' }} className='bg-primary w-50'></div>
                <h5 className='mt-2 px-2 '>or</h5>
                <div style={{ height: '5px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;