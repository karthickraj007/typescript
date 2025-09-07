function MyDecorator(target: any) {
  console.log("Decorator runs on:", target);
}

@MyDecorator //class decorator
class MyClass {
    @Get(':id') //method decorator
    getUser(@Param('id') id: string ): string { //parameter decorator
        return `User ID is ${id}`;
    }

    @LogProperty //property decorator
    name: string  = ''
}





function Get(arg0: string): (target: MyClass, propertyKey: "getUser", descriptor: TypedPropertyDescriptor<(id: string) => string>) => void | TypedPropertyDescriptor<(id: string) => string> {
    throw new Error("Function not implemented.");
}

function Param(arg0: string): (target: MyClass, propertyKey: "getUser", parameterIndex: 0) => void {
    throw new Error("Function not implemented.");
}

function LogProperty //property decorator
    (target: MyClass, propertyKey: "name"): void {
        throw new Error("Function not implemented.");
}

