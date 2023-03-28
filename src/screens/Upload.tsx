import React, { useState } from "react";
import ImageUploadButton from "../components/ImageUploadButton";
import "../styles/screens/upload.scss";

export const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageFile: any) => {
    setSelectedImage(imageFile);
  };
  return (
    <div className="upload">
      <div className="upload-body">
        <div className="body-image">
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          )}
          <ImageUploadButton onImageSelect={handleImageSelect} />
        </div>

        <div className="body-content">
          <div className="content-title">
            <input
              name="title"
              color="skyblue"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="content-ct">
            <input name="content" placeholder="내용을 입력하세요" />
          </div>
        </div>
      </div>
      <button>업로드</button>
    </div>
  );
};
