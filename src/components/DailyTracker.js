import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const DailyTracker = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (newActivity.trim()) {
      setActivities([
        ...activities,
        {
          id: Date.now(),
          text: newActivity,
          time: currentTime
        }
      ]);
      setNewActivity('');
    }
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Daily Activity Tracker v2</h1>
      
      <form onSubmit={handleAddActivity} className="flex gap-4 mb-6">
        <input
          type="time"
          value={currentTime}
          onChange={(e) => setCurrentTime(e.target.value)}
          className="p-2 border border-gray-300 rounded text-gray-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="text"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          placeholder="What are you doing?"
          className="flex-1 p-2 border border-gray-300 rounded text-gray-900 bg-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add
        </button>
      </form>

      <div className="space-y-3">
        {activities.map(activity => (
          <div 
            key={activity.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100"
          >
            <div>
              <span className="font-medium text-gray-900">{activity.time}</span>
              <span className="ml-4 text-gray-700">{activity.text}</span>
            </div>
            <button
              onClick={() => handleDeleteActivity(activity.id)}
              className="text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 rounded p-1"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyTracker;