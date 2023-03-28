import React from "react";

function ImageUploadButton(props: any) {
  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    props.onImageSelect(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
}

export default ImageUploadButton;
