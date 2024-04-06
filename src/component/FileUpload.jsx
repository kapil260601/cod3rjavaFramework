import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { axiosPost } from '../utils/apiHandlerNew';
import axios from 'axios';
import { Modal, Button } from '@mui/material';

const FileUpload = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const onDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log("Response:", response.data); // Print response data to the console
            setUploadedFile(file);
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '*',
        multiple: false,
        onDropAccepted: (acceptedFiles) => {
            setSelectedFileName(acceptedFiles[0].name);
        }
    });

    return (
        <Modal open={openModal} onClose={handleCloseModal}>
            <div className="file-upload-container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <button>Upload File</button>
                </div>
                {selectedFileName && (
                    <div className="selected-file-details">
                        <p>Selected File: {selectedFileName}</p>
                    </div>
                )}
                {uploadedFile && (
                    <div className="uploaded-file-details">
                        <p>Uploaded File: {uploadedFile.name}</p>
                    </div>
                )}
                <Button onClick={handleCloseModal}>Close Modal</Button>
            </div>
        </Modal>
    );
};

export default FileUpload;
