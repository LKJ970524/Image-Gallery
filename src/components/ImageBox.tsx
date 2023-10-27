import React, { useState } from 'react';

function ImageBox(props: {src: string}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="image-box">
      <img src={props.src} onClick={handleImageClick} />

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <img className="modal-content" src={props.src} />
        </div>
      )}
    </div>
  );
}

export default ImageBox;
