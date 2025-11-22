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


    3)scope -> it determines the visibility of variables.
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
            Variables accessible everywhere in your code 

        2)Function Scope
           Variables that exist only within a function (var is function-scoped)

        3)Block Scope
           Variables that exist only within curly braces {} (let/const only)

        4)module scope
            Isolated scope where nothing is shared unless explicitly exported

        5)Lexical Scope
             Inner functions can access outer function variables (closure)
            
        6)Scope Chain
            javaScript's lookup mechanism that searches inner to outer scopes

    22)execution Context
        1)execution context is like a "workspace" where your code runs
        2)Types of Execution Context
            1)Global Execution Context
                1)global variables
                2)global functions
                3)window Object

            2)Function Execution Context
                1)function arguments
                2)local variables
                3)local functions

            3)Module Execution Context
                1)Created when module is imported
                2)module variables

        3)execution Context has two things:
            1)MEMORY CREATION PHASE
               1.Create arguments: {a: undefined, b: undefined}
               2.Hoist variables: x = undefined
               3.Hoist function declarations
               4.Setup scope chain
               5.Set this value
            2)EXECUTION PHASE
                Now JS goes line by line and executes the code.
                1)Assigns values
                2)Runs functions
                3)Evaluates expressions
                4)Controls flow (if/for/etc)

    23)closure
        A closure is a function that remembers and can access variables from its outer scope, even after the outer function has finished execution.

    24)diff between tsc and ts-node
        Feature	             tsc	                            ts-node
        1)Purpose	         Compile TS → JS	                Run TS directly
        2)JS Output	         Creates .js files on disk	        No files, JS in memory
        3)Execution	         Does not run code	                Runs TS immediately
        4)Type Checking	     Full type checking	                Default yes, can skip with --transpile-only
        5)Speed	             Slower(compiles whole project)	    Faster (compiles only needed files)
        6)Compilation Style  Ahead-of-time (AOT)                Just-in-time (JIT)

    25)Type Definition File (.d.ts)
        A file that tells TypeScript the types of functions, variables, or modules

    26)Module System
        1)CommonJS (CJS)
            1)Syntax -> require() / module.exports -> static import 
            2)Usage -> Node.js only
            3)File extension -> .js (by default in Node.js)

        2)ES Module (ESM)
            1)syntax -> import / export -> static import 
            2)Node.js + modern browsers
            3)File extension -> .mjs or "type": "module" in package.json

    27)binary -> 0 and 1
        1)Decimal = Human language
        2)Binary = Computer language
        3)Hex = Shorthand for computer language


    28)Dynamic Import
        1)The module is loaded at runtime,
        2)Dynamic import is async because it returns a Promise.
            const math = await import('./math.js');

    29)UTF-8
        1)UTF-8 stands for Unicode Transformation Format – 8 bit.
        2)It’s a way to store text (characters) as bytes so computers can understand them.

    30)imported variables
        1)imported variables are read-only references (live bindings).
        2)You cannot reassign an imported binding directly.
        3)exported variable is mutable (like an object), you can change its property, but not the variable itself:
        3)Ex:
            import { m } from './main.js';
            m = 5; //Error in ESM

    31)callstack
        1)The call stack is a data structure that tracks function calls which use stack memory
        2)The SECURITY LOG that tracks who enters/leaves
        3)Call Stack contains REFERENCES to FEC memory locations

    32)diff between Variable Environment vs Lexical Environment
        1)Variable Environment
            1)Stores -> var declarations and function declarations.
            2)Ex -> var x = 10;  function hello() { console.log("Hello")}

        2)Lexical Environment
            1)Stores let, const, class, module imports, and block-scoped declarations.
            2)let y = 20; const z = 30;

    33)What is an Environment
        An environment is a "storage space" where JavaScript keeps track of variables and functions in a specific scope.

    34)What is "Isolated"?
        1)Isolated means "completely separate and protected"
        2)each module lives in its own private room with no windows or doors to other rooms.

    35)GEC in Memory
        GLOBAL EXECUTION CONTEXT {
            Variable Environment: {
                globalVar: "I'm global",
                calculate: <function reference>,
                // Other global variables...
            },
            Scope Chain: [GEC],
            this: window (in browsers)
        }

    36)FEC in Memory
        FUNCTION EXECUTION CONTEXT (calculate) {
            Variable Environment: {
                Arguments: {0: 5, 1: 3, length: 2},
                a: 5,
                b: 3,
                result: 8,                    // ← After execution
                message: "Sum: 8",            // ← After execution
            },
            Scope Chain: [FEC(calculate), GEC],
            this: window (in browsers)
        }

    37)Stack Memory
        Purpose: Store execution contexts & primitive values
        Speed: Very fast (just move stack pointer)
        Management: Automatic (LIFO)
        Size: Limited (usually 1-8MB)
        Lifetime: Function scope

    38)Heap Memory
        Purpose: Store objects, functions, arrays
        Speed: Slower (dynamic allocation)
        Management: Garbage collection
        Size: Large (most available memory)
        Lifetime: Until no references

    39)Memory Map Visualization:
        STACK MEMORY                               HEAP MEMORY

        Address     Value                      Address     Value
        ─────────   ────────────────────       ─────────   ──────────────────
        0x7ffe1000  [GEC]                      0x12345000  {age:25, name:"John"}
        0x7ffe1004  age: 25                    0x12345040  [95, 87, 92]  
        0x7ffe1008  name: "John"               0x12345080  {value: 50}
        0x7ffe100c  person: →0x12345000
        0x7ffe1010  scores: →0x12345040

        --------------------------------
        0x7ffe2000  [FEC calculate()]          (Garbage Collection manages this)
        0x7ffe2004  result: 100
        0x7ffe2008  temp: →0x12345080

        --------------------------------

        0x7ffe2001  [FEC student()]          (Garbage Collection manages this)
        0x7ffe2005  result: 100
        0x7ffe2007  temp: →0x12345080

*/