import './Background.css';


const Background = (props) => {
    return (
        <div className={window.location.pathname === '/' ? 'hero' : 'main bg-dark'}>{props.content}</div>
    )
}

export default Background;