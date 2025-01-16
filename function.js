"use strict";
//hàm không return: void
//nếu hàm có trả về giá trị thì phải khai báo kiểu dữ liệu mà nó trả về
let testFunction = (a, b = 5) => {
    console.log(`${a + b}`);
};
testFunction(1, 8);
