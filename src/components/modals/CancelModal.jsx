// Cancel confirmation modal 

function CancelModal({ onClose, onConfirm, event }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[32px] p-8 w-[671px] relative">
        <button 
          onClick={onClose} 
          className="absolute top-8 left-8 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-900 mb-2">Cancel Registration?</h2>
          <p className="text-base text-purple-900 mb-6">Are you sure you want to cancel your registration for this event?</p>
          <div className="flex justify-end gap-6">
            <button
              onClick={onConfirm}
              className="h-[38px] px-6 bg-red-50 text-red-500 rounded-full hover:bg-red-100 font-avenir text-[14px] font-extrabold whitespace-nowrap flex items-center justify-center w-[211px]"
            >
              Yes, Cancel Registration
            </button>
            <button
              onClick={onClose}
              className="h-[38px] px-6 bg-purple-900 text-white rounded-full hover:bg-purple-800 font-avenir text-[14px] font-extrabold whitespace-nowrap flex items-center justify-center w-[211px]"
            >
              No, Keep My Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelModal; 