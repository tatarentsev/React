import { useState } from "react";
import { Button, List, TextField } from "@mui/material";
import MyListConstructor from "./MyListConstructor";
import '../styles/TodoList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        { id: 1, task: 'Сходить в спортзал'},
        { id: 2, task: 'Съездить до бабушки'},
        { id: 3, task: 'Приготовить торт'}
    ]);
    const [countId, setCountId] = useState(tasks.length + 1);
    
    const [textFieldCheck, setTextFieldCheck] = useState('inputNewTask');

    function addTask() {
        setCountId(countId + 1);
        if (newTask !== '') {
            setTextFieldCheck('inputNewTask');
            setNewTask('');
            return setTasks([...tasks, {id: countId, task: newTask}]); 
        } else {
            setTextFieldCheck('inputNewTaskRed');
        } 
    }

    return (
        <div className="MyList">
            <List className="MyList__ul" style={{ width: '100%', maxWidth: 360, backgroundColor: '#191c1c', color: 'whitesmoke' }}>
                {tasks.map((task) => (
                    <div className="listItems">
                        <MyListConstructor key={task.id}  text={task.task}/>
                        <IconButton 
                        aria-label="delete" 
                        style={{color: 'red'}}
                        onClick={() => setTasks(tasks.filter(item => item.id !== task.id))}
                        >
                        <DeleteIcon />
                        </IconButton>
                    </div>
                ))}

                <Button 
                className="buttonAddTask"
                onClick={addTask}
                variant="contained">
                Добавить задачу
                </Button>

                <TextField className={textFieldCheck}
                    variant="standard" 
                    id="standard-basic" 
                    value={newTask}
                    label="Введите новую задачу" 
                    onChange={e => setNewTask(e.target.value)}>
                </TextField>
            </List>
        </div>
    );
}

export default TodoList;