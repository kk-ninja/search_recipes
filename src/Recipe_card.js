

const Menucard = ({listId, image, title, rating, energy, diet, ingredients, detail_url}) =>
{   
    //var dietleval; 
    console.log(ingredients);
    //if(diet != ""){
    //dietleval = <div><strong>Diet Leval:</strong> {diet}</div>;
    //}
    var titletried;
    var titleLength = title.length;
    if(titleLength > 43)
    {
        titletried = title.slice(0, 40);
        titletried = titletried+"..."
    }
    else{
        titletried = title;
    }

    const energy_formated = energy.toFixed(2);

    
        return(
                <>
                 
                    <div className="col-md-3 col-sm-6">
                    <span data-toggle="modal" data-target={`#R_modal${listId}`}>
                        <div className="R_card">
                            <div className="R_card_body">
                                    <div className="R_img_div">
                                        <img src={image} className="R_img"></img>
                                    </div>
                                    <div className="R_title">{titletried}</div>
                                    <div className="R_servings">{rating}</div>
                                    <div className="R_energy">{energy_formated} cal.</div>
                            </div>
                        </div>
                        </span>
                     </div>
                    

            
                    <div className="modal fade" id={`R_modal${listId}`} tabindex="-1" role="dialog" aria-labelledby="Recepie_Title" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title In_title" id="exampleModalLongTitle">{title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div align="left" className="modal-body">
                           
                            <p className="In_title">Ingredients</p>
                            <div className="row">
                                {
                                    ingredients.map((R_ingredient, index) =>(
                                        <>
                                            
                                                <div className="col-md-6">
                                                    <div className="In_card">
                                                        <div className="In_card_content">
                                                            <table>
                                                                <tr>
                                                                    <td width="18%">
                                                                        <img src={R_ingredient.image} className="In_img"></img>
                                                                    </td>
                                                                    <td className="In_info_td">
                                                                    <small><span className="In_name">{R_ingredient.text}</span><br/>
                                                                        <div className="In_weight">{R_ingredient.weight.toFixed(1)}g</div></small>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>    
                                                </div>
                                        
                                            
                                            
                                        </>
                                    ))
                                }
                            </div>
                            
                           
                            <div align="right">
                                <a target="_blank" className="btnC" href={detail_url}>More Info.</a> &nbsp;&nbsp;
                                <a  className="btnC" data-dismiss="modal">Close</a>
                            </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </>

            )
       
}

export default Menucard;