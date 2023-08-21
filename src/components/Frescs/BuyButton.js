import { Button } from "@mui/material";
import React, { useState } from "react";

function BuyButton({ psbtHex, isOff }) {

    const [psbtResult, setPsbtResult] = useState("");

    const handleBuyClick = async () => {
        try {
            const result = await window.unisat.signPsbt(psbtHex);
            setPsbtResult(result);
        } catch (e) {
            setPsbtResult(e.message);
        }
    };

    return (
        <div>
            <Button disabled={isOff} onClick={handleBuyClick}
                sx={{
                    backgroundColor: '#8bc34a', // setting bg to orange regardless of the disabled state
                    color: '#333',
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    '&:hover': {
                        backgroundColor: '#eee',
                        color: '#8bc34a',
                    },
                    '&:disabled': {
                        backgroundColor: '#f44336',
                        color: '#eee',
                    },
                }}
            >
                {isOff ? 'SOLD OUT' : 'BUY'}
            </Button>

        </div>
    );
}

export default BuyButton;
