// Contains the title, description and search input 

function SearchSection({ activeTab, availableEvents, registeredEvents }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-purple-900">
          {activeTab === 'available' ? 'Available Events' : 'Registered Events'} ({activeTab === 'available' ? availableEvents.length : registeredEvents.length})
        </h1>
        <p className="text-sm text-gray-600">
          {activeTab === 'available' 
            ? 'These are the lists of available events on the platform'
            : 'These are the lists of events you have registered for on the platform'}
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search events"
          className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm w-64"
        />
        <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

export default SearchSection; 