import Menuecard from "./Menu";

const OurMenu = () =>{
    return(
        <>
            <div className="container pt-4 pb-4">
                    <center>
                    <h2>
                        <span class="material-icons jambo_icon_m">
                            restaurant_menu
                        </span>&nbsp;Food Menu
                    </h2>
                    </center>
                </div>
            
            <section className = "container">
                <center>
                    <div className="row">
                        <Menuecard />
                    </div>
                </center>
            </section>
        </>
    )
} 

export default OurMenu;