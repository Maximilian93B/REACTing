import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import  {skillsDirectories, welcomeMessage} from '../utils/TerminalData';

const TerminalWindow = styled.div`
background-color: #000;
color: #00ff00;
padding: 20px;
font-family: 'Press Start 2P', monospace;
font-size: 12px;
border: 2px solid #00ff00;
height: 80%;
width: 60%;
margin: auto;
overflow-y: auto;
@media (max-width: 768px) {
    width: 80%; // Increase width for medium devices
    height: auto; // Adjust height based on content
    padding: 15px; // Slightly reduce padding
  }

  @media (max-width: 480px) {
    width: 95%; // Make it wider on small screens
    padding: 10px; // Reduce padding further
    font-size: 10px; // Decrease font size for space
  }
 
`;

// Command line stlyes 
const CommandLine = styled.div`
display: flex;
align-items: center;
@media (max-width: 480px) {
    flex-direction: column; // Stack elements vertically if necessary
    align-items: flex-start; // Align items to the start
  }
`;

// Spacing for CLI prefix 
const Prefix = styled.span`
  margin-right: 8px;
`;

const Root = styled.span`
color: red;
`;

// Input Styles 
const Input = styled.input`
background: none;
border: none;
color: #00ff00;
font-family: inherit;
width: 100%;
&:focus {
  outline: none;
}

@media (max-width: 480px) {
    font-size: 10px; // Slightly reduce font size for small screens
  }
`;

const CommandLineOutput = styled.div`
  margin-bottom: 16px; // Adjust the space between command lines as needed
  line-height: 1.5;
  white-space: pre-wrap; // Allows text to wrap and preserves formatting
  word-break: break-word; // Ensures long words don't overflow


  @media (max-width: 480px) {
    margin-bottom: 8px; // Reduce space between command lines
    line-height: 1.2; // Adjust line height for readability
  }
  `;


// CLI Logic 
// useState for user input 
// State to keep track of command history
// currentDirectory = current location in the terminal 
// setCurrentDirectory = is a state setter function that updates the currentDirectory
// skillsDirectories = object imported from utils/TerminalData.js
//setHistory = updates state to track history of commands + outputs entered --> will use to display to users

const CliInterface = () => {
    // Set states 
    const [input,setInput] = useState('');
    const [currentDirectory, setCurrentDirectory] = useState('root');
    const inputRef = useRef(null);

    const [history, setHistory] = useState([welcomeMessage])

    // Focus on the input field when component mounts 
    useEffect(() => {
        inputRef.current.focus();
    }, [history]);

        
    //Handle key down events in input field 
    const handleKeyDown = (e) => {
        // Check if key pressed is Enter
        if(e.key === 'Enter') {
            //Process the current input as command
            processCommand(input);
            //Clear input fielld 
            setInput('');
        }
    };


const processCommand = (command) => {
    //Hold the response to the users commands
    let output; 
    // if command is = to clear 
    if(command === 'clear') {
        // Clear the terminal 
        setHistory([]);
        return; //
    } else if(command === 'ls') {
        // Check and see if we are in root directory
        if(currentDirectory === 'root') {
            // List all directories 
            output = Object.keys(skillsDirectories).join('');
        } else {
            // list directories or commands in current directory
            const directories = skillsDirectories[currentDirectory] ? Object.keys(skillsDirectories[currentDirectory]) : [];
            output = directories.length > 0 ? directories.join(' ') : 'No directories found';
        }
    }   // Navigate to root directory when user inputs 'cd..' 
            else if(command === 'cd ..') {
            // Check if current directory is not root
            if(currentDirectory !== 'root') {
                // if not root , set directory back to root
                setCurrentDirectory('root');
                output = 'Returned to root directory';
            } else {
                //  if in root print output 
                output = 'You are already at the root directory';
            }
            // Navigating to a specific directory with  `cd [directory] `
        } else if (command.startsWith('cd')) {
            // Extract the directory name from the command 
            const directory = command.split(' ')[1]; 
            // Check if the directory exists from current location 
            if (skillsDirectories[currentDirectory][directory]) {
                // If the directory exists , update state and set description as output
                setCurrentDirectory(directory);
                output = skillsDirectories[currentDirectory][directory].description;
            } else {
                // If the directory does not exist , print output 
                output = `Directory ${directory} not found.`;
            }
        } else {
            // Handle commands 
            // case = command 
            // output = command exe
            switch(command) {
            case 'help':
                output = skillsDirectories[currentDirectory].help || 'No additional help available.';
                    break;
                    // Add other commands here 
                    default:
                    // If unknown comand then print output 
                    output = `Unknown command: ${command}`;
            }
        }

        // Update the history state when the command is entered 
        // This will allow history of commands and outputs to be displayed in the terminal
        setHistory(prevHistory => [...prevHistory, `> ${command}`, output].filter(Boolean)); // filter(Boolean) removes empty strings if output is empty
        };


    return (
        <TerminalWindow>
            {/*Map over history state to display previous commands and output*/}
            {history.map((line, index) => (
            <CommandLineOutput key={index}>{line}</CommandLineOutput> 
        ))}
            <CommandLine>
            <Prefix>
            <Root>root</Root>@MDBdev{'>'}
            </Prefix> {/* Display a static prefix */}
                <Input 
                // Attach ref for focus
                ref = {inputRef}
                // Control component with current input  
                value = {input} 
                // update input state on change
                onChange={(e) => setInput(e.target.value)}
                // Handle Enter Key for exe 
                onKeyDown = {handleKeyDown} 
                autoComplete= "off"
                />
            </CommandLine>
        </TerminalWindow>
    );
};

export default CliInterface; 