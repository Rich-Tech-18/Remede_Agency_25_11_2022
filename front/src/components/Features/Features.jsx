import "./Features.css";


const Features = (props) => {
    return(
        <div className="feature-item">
          <img src={props.image} alt={props.imageAlt} className="feature-icon" />
          <h3 className="feature-item-title">{props.title}</h3>
          <p>
            {props.content}
          </p>
        </div>
    )
}

export default Features;