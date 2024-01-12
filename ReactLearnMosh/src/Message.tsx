//PascalCase
function Message(){
    //JSX: JavaScript XML : https://babeljs.io/
    const name = 'Feba';
    if(name)
        return <h1>{name} Here</h1>;
    return <h1>Somebody Here</h1>;

}

export default Message;