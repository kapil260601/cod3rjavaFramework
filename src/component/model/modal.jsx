import React, { useEffect, useState } from "react";
import {
    AppBar,
    Tabs,
    Tab,
    Toolbar,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Grid,
    Modal,
    TextField,
    Select,
    MenuItem,
    Box,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getDomain, postdomain } from "../../utils/apis";
import { axiosPost } from "../../utils/apiHandlerNew";
import ".././../component/Header.css";

import { useDropzone } from "react-dropzone";
import axios from "axios";

const HeaderModal = (props) => {
    console.log(props, "addDomainModal");
    const [value, setValue] = useState();
    const [openModalDomain, setopenModalDomain] = useState(false);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const handleTabClick = (e, value) => {
        setValue(value);
        setopenModalDomain(true);
    };

    const handleCloseModal = () => {
        setopenModalDomain(false);
        props.setAddDomainModel(false);
    };

    const [inputValues, setInputValues] = useState({
        domainName: "",
        domainNames: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "domainNames") {
            setInputValues((prevState) => ({
                ...prevState,
                [name]: value.split(" "),
            }));
        } else {
            setInputValues((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const domain = await axiosPost("/domain");
                console.log("hii ", domain);
                setInputValues(domain);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [1]);

    const getLiveSubDomains = async (value) => {
        const data = { domainName: value };
        const getData = await axiosPost("/domain", data);
        console.log("hello", getData);
    };

    const handleSubmit = () => {
        console.log("Submitted values:", inputValues);
        getLiveSubDomains(inputValues)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const [value1, setValue1] = useState();
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [openModalUploadFile, setopenModalUploadFile] = useState(false);

    const onDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                " https://api.escuelajs.co/api/v1/files/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Response:", response.data); // Print response data to the console
            setUploadedFile(file);
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    };

    const handleTabClick1 = (e, value1) => {
        setValue1(value1);
        setopenModalUploadFile(true);
    };

    const handleCloseModalDomain = () => {
        setopenModalUploadFile(false);
        props.setAddUploadfile(false);
    };
    useEffect(() => {
        setopenModalDomain(props.addDomainModal);
        setopenModalUploadFile(props.addUploadfile);
    }, [props.addDomainModal, props.addUploadfile]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "*",
        multiple: false,
        onDropAccepted: (acceptedFiles) => {
            setSelectedFileName(acceptedFiles[0].name);
        },
    });

    return (
        <React.Fragment>
            <Modal open={openModalDomain} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 10,
                        width: 500,
                        border: "4px solid #FA8072",
                        borderRadius: "15px",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{ position: "absolute", top: 0, right: 0 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography sx={{textAlign:"center"}} variant="h6" gutterBottom>
                        Add Domain
                    </Typography>
                    <TextField
                        label="Domain Name"
                        variant="outlined"
                        fullWidth
                        name="domainName"
                        value={inputValues.domainName}
                        sx={{ mb: 2, padding:"10px" }}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Multiple Domain Names    "
                        variant="outlined"
                        fullWidth
                        name="domainNames"
                        value={inputValues.domainNames.join(" ")}
                        onChange={handleChange}
                        sx={{ mb: 2, padding:"10px" }}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{ marginLeft:"180px" }}
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
            <Modal open={openModalUploadFile} onClose={handleCloseModalDomain}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        width: 400,
                        borderLeft: "5px solid orange",
                        borderRadius: "8px",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton
                            onClick={handleCloseModalDomain}
                            sx={{ position: "absolute", top: 0, right: 0 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" gutterBottom>
                        File Upload
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div {...getRootProps({ className: "dropzone" })}>
                                <input {...getInputProps()} />
                                <Button variant="contained">Upload File</Button>
                            </div>
                        </Grid>
                        {selectedFileName && (
                            <Grid item xs={12}>
                                <div className="selected-file-details">
                                    <Typography variant="body1">
                                        Selected File: {selectedFileName}
                                    </Typography>
                                </div>
                            </Grid>
                        )}
                        {uploadedFile && (
                            <Grid item xs={12}>
                                <div className="uploaded-file-details">
                                    <Typography variant="body1">
                                        Uploaded File: {uploadedFile.name}
                                    </Typography>
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default HeaderModal;