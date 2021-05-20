import desktop from "./images/bg-intro-desktop.png"
import './App.css';

function App() {
  return (
    <> 
      
      <body>

      <main>

      
      <div className="content">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p> 
      </div>

      <div className="content-2">
        <p className="text"><b>Try it free 7 days</b> then $20/mo. thereafter</p>

        <br></br>
        <form action="/http://localhost:3000/" id = "form">
          <input type="text" id="fname" name="fname" placeholder="First Name"></input>
          <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
          <input type="text" id="email" name="email" placeholder="Email"></input>
          <input type="text" id="pword" name="pword" placeholder="Password"></input>
          <button><b>CLAIM YOUR FREE TRIAL</b></button>
          <p className="terms"><b>By clicking the button, you are agreeing to our </b><b><span> Terms and Services</span></b></p>
          
           
        </form>

      </div>

      <img src={desktop} alt="desktop"/>
    </main>

      </body>
    </>
  );
}

export default App;


