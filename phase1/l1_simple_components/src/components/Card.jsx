
function Cards(props){
    return (
        <>
            <div style={{color:"red"}}>
                <p>{props.name}</p>
                <p>{props.title}</p>
                {true ? <h1>hello</h1>:null}
            </div>
        </>
    )
}

export default Cards;

