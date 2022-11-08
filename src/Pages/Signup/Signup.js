import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Authcontext } from '../../Context/AuthProvider/AuthProvider';

const Signup = () => {

    const { createuser } = useContext(Authcontext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createuser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='text-center'>
            <h1>This is signup page</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-orange-500">If you have an account?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;