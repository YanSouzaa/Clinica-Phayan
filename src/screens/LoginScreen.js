import Header from "../components/header";

function LoginScreen() {
  return (
    <div>
      <h1>Clinica Phayan</h1>
      
      <div className="input-group mb-3" style={{width: 400}}>
      
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type='text' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      
      </div>
      
      <br />
      
      <div className="input-group mb-3"style={{width: 400}}>

        <span className="input-group-text" id="basic-addon">#</span>
        <input type='password' className="form-control"/>
        <br />

      </div>

      <button class="btn btn-outline-secondary" type="button" id="button-addon1">Login</button>
    
    </div>


  );
}

export default LoginScreen;
