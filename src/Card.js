import React from 'react';


const Card = (props) => {
    return <div className= "container" >
        
        <div className= "row" id="cards"> 

            <div className="card col-lg-3 col-sm-12" >
                <img src={props.imagen1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo1}</h5>
                        <p className="card-text">{props.texto1}.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

            <div className="card col-lg-3 col-sm-12" >
            <img src={props.imagen2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo2}</h5>
                    <p className="card-text">{props.texto2}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card col-lg-3 col-sm-12" >
            <img src={props.imagen3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo3}</h5>
                    <p className="card-text">{props.texto3}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            
            
        </div>
        

          
    
    </div>


    
    
}

export default Card;

