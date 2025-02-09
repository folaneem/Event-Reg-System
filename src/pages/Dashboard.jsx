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
    title: "Event Title",
    description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
    image: event1,
    location: "Tech Innovation Center, 123 Main Street, Cityville",
    date: "June 10, 2024",
    time: "3:00 PM - 5:00 PM",
    deadline: "May 10, 2024",
    spotsLeft: 20
  },
  {
    id: 2,
    title: "Event Title",
    description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
    image: event2,
    location: "Tech Innovation Center, 123 Main Street, Cityville",
    date: "June 10, 2024",
    time: "3:00 PM - 5:00 PM",
    deadline: "May 10, 2024",
    spotsLeft: 20
  },
  {
    id: 3,
    title: "Event Title",
    description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
    image: event3,
    location: "Tech Innovation Center, 123 Main Street, Cityville",
    date: "June 10, 2024",
    time: "3:00 PM - 5:00 PM",
    deadline: "May 10, 2024",
    spotsLeft: 20
  },
  {
    id: 4,
    title: "Event Title",
    description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
    image: event4,
    location: "Tech Innovation Center, 123 Main Street, Cityville",
    date: "June 10, 2024",
    time: "3:00 PM - 5:00 PM",
    deadline: "May 10, 2024",
    spotsLeft: 20
  }
];


function Dashboard() {
  const [activeTab, setActiveTab] = useState('available'); // 'available' or 'registered'
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [availableEvents, setAvailableEvents] = useState(events); // Your initial available events
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [eventToCancel, setEventToCancel] = useState(null); // Store the event to be canceled


  const handleRegister = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleRegisterEvent = (event) => {
    console.log("Registering event:", event); // Check if this logs
    setAvailableEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
    setRegisteredEvents(prevRegistered => {
      const updatedRegistered = [...prevRegistered, event];
      console.log("Event registered successfully:", updatedRegistered); // Log the updated registered events
      handleRegister(); // Call to show success message
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
    setEventToCancel(event); // Store the event to be canceled
    setShowCancelModal(true); // Show the modal
  };

  const handleCancelConfirm = () => {
    if (eventToCancel) {
      setRegisteredEvents(prevRegistered => prevRegistered.filter(e => e.id !== eventToCancel.id));
      setAvailableEvents(prevAvailable => [...prevAvailable, eventToCancel]);
      setShowCancelModal(false); // Close the modal
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
                    onCancel={handleCancelClick} // Pass the cancel function
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