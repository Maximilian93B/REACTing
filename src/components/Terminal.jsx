import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import  {skillsDirectories, welcomeMessage} from '../utils/TerminalData';

const TerminalWindow = styled.div`
background-color: #000; 
color: #00ff00; 
padding: 20px;
font-family: 'Press Start 2P', monospace; 
font-size: 16px; 
border: 2px solid #00ff00; 
height: 500px; 
width: 80%; 
margin: auto; // Center the terminal window
overflow-y: auto; // Allow vertical scrolling for overflow content
white-space: pre-wrap; 


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
  line-height: 1.;
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
    const terminalRef = useRef(null); // Ref for terminal 
    const inputRef = useRef(null); // Ref for input field

    const [history, setHistory] = useState([welcomeMessage])

    // Focus on the input field when component mounts 
    useEffect(() => {
      // Auto scroll for terminal effect 
      if(terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
      // Auto fucs input field
    if(inputRef.current){
      inputRef.current.focus();
    } 
    // Include History in array to trigger chnge effect
  },[history]);

        
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
} 
// If command is 'ls'  list the contents of current directory 
  else if(command === 'ls') {
    // Get the contents of the current directory from the skillsDirectories object  ( From terminalData.js ) 
    const currentDirContents = skillsDirectories.root[currentDirectory];
      // I ran into issues with nesting so this is the work around for now 
     // Check if currentDirContents is an object to avoid errors
    // 
    if(currentDirContents && typeof currentDirContents === 'object') {
      // Filter out keys--> description , help, content 
      const listings = Object.keys(currentDirContents)
        .filter(key => key !== 'description' && key !== 'help' && key !== 'content') // Exclude special keys
        .join(' '); // join the Dir names with a space 
        // If listings are present then display ,if not notify use r
      output = listings || 'No directories found.';
  } else {
    output = 'No directories found.';
  }
}
 // If  command is cd .. navigate back to the root directory
  else if(command === 'cd ..') {
      setCurrentDirectory('root');
      output = 'Returned to root directory';
  } 
  // If command starts with cd, try and change the directory 
  else if (command.startsWith ('cd ')) {
    // Target the directory from the the command
    const target = command.split(' ')[1];
    // Check if target exsits in the skillsDirectories 
    if(target in skillsDirectories.root) {
    setCurrentDirectory(target);

    const targetDir = skillsDirectories.root[target];
    output = 'description' in targetDir ? targetDir.description : 'You are now in ' + target;
    if ('content' in targetDir) {
        output = targetDir.content;
    }
  } else {
  // If Dir does not exsits, tell user 
      output = `Directory ${target} not found.`;
    } 
} 
  // If command is help, display help info from skillDirectories
  else if (command === 'help') {
    output = skillsDirectories.root[currentDirectory]?.help || skillsDirectories.root.help;
  } 
  
  // If unknown Command 
  else {
  output = `unknown command: ${command}`;
  }

  // Update the history state when the command is entered 
  // This will allow history of commands and outputs to be displayed in the terminal
  setHistory(prevHistory => [...prevHistory, `> ${command}`, output].filter(Boolean)); // filter(Boolean) removes empty strings if output is empty
};


return (
<TerminalWindow ref= {terminalRef}>
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