const skillsDirectories = { 
    root: {
        help: "You can navigate to skills by typing 'cd [skill name]'. Available skills: nodejs, react, javascript.",
        nodejs:{
            description: 'Skills in React: Hooks, Context API, React Router.',
            back: 'Use  "cd.." to go back.'
        },
        react: {
            description: 'Skills in React: Hooks, Context API, React Router.',
            back: 'Use "cd.." to go back.'
        },
        javascript: {
            description : "Skills in JavaScript:ES6+, Async/Await, DOM Manipulation.",
            back: 'Use "cd.." to go back.'
        }
    }
};


export default skillsDirectories;