import React, { useState } from 'react';

export default function QuickTasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Review new user applications',
            date: 'Today',
            priority: 'Priority',
            priorityColor: 'bg-yellow-100 text-yellow-800',
            completed: false
        },
        {
            id: 2,
            title: 'Prepare monthly analytics report',
            date: 'Tomorrow',
            priority: 'Normal',
            priorityColor: 'bg-green-100 text-green-800',
            completed: false
        },
        {
            id: 3,
            title: 'Update API documentation',
            date: 'Mar 25, 2025',
            priority: 'Urgent',
            priorityColor: 'bg-red-100 text-red-800',
            completed: false
        },
        {
            id: 4,
            title: 'Schedule team meeting',
            date: 'Mar 27, 2025',
            priority: 'Normal',
            priorityColor: 'bg-green-100 text-green-800',
            completed: false
        }
    ]);

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="border-b px-4 py-3 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-700">Quick Tasks</h3>
                <button className="text-sm text-blue-600 hover:text-blue-500 transition duration-200">
                    + Add Task
                </button>
            </div>
            <div className="p-4">
                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div 
                            key={task.id} 
                            className={`flex items-center p-2 rounded-md hover:bg-gray-50 transition duration-200 ${
                                task.completed ? 'opacity-60' : ''
                            }`}
                        >
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                            />
                            <div className="ml-3 flex-1">
                                <p className={`text-sm font-medium text-gray-900 ${
                                    task.completed ? 'line-through' : ''
                                }`}>
                                    {task.title}
                                </p>
                                <p className="text-xs text-gray-500">{task.date}</p>
                            </div>
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${task.priorityColor}`}>
                                {task.priority}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-center">
                    <button className="text-sm text-gray-500 hover:text-gray-700 transition duration-200">
                        View all tasks
                    </button>
                </div>
            </div>
        </div>
    );
}
