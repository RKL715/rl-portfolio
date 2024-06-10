

interface  ProjectProps {
    onClose : () => void;
    img : string;
    title : string;
    description : string;
}

function Project ({onClose, img, title, description} : ProjectProps) {


    return (
        <div>
            <h2>{title}</h2>
            <img src={img} alt={title}/>
            <p>{description}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default Project