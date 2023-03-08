import { Link } from "react-router-dom";
import "./gok.css"
const Page1 =()=>{
    return (
        <div>
            <h1>Movies Mania</h1>
        <nav class="topnav">
        <ul>
          <img src="logo1.jpg" alt="logo" style={{height:"90px",width:"100px"}}/> 
        <Link to="/login"><li><button type="submit" class='button'>LOGIN</button></li></Link>
          <Link to="/update"><li><h3>UPDATE</h3></li></Link>
          <Link to="/Read"><li><h3>READ</h3></li></Link>
        <Link to="/delete"><li><h3>DELETE</h3></li></Link>
        <Link to="/Add"><li><h3>ADD</h3></li></Link>
      </ul>
    </nav>
    <br />
    
        </div>
    )
}
export default Page1