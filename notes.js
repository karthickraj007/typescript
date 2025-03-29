/*
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
        1) try → Write the code that might cause an error.
        2)catch → If an error happens in try, the catch block runs and handles the error.

    5)return 
        1)Stops Execution immediately and Returns a Value

    6)throw 
        1)Stops Execution immediately and throws an error which must be handled with try...catch. 
        2)Otherwise the program crashes.

    7)npm
        1)npm update -> patch and minior version only 
        2)npm upgrade -> all version(patch, minior, major)
*/