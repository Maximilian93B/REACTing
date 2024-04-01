 export const welcomeMessage = `
 ____________________
/                    \
|                    
|     'help';)      
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
    help: `Available Commands:
- 'help': Displays this help message.
- 'cd <directory>': Changes the current directory.
- 'ls': Lists directories or files in the current directory.

Available Directories:
- 'react': Explore React-related concepts and hooks.
- 'skills': A list of my development skills.

Type 'cd' followed by a directory name to explore it. For example, 'cd react'.`,
    react: {
      description: "React Directory: Explore React-related concepts.",
      help: `Inside React Directory. Available sections:
- 'hooks': Learn about React Hooks and their uses.
Type 'cd hooks' to explore React Hooks.`,
      hooks: {
        description: "React Hooks allow you to use state and other React features without writing a class.",
        help: `React Hooks Directory. Available hooks:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
Type 'cd ..' to go back to the React directory.`,
        back: 'Use "cd .." to go back.'
      },
      back: 'Use "cd .." to go back to the root directory.'
    },
    skills: {
      description: "Skills Directory: A list of my development skills.",
      content: `My Development Skills:
- JavaScript
- HTML
- CSS
- Node.js
- Express.js
- MongoDB
- SQL
- GraphQL
- TypeScript
- Docker
- AWS
- Git`,
      back: 'Use "cd .." to go back to the root directory.'
    }
  }
};

