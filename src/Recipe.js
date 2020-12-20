import { useEffect, useState } from "react";
import Recipecard from "./Recipe_card";
import "./Recipe.css";

const Recipe = () =>{

    const app_id = "ea976b4d";
    const app_key = "4d560ba2678badfe64240e5c92464b85";

    const [search, setSearch] = useState("Paneer");
    const [Recipe, setRecipe] = useState([]);
    const [count, setCount] = useState(20);

    const getsearchQuery = e =>{
        setSearch(e.target.value);
        console.log(search);

    }
    useEffect( () => {
        getData();
    },[]);
   
    useEffect( () => {
        getData();
    },[count])

    const getData = async() =>{
        const result = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}&to=${count}`);
        const data = await result.json();
        setRecipe(data.hits);
        
    }

    const getMore = () => {
        setCount(count+8);
    }

    console.log(Recipe);
    return(
        <>
                <div className="container R_top">
                    <center>
                    <h2 className="R_heading">
                        <span className="material-icons jambo_icon_r">
                            fastfood
                        </span>&nbsp;Food Recipes
                    </h2>
                    <div className="custom-file">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="row">
                                    <div className="col-md-10 col-sm-8 mt-3">
                                        <input className="form-control form-control-sm searchInputBox" type="text" placeholder="Search For Recipes..." value={search} onChange={getsearchQuery}/>   
                                    </div>
                                    <div className="col-md-2 col-sm-4 mt-3">
                                        <button className="btnS" onClick={getData}>Search</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </center>
                </div>
            <section className = "container">
                <center>
                    <div className="row mt-5">
                        {Recipe.map((Rdata, index) =>(
                            <Recipecard 
                                key = {index}
                                listId = {index}
                                image = {Rdata.recipe.image} 
                                title = {Rdata.recipe.label}
                                rating = {Rdata.recipe.yield}
                                energy = {Rdata.recipe.calories}
                                diet = {Rdata.recipe.dietLabels}
                                ingredients = {Rdata.recipe.ingredients}
                                detail_url = {Rdata.recipe.url}
                                
                            />
                        ))}
                               
                    </div>
                </center>
                <div align="right">
                    <button className="btnC" onClick={getMore}>More</button>
                </div>
            </section>


        </>
    )
} 

export default Recipe;