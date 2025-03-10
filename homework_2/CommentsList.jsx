import '../style/CommentsList.css';
import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 0, text: "Это первый комментарий" },
        { id: 1, text: "Это второй комментарий" },
        { id: 2, text: "Это третий комментарий" }
    ]);

    return ( 
        <div className='comments'>
            <ul>
                {comments.map((comment) => (
                    <li key={comments.indexOf(comment)}>{comment.text}
                        <button onClick={() => setComments(comments.filter((item) => item.id !== comment.id))}>Удалить</button>
                    </li> 
                ))}
            </ul>
        </div>
    );
    
}

export default CommentsList;