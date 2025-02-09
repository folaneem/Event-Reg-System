// Individual event card with image, details, and action button 

function EventCard({ event, activeTab, onRegister, onCancel }) {
  return (
    <div className="flex gap-6 bg-white rounded-lg p-4">
      <img src={event.image} alt={event.title} className="w-48 h-32 object-cover rounded-lg" />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-purple-900">{event.title}</h2>
          {activeTab === 'available' && (
            <div className="flex gap-2 text-sm">
              <span className="text-red-500">Deadline : {event.deadline}</span>
              <span className="text-orange-500">{event.spotsLeft} spots left!</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <svg className="w-4 h-4 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{event.time}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => activeTab === 'available' ? onRegister(event) : onCancel(event)}
        className={`h-8 px-6 rounded-full text-sm font-medium ${activeTab === 'available'
            ? 'bg-purple-900 text-white hover:bg-purple-800'
            : 'bg-purple-900 text-white hover:bg-red-600'
          }`}
      >
        {activeTab === 'available' ? 'Register' : 'Cancel Registration'}
      </button>
    </div>
  );
}

export default EventCard; 