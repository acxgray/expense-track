import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message);
    }

    if(isSuccess || user) {
      navigate('/');
    }

    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  const { fullName, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== password2) {
      toast.error('Passwords do not match');
      return;
    } else {
      const userData = {
        fullName,
        email,
        password
      }

      dispatch(register(userData));
    }

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <h3>Register</h3>
        </div>

        <div className="col-lg-6">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="">Full Name</label>
              <input type="text" className="form-control" name="fullName" id="fullName" value={fullName} onChange={onChange} />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Email Address</label>
              <input type="email" className="form-control" name="email" id="email" value={email} onChange={onChange} />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" name="password" id="password" value={password} onChange={onChange} />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Repeat Password</label>
              <input type="password" className="form-control" name="password2" id="password2" value={password2} onChange={onChange} />
            </div>

            <div className="mt-2">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register