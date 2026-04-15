import React, { useState } from 'react';
import './AddCourse.css';

const AddCourseModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    number: '',
    refersTo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные курса отправлены в JSON:', formData);
    // Здесь будет логика сохранения (например, POST запрос)
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Adding a course</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-body">
          <p className="mandatory-label">Mandatory field</p>

          <div className="input-group">
            <label><div className='Text'>Course Title <span className="star">*</span></div> </label>
            <input
              type="text"
              name="title"
              placeholder="For example: &quot;World History&quot;"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label><div className='Text'>Number</div></label>
            <input
              type="text"
              name="number"
              placeholder="For example: HIS101"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label><div className='Text'>Refers to</div></label>
            <div className="select-wrapper">
            <select className="ColorSelect" name="refersTo" value={formData.refersTo} onChange={handleChange}>
  <option value="" disabled>Select</option>
  <option value="it-step">IT Step College</option>
  <option value="other">Other</option>
</select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;