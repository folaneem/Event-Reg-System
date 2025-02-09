// Success notification component 

function SuccessMessage({ onClose }) {
  return (
    <div className="fixed top-10 right-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <p className="font-medium">Registration Successful!</p>
        <p className="text-sm">Your event has been successfully registered.</p>
      </div>
      <button onClick={onClose} className="ml-4">×</button>
    </div>
  );
}

export default SuccessMessage; 