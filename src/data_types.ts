/*

1)TypeScript has 4 groups of data types:

    1)Primitive Types → string, number, boolean, null, undefined, bigint, symbol

    2)Reference Types → Array, Tuple, Object, Function

    3)Special Types → any, unknown, void, never

    4)User-Defined Types(custom types) → Type Alias, Interface, Union, Intersection, Enum

2)Type-check
    1)Use typeof for primitives types (string, number,boolean etc.).
        let k = 'karthik'
        console.log(typeOf k)

    2)use Array.isarray() for Array method
        let k = []
        console.log(Array.isArray(k))

    3)Use instanceof for classes and Object
        1)let k = new Object()
            console.log(k instanceof Object)

        2)const data = class Person{}
            console.log(data instanceof Person)

    4)Use type guards for custom types (type, interface).

*/