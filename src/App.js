import React, { useState } from 'react';
import AddCourseModal from './components/AddCourse'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      
      
      <button 
        onClick={openModal}
        style={{
          padding: '10px 20px',
          backgroundColor: '#7b61ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add New Course
      </button>

      <AddCourseModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}

export default App;
