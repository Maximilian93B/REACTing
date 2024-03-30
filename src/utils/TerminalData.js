 export const welcomeMessage = `
 ____________________
/                    \
|                    
|     'help':)      
\____________________/
         !  !
         !  !
         L_ !
        / _)!
       / /__L
 _____/ (____)
        (____)
 _____  (____)
      \_(____)
         !  !
         !  !
         \__/
         
`;




export const skillsDirectories = {
  root: {
      help: " Welcome to the CLI, If you are new to using a CLI here are the available Commands: 'help', 'cd ..' , 'ls'.",
      react_hooks: {
        description: "React Hooks let us tap into React features for state and effects. We use them here to manage what you see and do.",
        useState: {
          description: 'useState lets us remember things like what you’ve typed or which page you’re on. Example: We use useState to keep track of your current command.',
          back: 'Use "cd .." to go back.'
        },
        useEffect: {
          description: 'useEffect is like a wizard that performs magic after something changes. Example: We use useEffect to focus on the input field after you type a command.',
          back: 'Use "cd .." to go back.'
        },
        useRef: {
          description: 'useRef is a magic box that can hold anything and doesn’t change when the component re-renders. Example: We use useRef to keep track of the input field, so we can always make sure it’s ready for your next command.',
          back: 'Use "cd .." to go back.'
        },
        back: 'Use "cd .." to explore other concepts.'
      },
      styled_components: {
        description: "Styled-components let us write CSS in our JavaScript for styling. This keeps our styles close to our components.",
        example: {
          description: 'Example: We style the terminal window with styled-components to give it that cool, retro look with a black background and green text.',
          back: 'Use "cd .." to go back.'
        },
        back: 'Use "cd .." to explore other concepts.'
      },
      state_management: {
        description: "State management helps us remember things like what commands you’ve entered.",
        example: {
          description: 'Example: When you type "cd react_hooks", we use state management to remember you’re "inside" react_hooks now. That way, we know which options to show you next!',
          back: 'Use "cd .." to go back.'
        },
        back: 'Use "cd .." to explore other concepts.'
      },
      command_processing: {
        description: "Command processing is how we understand and react to your commands.",
        parsing: {
          description: 'Parsing means breaking down your command into pieces we understand. Example: When you type "cd styled_components", we figure out "cd" means change directory and "styled_components" is where you want to go.',
          back: 'Use "cd .." to go back.'
        },
        execution: {
          description: 'Execution is doing what your command says. Example: Once we know you want to "cd" into "styled_components", we show you information about styled-components!',
          back: 'Use "cd .." to go back.'
        },
        back: 'Use "cd .." to explore other concepts.'
      }
    }
  };
  

