import React, { useState, useEffect } from 'react';
import './tasks.css';

const Tasks = ({ mg, userId, onEarnMg }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, description: "Complete 10 workouts", reward: 10, completed: false, check: (data) => data.workoutsCompleted >= 10 },
            { id: 2, description: "Earn 100 Mg", reward: 20, completed: false, check: (data) => data.mg >= 100 },
            { id: 3, description: "Buy 50 paper", reward: 5, completed: false, check: (data) => data.paperCount >= 50 },
            { id: 4, description: "Subscribe to our Telegram channel", reward: 15, completed: false, check: async (data) => await checkSubscription(data.userId) },
        ];
    });

    useEffect(() => {
        const checkTasksCompletion = async () => {
            const updatedTasks = await Promise.all(tasks.map(async task => {
                if (!task.completed && await task.check({ mg, userId, workoutsCompleted: 10, paperCount: 50 })) { // Подставьте правильные данные для проверки
                    onEarnMg(task.reward);
                    alert(`You have earned ${task.reward} Mg for completing: ${task.description}`);
                    return { ...task, completed: true };
                }
                return task;
            }));
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        checkTasksCompletion();
    }, [mg, userId, onEarnMg, tasks]);

    const checkSubscription = async (userId) => {
        const response = await fetch(`https://api.telegram.org/bot5817168459:AAGflot73Ojyew2N5RleJRTL0_LZEpE5EQY/getChatMember?chat_id=-1002197264277&user_id=${userId}`);
        const data = await response.json();
        return data.result && (data.result.status === 'member' || data.result.status === 'administrator' || data.result.status === 'creator');
    };

    
    const handleTaskClick = async (task) => {
        if (task.completed) return;

        if (task.id === 4) {
            const isSubscribed = await checkSubscription(userId);
            if (isSubscribed) {
                const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: true } : t);
                setTasks(updatedTasks);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                onEarnMg(task.reward);
                alert(`You have earned ${task.reward} Mg for subscribing to the Telegram channel!`);
            } else {
                alert("Please subscribe to the Telegram channel to earn the reward.");
            }
        } else {
            const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: true } : t);
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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