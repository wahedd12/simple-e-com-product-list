import React from 'react'

const Login  = () => {
  return (
    <div>

                      <div className="wrapper2">
                       <span className="icon-close">
            <ion-icon name="close">x</ion-icon>
                      </span>
                    <div className="form-box login">
                      <h2>login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="ok">forget password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account? 
                        <a href="ok" className="register-link">Register</a></p>
                </div>  
            </form>
         </div>      

         <div class="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    
                    <input type="text"  name="username" required/>
                    <label>Username</label>
                </div>

                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    
                    <input type="email"  name="email" required/>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password"  name="password" required/>
                    <label>Password</label>
                </div>
                    
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="number" name="mobile" required/>
                    <label>Phone numbeer</label>
                </div>

                    <div class="gender-box">
                        <span>
                        Choose your gender pls
                        </span>
                    <label for="Male" ><input type="radio" name="gender" id="Male" required/>Male</label>
                
                    <label for="Female"><input type="radio" name="gender" id="Female"required/>Female</label>   
                
                    <label for="Other"><input type="radio" name="gender" id="Other"required/>Other</label>
                </div>
                <br/>

                <div class="remember-forget">
                    <label><input type="checkbox"required/>I agree to the terms & conditions</label>
                    
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register">
                    <p>Already have an account? 
                        <a href="ok" class="login-link">Login</a></p>
                        </div>
                        </form>
            

         </div>
         

            </div>



    </div>
  )
}

export default Login 
