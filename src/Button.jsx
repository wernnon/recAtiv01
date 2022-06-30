function Button({Titulo, Subtitulo}){

    return(

        <div>

            {Titulo && 
                <p >
                     {Titulo}, {Subtitulo}
                </p>
            }     
        </div>
    );
}

export default Button;