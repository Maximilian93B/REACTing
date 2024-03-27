import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import skillsDirectories from '../utils/TerminalData';

// Styles for Terminal 

const TerminalWindow = styled.div`
background-color: #000;
color: #00ff00;
padding: 20px;
font-family: 'Press Start 2P', monospace;
font-size: 16px;
border: 2px solid #00ff00;
min-height: 300px;
width: 80%;
margin: auto;
overflow-y: auto;
`;


// Command line stlyes 

const CommandLine = styled.div`
display: flex;
align-items: center;
`;

const Prefix = styled.span`
  margin-right: 8px;
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
`;

const CommandLineOutput = styled.div`
  margin-bottom: 8px; // Adjust the space between command lines as needed
`;


// CLI Logic 
// useState for user input 
// State to keep track of command history
// Ref for focus input ?? 

const CliInterface = () => {
    const [input,setInput] = useState('');
    const [history, setHistory] = useState(['Welcome to my CLI. Type "help" for..well help'])
    const [currentDirectory, setCurrentDirectory] = useState('root');
    const inputRef = useRef(null);

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
   
    let output; 


    if(command === 'cd..') {
        // Navigate back to root if not already there 
        if(currentDirectory !== 'root') {
            setCurrentDirectory('root');
            output = 'You are already at the root directory';
        } else {
            output = 'You are already at the root directory';
        }
    } else if (command.startsWith('cd')) {
        const directory = command.spit(' ')[1];
        // Check if the directory exists from current location 
        if (skillsDirectories[currentDirectory][directory]) {
            setCurrentDirectory(directory);
            output = skillsDirectories[currentDirectory][directory].description;
        } else {
            output = `Directory ${directory} not found.`;
        }
    } else {
        // Handle commands 
        switch(command) {
        case 'help':
            output = skillsDirectories[currentDirectory.help || 'We can only help so much...']
             break;
             // Add other commands here 
             default:
                output = `Unknown command: ${command}`;
        }
    }

    setHistory(prevHistory => [...prevHistory, `> ${command}`, output]);
};


    return (
        <TerminalWindow>
            {/*Map over history state to display previous commands and output*/}
            {history.map((line, index) => (
            <CommandLineOutput key={index}>{line}</CommandLineOutput> 
        ))}
            <CommandLine>
            <Prefix>{'>'}</Prefix> {/* Display a static prefix */}
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