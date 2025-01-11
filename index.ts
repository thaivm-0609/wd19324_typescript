//CÚ PHÁP KHAI BÁO: var tenBien: kieuDuLieu = value; 
//1. Kiểu dữ liệu cơ bản: Number/String/Boolean
//1.1. Number (số)
var a:number = 10;
console.log(a);
//1.2. String (chuỗi)
var chuoi:string = 'day la chuoi';
//1.3. Boolean (true/false)
var isValid:boolean = false;

//2. Kiểu dữ liệu đặc biệt (Object, Array, tuple, union, any)
//2.1. Object
var objectSV: { //khai báo kiểu dữ liệu của từng key trong object
    //key: kiểu dữ liệu của key (KHÔNG ĐƯỢC BỎ)
    //key?: kiểu dữ liệu của key (TÙY CHỌN, ko có cũng đc)
    maSV: string,
    hoTen: string,
    email: string,
    age: number,
    status?: boolean
} = {
    //key: value
    maSV: 'PH12345',
    hoTen: 'Vương Minh Thái',
    email: 'thaivm2@fe.edu.vn',
    age: 100,
    status: true,
}

//2.2. Array (mảng): Có 2 cách để khai báo 1 mảng trong typescript
//C1: dùng cặp ngoặc vuông []: 
//var tenMang: kieuDuLieuCuaCacPhanTu[] = [item1, item2, ...];
var testArray1:number[] = [1,2,3,4,5];
console.log(testArray1[2]);
//C2: dùng từ khóa Array<kieuDuLieuCuaCacPhanTu> (angle-bracket)
//var tenMang: Array<kieuDuLieuCuaCacPhanTu> = [];
var testArray2:Array<string> = ['Một', "Hai", `Ba`];

//2.3. Tuple (là kiểu dữ liệu mới trong typescript)
//khai báo kiểu dữ liệu cho từng phần tử ở trong mảng => biết trước số phần tử trong mảng
var testTuple:[number,string,boolean] = [1,'abc',false]

//2.4. Union: có thể nhận một trong nhiều kiểu dữ liệu đều hợp lệ
//var tenBien:kieuDuLieu1|kieuDuLieu2|...|kieuDuLieuX = value;
var testUnion:number|string = "true";
//kết hợp mảng và union
//C1: dùng ngoặc vuông []
var testUnionArray:(number|string)[] = [1,2,3,'4','5'];
//C2: dùng Array<> 
var testUnionArray2:Array<number|boolean> = [true,false,1];

//2.5. Any: không xác định trước kiểu dữ liệu => gán giá trị thuộc kiểu dữ liệu nào cũng đc
//var tenBien:any = value;

//2.6. Enum: enum tenBien{Value1, Value2, ...};
enum Role {Admin,User};
enum Gender {Male,Female};

//Ép kiểu trong typescript
var input:any = 22222; //B1: ép kiểu về string => B2: dùng .length để lấy đc độ dài chuỗi
//C1: angle-bracket <kieuDuLieuMuonEp>tenBien
var count1:number = (<string>input).length;
//C2: sử dụng từ khóa as: (tenBien as kieuDuLieuMuonEp)
var count2:number = (input as string).length;