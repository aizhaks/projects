function Hello(props){
    return (
        <div className="">
            <h1>Name, {props.name}</h1>
            <h1>Age, {props.age}</h1>
            <p>city, {props.city}</p>
            <p>country, {props.country}</p>
        </div>
     
    )
}

export default Hello