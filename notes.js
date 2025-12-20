/*

    1)typescript:
        1)JavaScript = the actual programming language that browsers and Node.js understand.
        2)TypeScript = JavaScript + types (extra rules for better coding).

    1)setup typescript configuration
        1)install typescript
            npm i typescript
        2)typescript version
            npx tsc -v -> local
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
        1)A decorator is a function that attach to a class, method, or property.
        It can:
            Modify behavior
            Add metadata
            Wrap or replace functions
            Log or track things

    18)metadata
        1)Extra information about your code that decorators attach
        2)Decorators use metadata to tell frameworks how to handle your code

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

    22)Types of scopes -> it decides where variables are accessible.
        1)global scope
            Variables accessible everywhere in your code 

        2)Function Scope
           Variables that exist only within a function (var is function-scoped)

        3)Block Scope
           Variables that exist only within curly braces {} (let/const only)

        4)module scope
            Isolated scope where nothing is shared unless explicitly exported

        5)Lexical Scope ->Lexical Scope enables access
            1)can access variables based on where it is written in the code.
            1)it Allows inner function to access outer scope variable, but outer scopes cannot access inner scopes.
            2)lexical scope to build the scope hierarchy.

        6)Scope Chain
           1)Scope chain is the path for search variable

    22)execution Context
        1)execution context is like a "workspace" where your code runs
        2)each function needs its own memory space → this memory space is Function Execution Context (FEC).
        3)When a function is called, only then JS creates a Function Execution Context for that function.

    23)Types of Execution Context
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
            2)module variables and module function 

    24)execution Context has two things:
        1)MEMORY CREATION PHASE
            1.Create arguments: {a: undefined, b: undefined}
            2.Hoist variables: x = undefined
            3.Hoist function declarations and class
            4.Setup scope and scope chain
            5.Set this value
        2)EXECUTION PHASE
            Now JS goes line by line and executes the code.
            1)Assigns values
            2)Runs functions
            3)Evaluates expressions
            4)Controls flow (if/for/etc)
            5)Create CLOSURES when needed

    23)closure ->Closure enables memory
        1Closure happens when a function remembers variables from its outer scope even after that outer scope has finished executing.
        2)The function creates the closure
        3)Closure is the memory that function keeps

    24)diff between tsc and ts-node
        Feature	             tsc	                            ts-node
        1)Purpose	         Compile TS → JS	                Run TS files directly
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
            4)type of import
                1)static -> run sync
                    require()
                2)dyanmic -> run async
                    if (condition) {
                        const auth = require('./auth.js');
                    }

        2)ES Module (ESM)
            1)syntax -> import / export -> static import 
            2)Node.js + modern browsers
            3)File extension -> .mjs or "type": "module" in package.json
            4)type of import
                1)static -> run sync
                    import {person} from './index.js'
                2)dyanmic -> run async
                    await import('./math.js') -> return promise

    27)binary -> 0 and 1
        1)Decimal = Human language
        2)Binary = Computer language
        3)Hex = Shorthand for computer language

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

    31)callstack ->Last-In-First-Out
        1)Data structure that manages execution contexts.
        2)It tracks:
            1)Which Execution Context is currently running
            2)which function is running now(via its execution context)
            3)where to return after finishing
            4)which function called which, and in what hierarchy

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


    40)JavaScript Memory Model
        RAM Layout:
        ─────────────────────────────────────
        │          STACK MEMORY             │ ← Grows downward
        │                                   │
        │ ┌───────────────────────────────┐ │
        │ │          CALL STACK           │ │
        │ │                               │ │
        │ │  ┌─────────────────────────┐  │ │
        │ │  │ Function EC 2           │  │ │
        │ │  ├─────────────────────────┤  │ │
        │ │  │ Function EC 1           │  │ │
        │ │  ├─────────────────────────┤  │ │
        │ │  │ Global EC               │  │ │
        │ │  └─────────────────────────┘  │ │
        │ │                               │ │
        │ └───────────────────────────────┘ │
        │                                   │
        │ ──────────────────────────────────│ ← Boundary
        │                                   │
        │          HEAP MEMORY              │ ← Grows upward  
        │                                   │
        │ ┌───────────────────────────────┐ │
        │ │ Objects: {name: "John"}      │ │
        │ │ Arrays: [1, 2, 3]            │ │
        │ │ Functions: {code...}         │ │
        │ │ Closures                     │ │
        │ └───────────────────────────────┘ │
        │                                   │
        │          CODE SEGMENT             │
        │ ┌───────────────────────────────┐ │
        │ │ Executable JavaScript code    │ │
        │ └───────────────────────────────┘ │
        ─────────────────────────────────────

    41)npm =>node package manager
        1)npm is primarily a package manager. Its main job is to install packages (npm install).

    42)npx -> node package execute
        1)npx is a package runner. Its main job is to execute packages.

    43)prototype
        1)Prototype is a special hidden object that stores shared properties and methods for other objects.
        2)templates -> prototype exists
            1)class
            2)function
        3)Instance / Object / Array → does NOT have .prototype
        4)Instance → has __proto__ pointing to template’s .prototype

    44)this -> keyword
        1)reference to the current object
        2)this depends on how a function is called.
        3)this allows the same function to work with DIFFERENT objects 
        4)Call style	this
            obj.fn()	obj
            new Fn()	new empty object {}
            fn()	    window (non-strict mode) undefined (strict mode)

    45)bind
        1)bind() is a function that forces this keyword to point to a specific object.
        2)creates a new function where this is permanently fixed to the object you pass.

    46)call
        Runs the function immediately and sets this temporarily.

    47)apply
        runs immediately, but arguments are passed as an array.

    48)contex
        Context is the current object that the function is working with (this points to that object).

    49)memory management
        1)Local variables are destroyed after function execution.
        2)Properties on this live as long as the object exists.
        3)object is no longer referenced anywhere, JS garbage collector frees memory for that object and its properties.

    50)spread operator
        1)it Expands an array/object into individual elements
        2)spread operator works with any iterable.
        3)ex -> string object array

    51)rest operator
        it Collects multiple arguments into an array

    52)ts-node
        it is tool to execute ts files directly

    53)js execution order
        1. JS sees fn()
        2. fn() is pushed to Call Stack
        3. V8 creates Execution Context for that function
        4. Memory creation phase happens (Hoisting + variables etc.)
        5. Execution phase starts (code runs)
        6. Function finishes → EC removed from Call Stack

    54)What is for?
        1)for is a control-flow keyword in JavaScript.
        2)It tells JavaScript:
            Repeat this block of code again and again until the condition becomes false.

    55)what is block
        A block is just code written inside curly braces { }.

    56)Order of steps in JS engine
        1)Load Time
            1)Memory Creation Phase / Variable Environment setup

        2)Definition Time
            1)Initialization / Execution Time

    57)function
        1)A function is just a special type of object.
        2)Function → object + callable behavior
        3)Types of function
            1)Factory Function
                A normal function that creates and returns an object.

            2)Constructor Function
                A special function that is used with new keyword to create an object

            3)class is syntactic sugar for constructor functions

    58)What is an instance?
        1)instace is a object created from a “template” 
        2)classes and functions are templates.

    59)Webpack
        1)Webpack is a tool that combine mutiple files to one file.(bundle)
        2)It reads your project files and produces the bundle.
        3)It handles:
            Combining files
            Minifying
            Optimizing
            Removing unused code
            Processing CSS, images, etc.

    60)Object.defineProperty()
        1)it is a JavaScript method used to define a new property or modify an existing property
        2)it allows you to control the property’s behavior.

    61)placeholder
        1)Placeholder is a temporary name that will be replaced later
        2)Ex -> <h1 placeholder="hello"> </h1>

    62)Inheritance
        1)One object can use properties or methods of another object
        2)The object doesn’t have the property itself, but it can still access it through the prototype chain.

    63)extends vs implements
        1)A class uses extends only to inherit another class, 
        2)A class uses implements to follow an interface.


*/