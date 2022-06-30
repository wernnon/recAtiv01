import './Button.css'
function Button(props){
    const titulo = props.titulo;
    const descr = props.descr;
    return(
        
        <div className='body'>

            <button className='title'>
                
                <p>{titulo}</p>
                
                {descr}

            </button>

        </div>
    );
}

export default Button;