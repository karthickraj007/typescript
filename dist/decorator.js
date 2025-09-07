"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function MyDecorator(target) {
    console.log("Decorator runs on:", target);
}
let MyClass = class MyClass {
    constructor() {
        this.name = '';
    }
    getUser(id) {
        return `User ID is ${id}`;
    }
};
__decorate([
    Get(':id') //method decorator
    ,
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], MyClass.prototype, "getUser", null);
__decorate([
    LogProperty //property decorator
    ,
    __metadata("design:type", String)
], MyClass.prototype, "name", void 0);
MyClass = __decorate([
    MyDecorator //class decorator
], MyClass);
function Get(arg0) {
    throw new Error("Function not implemented.");
}
function Param(arg0) {
    throw new Error("Function not implemented.");
}
function LogProperty //property decorator
(target, propertyKey) {
    throw new Error("Function not implemented.");
}
