/* eslint-disable */
const Card = (props) => {
    return (

            <div>
                <p>Name:{props.name}</p>
                <p>Nationality: {props.nationality}</p>
                <p>description: {props.description}</p>
                <img src={props.image} alt={"esto es una imagen"} />
            </div>
           
    )
}

export default Card; 