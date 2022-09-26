import clinicaImg from '../img/clinica.png'

function LoginScreen() {
  return (
    <div>
    <nav class="navbar navbar-light bg-primary" style={{justifyContent:'left'}}>
    <a class="navbar-brand" href="/">
        <img class="rounded float-start" style={{height:35,width:35, marginLeft:10}} src={clinicaImg}/>
    </a>
</nav>
     <div style={{textAlign:'center'}}>

      <h1 style={{marginTop:10}}>Clinica Phayan</h1>
      
      <div className="input-group mb-3" style={{marginTop:'3%',marginLeft:'30%',maxWidth:'40%'}}>
      
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type='text' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      
      </div>
      
      <br />

      
      <div className="input-group mb-3"style={{marginLeft:'30%',maxWidth:'40%'}}>

        <span className="input-group-text" id="basic-addon">#</span>
        <input type='password' className="form-control"/>
        <br />

      </div>


      <button class="btn btn-outline-secondary" type="button" id="button-addon1">Login</button>
     </div>
    
    </div>


  );
}

export default LoginScreen;
