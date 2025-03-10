import '../styles/Message.css'

function Message( {message} ) {
    return ( 
        <div className="Message">
            <h1>{message}</h1>
        </div>
     );
}

export default Message;