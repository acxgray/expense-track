import {useState, useEffect} from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <h3>Login</h3>
        </div>

        <div className="col-lg-6">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="">Email Address</label>
              <input type="email" className="form-control" name="email" id="email" value={email} onChange={onChange} />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" name="password" id="password" value={password} onChange={onChange} />
            </div>

            <div className="mt-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login