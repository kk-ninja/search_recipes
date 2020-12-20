import { Link } from "react-router-dom";
import image from "./images/truck-removebg-preview.png"

const Home = () =>{
    return(
        <div className = "container height d-flex align-items-center pb-5">
            <div className = "row">
                <div align="left" className = "col-md-6 pt-5 pr-5 order-lg-1 order-1 d-flex justify-content-center flex-column">
                    <h1>Enjoy Your Favourite, Delicious Meal At <span className = "textCol">Kishan</span></h1>
                    <h6 className="mt-1">We make sure that our food is clean and healthy.</h6>        
                    <Link className="btnD mt-4" to="/recipe">Recipes</Link>              
                </div>
                <div className = "col-md-6 pl-5 order-lg-2 order-sm-0">
                    <img className="img-fluid animated" src={image} />
                </div>

            </div>
        </div>
        
    )
}
export default Home;