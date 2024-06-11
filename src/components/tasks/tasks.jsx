import React, { useState } from 'react';
import './tasks.css';

const Tasks = ({ paperCount, onBuyPaper, onEarnMg }) => {
    const [tasks, setTasks] = useState([
        { id: 1, description: "Complete 10 workouts", reward: 10, completed: false },
        { id: 2, description: "Earn 100 Mg", reward: 20, completed: false },
        { id: 3, description: "Buy 50 paper", reward: 5, completed: false },
        { id: 4, description: "Subscribe to our Telegram channel", reward: 15, completed: false },
    ]);

    const handleTaskClick = (task) => {
        if (task.completed) return; // Don't allow completed tasks to be clicked again

        if (task.id === 4) {
            // Open Telegram channel and check subscription
            window.open('https://t.me/your_channel', '_blank');
            // Implement subscription check logic here
            alert("Please confirm your subscription to the Telegram channel.");
        } else {
            // Mark task as completed and give reward
            const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: true } : t);
            setTasks(updatedTasks);
            onEarnMg(task.reward);
            alert(`You have earned ${task.reward} Mg!`);
        }
    };

    return (
        <div className="tasks_block">
            <h2>Tasks</h2>
            <ul className="task_list">
                {tasks.map(task => (
                    <li key={task.id} className={`task_item ${task.completed ? 'completed' : ''}`} onClick={() => handleTaskClick(task)}>
                        {task.description}
                        {!task.completed && <span className="reward">+{task.reward} Mg</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
