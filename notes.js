/*

    1)typescript:
        1)JavaScript = the actual programming language that browsers and Node.js understand.
        2)TypeScript = JavaScript + types (extra rules for better coding).

    1)setup typescript configuration
        1)install typescript
            npm i typescript
        2)typescript version
            tsc -v
        3)create a tsconfig.json ->configuration file for the TypeScript compiler
            tsc --init
        4)run the typescript file
            1)single file
                tsc filename
            2)mulitiple files
                tsc
        5)watch mode
            tsc --watch

    2)export and import
        1)When you use export, TypeScript understands that the file is a module and keeps its variables/functions separate from other files.
        2)When you use import, TypeScript knows exactly where the variable/function is coming from.


    3)scope
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
        It tells the TypeScript compiler which built-in JavaScript libraries and APIs it should include during type-checking.

    17)decorator
        A decorator is just a special function that can add extra information or behavior to a class, method, property, or parameter.

    18) STACK MEMORY                     HEAP MEMORY
        a      → 10                    (nothing special)
        b      → 20                    (nothing special)
        obj    → 101  ──▶              { name: "Karthik" }
        arr    → 202  ──▶              [1, 2, 3, 4]

*/