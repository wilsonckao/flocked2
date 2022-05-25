import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import flocked from './flocked.json';

const flockedAddress ="0xAD9S7f3d1A3a22F4959112c9277102A6e9ed5F8C";

const MainMint = ({ accounts, setAccounts }) => {
    const [ mintAmount, setMintAmount ] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                flockedAddress,
                flockedAddress.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
        <Box width="520px">
        <div>    
            <Text fontSize="48px" textShadow="0 5px #000000">Flocked</Text>
            <Text 
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
            >A birdy P2E Game</Text>
        </div>
            {isConnected ? (
                <div>
                   <Flex align="center" justify="center">
                    <Button
                         backgroundColor="#D6517D"
                         borderRadius="5px"
                         boxShadow="0px 2px 2px 1px #0F0F0F"
                         color="white"
                         cursor="pointer"
                         fontFamily="inherit"
                         padding="15px"
                         marginTop="10px"
                         onClick={handleDecrement}
                    >
                      -
                    </Button>
                    <Button
                         backgroundColor="#D6517D"
                         borderRadius="5px"
                         boxShadow="0px 2px 2px 1px #0F0F0F"
                         color="white"
                         cursor="pointer"
                         fontFamily="inherit"
                         padding="15px"
                         marginTop="10px"
                         onClick={handleIncrement}
                    >
                      +
                    </Button>
                                  
               
                    <Button
                         backgroundColor="#D6517D"
                         borderRadius="5px"
                         boxShadow="0px 2px 2px 1px #0F0F0F"
                         color="white"
                         cursor="pointer"
                         fontFamily="inherit"
                         padding="15px"
                         marginTop="10px"
                         onClick={handleMint}
                    >
                      MINT NOW
                    </Button>
                    </Flex>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
            </Box>
        </Flex>
    );
};

export default MainMint; 