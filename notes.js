/*

    1)typescript:
        1)JavaScript = the actual programming language that browsers and Node.js understand.
        2)TypeScript = JavaScript + types (extra rules for better coding).

    1)setup typescript configuration
        1)install typescript
            npm i typescript
        2)typescript version
            npx tsc -v -> both local and global
            tsc - v -> only global
        3)create a tsconfig.json ->configuration file for the TypeScript compiler
            tsc --init
        4)run the typescript file
            1)single file
                npx tsc filename
            2)mulitiple files
                npx tsc
        5)watch mode
            npx tsc --watch

    2)Local TypeScript
        node_modules/
        .bin/
            tsc   ← local TypeScript

    3)Global TypeScript
        1)PATH = list of folders your computer checks for commands
        2)PATH is stored in Environment Variables
        2)Your OS searches in PATH folders.
            path -> C:\Users\<you>\AppData\Roaming\npm\tsc

    2)export and import
        1)When you use export, TypeScript understands that the file is a module and keeps its variables/functions separate from other files.
        2)When you use import, TypeScript knows exactly where the variable/function is coming from.


    3)scope -> it determines the accessibility (visibility) of variables.
        Scope	               Accessible Where?
        Global	               Anywhere in the file (or other files with var)
        Function	           Only inside the function
        Block	               Only inside {} (for let and const)
        Module	               Only in the file unless exported and imported


    4)try catch Work?
        1)try → Write the code that might cause an error.
        2)catch → If an error happens in try, the catch block runs and handles the error.

    5)return 
        1)Stops Execution immediately and Returns a Value

    6)throw 
        1)Stops Execution immediately and throws an error which must be handled with try...catch. 
        2)Otherwise the program crashes.

    7)npm
        1)npm update -> patch and minior version only 
        2)npm upgrade -> all version(patch, minior, major)

    8)difference
        1)Structure → it is blue print but does not execute anything.
        2)Implementation → Provides actual working code that does something.

    9)nodejs
        Node.js is a tool that allow you run JavaScript outside the browser

    10)What is Node.js made of?
          Part	                                Role
        V8 Engine	            A JavaScript engine is a program that reads and runs JavaScript code.
        C++ Code	            Handles low-level tasks that JavaScript cannot do directly(like file system, networking, operating system)
        Libuv	                it is a C/C++ library to handle asynchronous operations
        Node API	            All built-in modules called nodeApi(like fs, http, path, etc.)

    11)server
        A server is a computer that provides data to clients over a network

    12)difference between software and tool
        1)Software(General Purpose)
           1)They help you do many tasks
                Example: VS Code (lets you write code, debug, install extensions)
            2)Microsoft Word → for writing documents

        2)Tool(Developer-focused):
            1)It helps you do one special task
                Example:In VS Code, the Terminal is a tool that lets you run commands
            2)Git is a tool inside VS Code to manage your code changes

    13)Types of module
        1)CommonJS (CJS) – Old and Default
            Uses require() and module.exports.

        2)ES Modules (ESM) – Modern Standard
            Uses import and export.

    14)"module": "commonjs"
        Which import/export style should I use when converting TypeScript to JavaScript?

    15)What is ECMAScript?
        1)ECMAScript (ES) is the standard or rules for JavaScript.
        2)Each year, new versions are released: ES5, ES6 (2015), ES2016, ..., ES2020, ES2021, etc.
        3)Think of ECMAScript like "the rulebook" that JavaScript follows.

    16)lib
        The asynchronous engine inside Node.js that runs the event loop, network I/O, timers, and thread pool.

    17)decorator
        A decorator is just a special function that can add extra information or behavior to a class, method, property, or parameter.

    18) STACK MEMORY                     HEAP MEMORY
        a      → 10                    (nothing special)
        b      → 20                    (nothing special)
        obj    → 101  ──▶              101 -> { name: "Karthik" }
        arr    → 202  ──▶              202 -> [1, 2, 3, 4]

    19)what is Api
        1)“API” means a set of functions given by someone else
        2)You don’t need to know how it works
        3)You don’t need to know internal code
        4)Browser gives ready-made functions (APIs):
            1)DOM API
            2)Fetch API
        5)Node.js gives ready-made functions (APIs):
            1)fs
            2)http

    20).dotenv -> used to load secret values from a .env file
        1)reads your .env file
        2)parses the variables
        3)stores them into process.env
        4)it works only root folder

    21)Hoisting
        it is initializes memory for variables and functions before executing code.

    22)Types of scopes
        1)global scope
            1)creates Execution Context 
            2)it contains both Variable Environment + Lexical Environment
        2)Function Scope
            1)creates Execution Context 
            2)it contains both Variable Environment + Lexical Environment

        3)Block Scope
            1)does NOT create Execution Context
            2)creates only a Lexical Environment

    22)execution Context
        1)it is an environment where JavaScript runs code
        2)Types of Execution Context
            1)Global Execution Context
                1)global variables
                2)global functions
                3)window Object

            2)Function Execution Context
                function arguments
                local variables
                local functions

        3)execution Context has two things:
            1)MEMORY CREATION PHASE
                1)Variables → create and set to undefined
                2)Functions → full function stored
                3)link to window object
                4)Scope chain prepared
                5)Lexical Environment -> it Stores the variables and functions of the current scope and also a point to its parent scope
                6)Scope -> A rule that decides which variables and functions are accessible in the current scope.
            2)EXECUTION PHASE
                Now JS goes line by line and executes the code.
                1)Assigns values
                2)Runs functions
                3)Evaluates expressions
                4)Controls flow (if/for/etc)

    23)closure
        A closure is a function that remembers and can access variables from its outer scope, even after the outer function has finished execution.

*/