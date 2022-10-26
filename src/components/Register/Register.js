import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../UserContext/UserContext';


const Register = () => {
    const {createUser} = useContext(AuthContext); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            // setError("Password should be 6 character or more")
            toast.error("Password should be 6 character or more", {
                position:"top-center"
            })
            return;
        }

        if (password !== confirm) {
            // setError("Your password didn't matched")
            toast.warning("Your password didn't matched",{
                position:"top-center"
            })
            return;
        }

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch( error => {
            toast.error(error)
            console.error(error);
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-50 mx-auto my-5 border-0 p-5 rounded shadow'>
                <h3>Please Register</h3>
                <div className="my-3">
                    <label className='mb-2'>Enter your full name</label>
                    <input
                        name="name"
                        type="name"
                        className="form-control"
                        placeholder="Enter name"
                        required />
                </div>
                <div className="my-3">
                    <label className='mb-2'>Email address</label>
                    <input
                        name='email'
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required />
                </div>
                <div className="mb-3">
                    <label className='mb-2'>Password</label>
                    <input
                        name='password'
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required />
                </div>
                <div className="mb-3">
                    <label className='mb-2'>Confirm Password</label>
                    <input
                        name='confirm'
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        required />
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary mb-2 px-5">
                        Register
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already Have an Account? <Link to='/login'>Login now</Link>
                </p>
                <ToastContainer />
            </div>
        </form>
    );
};

export default Register;