import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import HeaderModal from "../model/modal";


function Asset() {

  const [addDomainModal, setAddDomainModel] = useState(false);
  const handleOpenDomain = () => {
    setAddDomainModel(true);
  };

  return (
    <>
        <HeaderModal
        addDomainModal={addDomainModal}
        setAddDomainModel={setAddDomainModel}
        
      />
        <div className="Assets">
          <div className="Assets-content" >
            <h1>Assets</h1>
            <p>An Asset is a hostname or an IP address of the system you want to scan.</p>
          </div>

          
          <div className="Assets-button" >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              height: "42px",
              gap: "10px",
            }}
          >
            <Button
              className="  button-design"
              variant="contained"
              // endIcon={<SendIcon />}
              size="small"
              sx={{ fontSize: "medium" }}
              onClick={(e) => handleOpenDomain()}
            >
             ➕ Add Domain
            </Button>
            <div className="Assets-content-p2">
            <a href="#">Get started with Assets ↗️</a>
          </div>
          </Box>
          </div>
        </div>
    </>
  )
}

export default Asset;