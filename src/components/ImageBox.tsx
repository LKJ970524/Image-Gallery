import React, { useState } from 'react';

function ImageBox(props: {src: string}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalBackgroundClick = () => {
    setIsModalOpen(false);
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="image-box">
      <img src={props.src} onClick={handleImageClick} />

      {isModalOpen && (
        <div className="modal" onClick={handleModalBackgroundClick}>
          <div className="modal-content" onClick={handleModalContentClick}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={props.src} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageBox;
