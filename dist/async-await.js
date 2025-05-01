"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function BookTicket(amount) {
    return new Promise((reslove, reject) => {
        if (amount) {
            setTimeout(() => {
                reslove('ticket is booked');
            }, 5000);
        }
        else {
            reject('ticket booking is failed');
        }
    });
}
function customer(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("start");
            const result = yield BookTicket(amount);
            console.log(result);
            console.log("end");
            return result;
        }
        catch (err) {
            console.log(err);
        }
    });
}
customer(100).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
