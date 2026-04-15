import React, { useState } from 'react';
import AddCourseModal from './components/AddCourse'; // путь к твоему файлу

function App() {
  // Состояние: false - закрыто, true - открыто
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      
      {/* Кнопка, которая открывает форму */}
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

      {/* Вызов компонента модалки */}
      <AddCourseModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}

export default App;