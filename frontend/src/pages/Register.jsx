import {useState, useEffect} from 'react'

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { fullName, email, password, password2 } = formData;

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