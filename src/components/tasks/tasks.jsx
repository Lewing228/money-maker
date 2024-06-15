import React, { useState, useEffect } from 'react';
import './tasks.css';

const Tasks = ({ mg, userId, onEarnMg }) => {
    const checkSubscription = async (userId) => {
        try {
            const response = await fetch(`https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getChatMember?chat_id=<YOUR_CHAT_ID>&user_id=${userId}`);
            const data = await response.json();
            return data.result && (data.result.status === 'member' || data.result.status === 'administrator' || data.result.status === 'creator');
        } catch (error) {
            console.error('Error checking subscription:', error);
            return false;
        }
    };

    const defaultTasks = [
        { id: 1, description: "Complete 10 workouts", reward: 10, completed: false, check: (data) => data.workoutsCompleted >= 10 },
        { id: 2, description: "Earn 100 Mg", reward: 20, completed: false, check: (data) => data.mg >= 100 },
        { id: 3, description: "Buy 50 paper", reward: 5, completed: false, check: (data) => data.paperCount >= 50 },
        { id: 4, description: "Subscribe to our Telegram channel", reward: 15, completed: false, check: async (data) => await checkSubscription(data.userId) },
    ];

    const loadTasks = () => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            return parsedTasks.map(task => {
                const defaultTask = defaultTasks.find(t => t.id === task.id);
                return { ...task, check: defaultTask.check };
            });
        }
        return defaultTasks;
    };

    const [tasks, setTasks] = useState(loadTasks);

    useEffect(() => {
        const checkTasksCompletion = async () => {
            const updatedTasks = await Promise.all(tasks.map(async task => {
                if (!task.completed && await task.check({ mg, userId, workoutsCompleted: 10, paperCount: 50 })) {
                    onEarnMg(task.reward);
                    return { ...task, completed: true };
                }
                return task;
            }));
            if (JSON.stringify(tasks) !== JSON.stringify(updatedTasks)) {
                setTasks(updatedTasks);
                const tasksToSave = updatedTasks.map(({ check, ...task }) => task); // Remove check functions before saving
                localStorage.setItem('tasks', JSON.stringify(tasksToSave));
            }
        };

        checkTasksCompletion();
    }, [mg, userId, tasks, onEarnMg]);

    const handleTaskClick = async (task) => {
        if (task.completed) return;

        if (task.id === 4) {
            const isSubscribed = await checkSubscription(userId);
            if (isSubscribed) {
                const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: true } : t);
                setTasks(updatedTasks);
                const tasksToSave = updatedTasks.map(({ check, ...task }) => task);
                localStorage.setItem('tasks', JSON.stringify(tasksToSave));
                onEarnMg(task.reward);
                alert(`You have earned ${task.reward} Mg for subscribing to the Telegram channel!`);
            } else {
                alert("Please subscribe to the Telegram channel to earn the reward.");
            }
        } else {
            const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: true } : t);
            setTasks(updatedTasks);
            const tasksToSave = updatedTasks.map(({ check, ...task }) => task);
            localStorage.setItem('tasks', JSON.stringify(tasksToSave));
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