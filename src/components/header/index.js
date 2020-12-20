import React, {useState} from 'react'

function Header(props) {

    const [tasks, setTasks] = useState([
        'react', 'angular', 'vue'
    ])

    const [task, setTask] = useState(``)
    
    const taskItems = tasks.map((item, i) => <option key={i} value={item}>{item}</option>)

    const addItem = () => {
        setTasks([...tasks, task])
    }

    const handleChange = e => {
        setTask(e.target.value)
    }

    return(
        <div>
            {/* <select>
                {taskItems}
            </select> */}
            <p>{props.name}</p>
            {/* <input onChange={handleChange}/>
            <button onClick={addItem}>click</button> */}
        </div>
    )
}

export default Header