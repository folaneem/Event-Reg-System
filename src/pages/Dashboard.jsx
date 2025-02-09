import { useState } from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import SearchSection from '../components/SearchSection';
import SuccessMessage from '../components/modals/SuccessMessage';
import CancelModal from '../components/modals/CancelModal';
import event1 from '../assets/image/event1.png';
import event2 from '../assets/image/event2.png';
import event3 from '../assets/image/event3.png';
import event4 from '../assets/image/event4.png';


const events = [
  {
    id: 1,
    title: "AI & The Future of Work",
    description: "Join top AI experts to discuss the impact of artificial intelligence on jobs, automation, and the workforce of tomorrow.",
    image: event1,
    location: "Tech Innovation Hub, 123 Main Street, San Francisco",
    date: "March 15, 2025",
    time: "10:00 AM - 1:00 PM",
    deadline: "March 10, 2025",
    spotsLeft: 15
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    description: "A night where startups showcase their ideas to investors and industry leaders. Get ready for groundbreaking innovations!",
    image: event2,
    location: "Silicon Valley Incubator, Palo Alto",
    date: "April 5, 2025",
    time: "6:00 PM - 9:00 PM",
    deadline: "March 25, 2025",
    spotsLeft: 10
  },
  {
    id: 3,
    title: "Wellness & Mindfulness Retreat",
    description: "Take a break from your busy schedule and immerse yourself in meditation, yoga, and mindfulness practices.",
    image: event3,
    location: "Serenity Spa & Resort, Colorado",
    date: "May 20, 2025",
    time: "8:00 AM - 6:00 PM",
    deadline: "May 5, 2025",
    spotsLeft: 30
  },
  {
    id: 4,
    title: "Cybersecurity & Ethical Hacking Workshop",
    description: "Learn the fundamentals of cybersecurity, ethical hacking, and how to protect digital assets in an ever-evolving cyber landscape.",
    image: event4,
    location: "Virtual (Zoom Webinar)",
    date: "June 12, 2025",
    time: "2:00 PM - 5:00 PM",
    deadline: "June 5, 2025",
    spotsLeft: 25
  }
];



function Dashboard() {
  const [activeTab, setActiveTab] = useState('available'); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [availableEvents, setAvailableEvents] = useState(events); 
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [eventToCancel, setEventToCancel] = useState(null); 


  const handleRegister = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleRegisterEvent = (event) => {
    console.log("Registering event:", event); 
    setAvailableEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
    setRegisteredEvents(prevRegistered => {
      const updatedRegistered = [...prevRegistered, event];
      console.log("Event registered successfully:", updatedRegistered); 
      handleRegister(); 
      return updatedRegistered;
    });
  };

  const handleCancelRegistration = (event) => {
    console.log("Cancelling registration for event:", event);
    setRegisteredEvents(prevRegistered => prevRegistered.filter(e => e.id !== event.id));
    setAvailableEvents(prevAvailable => [...prevAvailable, event]);
    setShowCancelModal(true);
  };

  const handleCancelClick = (event) => {
    setEventToCancel(event); 
    setShowCancelModal(true); 
  };

  const handleCancelConfirm = () => {
    if (eventToCancel) {
      setRegisteredEvents(prevRegistered => prevRegistered.filter(e => e.id !== eventToCancel.id));
      setAvailableEvents(prevAvailable => [...prevAvailable, eventToCancel]);
      setShowCancelModal(false); 
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {showSuccessMessage && <SuccessMessage onClose={() => setShowSuccessMessage(false)} />}
      {showCancelModal && <CancelModal onClose={() => setShowCancelModal(false)} onConfirm={handleCancelConfirm} />}

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-y-auto hide-scrollbar px-8 py-6">
        <SearchSection activeTab={activeTab} availableEvents={availableEvents} registeredEvents={registeredEvents} />

        <div className="space-y-6">
          {activeTab === 'available' && availableEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              activeTab={activeTab}
              onRegister={handleRegisterEvent}
              onCancel={handleCancelClick}
            />
          ))}
          {activeTab === 'registered' && (
            <div>
              {registeredEvents.length > 0 ? (
                registeredEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    activeTab={activeTab}
                    onRegister={handleRegisterEvent}
                    onCancel={handleCancelClick} 
                  />
                ))
              ) : (
                <p>No Event registered yet</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard; 