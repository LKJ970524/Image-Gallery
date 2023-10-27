import React, { useState } from 'react';

interface ImageBoxProps {
  src: string;
  onDelete: (url: string) => void;
}

function ImageBox({ src, onDelete }: ImageBoxProps) {
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

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(src);
  };

  return (
    <div className="image-box">
      <button className='delete' onClick={handleDeleteClick}>Delete</button>
      <img src={src} onClick={handleImageClick} />

      {isModalOpen && (
        <div className="modal" onClick={handleModalBackgroundClick}>
          <div className="modal-content" onClick={handleModalContentClick}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={src} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageBox;
