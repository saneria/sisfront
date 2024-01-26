import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

function Image() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post("http://thesis.test/api/image", formData);

      const data = response.data;
      console.log(data);

      setUploadedImageUrl(data.url); 

      console.log("Image Uploaded Successfully");
    } catch (error) {
      toast.error("Image Upload Failed");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {previewImage && (
        <div>
          <p>Selected Image:</p>
          <img src={previewImage} alt="Selected" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <Button variant="primary" type="button" onClick={handleImage}>
      </Button>
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default Image;
