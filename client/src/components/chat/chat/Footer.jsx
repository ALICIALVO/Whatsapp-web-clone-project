import { useEffect } from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, AttachFile,Mic,Send } from '@mui/icons-material';
import { uploadFile } from '../../../service/api.mjs';
import PropTypes from 'prop-types';

const Container = styled(Box)`
    height: 5.5rem;
    background: #f0f2f5;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2.5rem;
    & > * {
        margin: 0.5rem;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 1.8rem;
    background-color: #FFFFFF;
    width: calc(94% - 10rem);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 2rem;
    padding-left: 2.5rem;
    font-size: 1.4rem;
    height: 2rem;

`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`;

// const SendMsgIcon = styled(SendIcon)`
// width: calc(94% - 10rem);
// `

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                console.log(response);
                setImage(response.data);
            }
        };
        getImage();
    }, [file, setImage]);

    // Explanation:

// const selectedFile = e.target.files[0];: This line assigns the selected file to a variable named selectedFile.
// if (selectedFile) {: This line checks if a file is selected. If a file is selected, the code inside the if block executes.
// setFile(selectedFile);: This line sets the selected file to the state variable file.
// setValue(selectedFile.name);: This line sets the name of the selected file to the state variable value.

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setValue(selectedFile.name);
        }
    };

    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor='fileInput'>
                <ClipIcon />
            </label>
            <input 
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={onFileChange}
            />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                    
                />
            </Search>
            
            <Send onClick={(e) => sendText(e)} style={{ cursor: 'pointer' }} />
            <Mic />
        </Container>
    );
};

Footer.propTypes = {
    sendText: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    file: PropTypes.object, // file can be null or an object
    setFile: PropTypes.func.isRequired,
    setImage: PropTypes.func.isRequired
};

export default Footer;




//CODE WITHOUT LOCALHOST 28/05/24:
// import { useEffect } from 'react';
// import { Box, InputBase, styled } from '@mui/material';
// import { EmojiEmotionsOutlined, AttachFile,Mic,Send } from '@mui/icons-material';
// import { uploadFile } from '../../../service/api.mjs';
// import PropTypes from 'prop-types';

// const Container = styled(Box)`
//     height: 5.5rem;
//     background: #ededed;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     padding: 0 2.5rem;
//     & > * {
//         margin: 0.5rem;
//         color: #919191;
//     }
// `;

// const Search = styled(Box)`
//     border-radius: 1.8rem;
//     background-color: #FFFFFF;
//     width: calc(94% - 10rem);
// `;

// const InputField = styled(InputBase)`
//     width: 100%;
//     padding: 2rem;
//     padding-left: 2.5rem;
//     font-size: 1.4rem;
//     height: 2rem;
//     width: 100%;
// `;

// const ClipIcon = styled(AttachFile)`
//     transform: rotate(40deg);
// `;

// // const SendMsgIcon = styled(SendIcon)`
// // width: calc(94% - 10rem);
// // `

// const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
//     useEffect(() => {
//         const getImage = async () => {
//             if (file) {
//                 const data = new FormData();
//                 data.append("name", file.name);
//                 data.append("file", file);

//                 let response = await uploadFile(data);
//                 setImage(response.data);
//             }
//         };
//         getImage();
//     }, [file, setImage]);

//     const onFileChange = (e) => {
//         const selectedFile = e.target.files[0];
//         if (selectedFile) {
//             setFile(selectedFile);
//             setValue(selectedFile.name);
//         }
//     };

//     return (
//         <Container>
//             <EmojiEmotionsOutlined />
//             <label htmlFor='fileInput'>
//                 <ClipIcon />
//             </label>
//             <input 
//                 type="file"
//                 id="fileInput"
//                 style={{ display: 'none' }}
//                 onChange={onFileChange}
//             />
//             <Search>
//                 <InputField
//                     placeholder="Type a message"
//                     onChange={(e) => setValue(e.target.value)}
//                     onKeyDown={(e) => sendText(e)}
//                     value={value}
//                 />
//             </Search>
//             <Send onClick={(e) => sendText(e)} style={{ cursor: 'pointer' }} />
//             <Mic />
//         </Container>
//     );
// };

// Footer.propTypes = {
//     sendText: PropTypes.func.isRequired,
//     setValue: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
//     file: PropTypes.object,
//     setFile: PropTypes.func.isRequired,
//     setImage: PropTypes.func.isRequired
// };

// export default Footer;
//=========================================================================================================


// with prop types :


// import { Box, InputBase, styled } from '@mui/material';
// import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';
// import PropTypes from 'prop-types'; // Importing PropTypes to define expected types

// const Container = styled(Box)`
//     height: 5.5rem;
//     background: #ededed;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     padding: 0 1.5rem;
//     & > * {
//         margin: 0.5rem;
//         color: #919191;
//     }
// `;

// const Search = styled(Box)`
//     border-radius: 1.8rem;
//     background-color: #FFFFFF;
//     width: calc(94% - 10rem);
// `;

// const InputField = styled(InputBase)`
//     width: 100%;
//     padding: 2rem;
//     padding-left: 2.5rem;
//     font-size: 1.4rem;
//     height: 2rem;
//     width: 100%;
// `;

// const ClipIcon = styled(AttachFile)`
//     transform: rotate(400deg);
// `;

// const Footer = ({ sendText, setValue, value }) => {
//     return (
//         <Container>
//             <EmojiEmotionsOutlined />
//             <ClipIcon />
//             <Search>
//                 <InputField
//                     placeholder="Type a message"
//                     onChange={(e) => setValue(e.target.value)}
//                     onKeyUp={(e) => sendText(e)}
//                     value={value}
//                 />
//             </Search>
//             <Mic />
//         </Container>
//     );
// };

// // Define PropTypes for Footer component
// Footer.propTypes = {
//     sendText: PropTypes.func.isRequired, // Function, required
//     setValue: PropTypes.func.isRequired, // Function, required
//     value: PropTypes.string.isRequired,  // String, required
// };

// export default Footer;