
package runtime;

//java vẫn theo hướng thủ tục
public class Program {
    public static void main(String[] args){//có thể dùng int để trả giá trị
        //comment: ghi chú: muốn nhì dòng // cùng lúc thì ctr /
        //01-datatype:
        //-Trong java có 2 dạng dâtatype:
        //1.primitive datatype: kiểu dữ liệu nguyên thủy
                //1 vùng nhớ nhỏ đc sử dụng để lưu trữ 1 giá trị
                //và vì nó quá nhỏ nên ko thể tách nhỏ hơn đc
                    //+byte: 1 byte(8 bite)     số nguyên rất nhỏ 1111111
                        //1111111(1 số để dấu)=>byte : -128 đến 127(vì có số 0)
                        byte numBye = 127;
                        byte bb = 20;
                        int L = 100;
                    //+short: 2byte (16 bit)     số nguyên rất nhỏ
                    //+int: 4 byte(32bit)      số nguyên nhỏ
                    //+long: 8 byte     số nguyên lớn
                    //+float: 4 byte    số thực nhỏ
                    //+double: 8 byte   số thực lớn
                    //+char: 2 byte
                        //Bên c 1 byte la 8 bit => 8 số 1 
                            //ko có dấu =>nên lưu đc 255 ký tự của ac
                        //bên java lưu dấu nên cần 2 byte
                    //+boolen: 1 bit    true, false
                //*giá trị mặc định mặc định trong java ko phải rác
                //*Default value của các biến là 0(char là null)
                //*boolen mặc định là false
                //*incompatible type: ko thể nhét vào đc
            float numFloat = 123.3F;
                //java ưu tiên hiểu số thực là double
            float numF;//có thể chứa 0 hoặc 0.0F
            double numDouble = 123.4F;
                //Không đc nhét cái gì đó quá to vào cái gì đó quá nhỏ
                    //numInt=numByte
                    //numByte = numInt
        //2. Object datatype | references datatype
            //là kiểu dữ liệu dùng các primitive datatype để định nghĩa
            //Student(name-char-string, yob-int, gpa-float)=>1 dạng dữ liệu mới
                //tạo ra từ những dữ liệu nhỏ
            long money=10_000_000_000L;//thêm dấu _ để nhìn rõ hơn
                                           //và ko ảnh hưởng đến biến 
                //trong java mặc định hiểu số nguyên là int
            int num1=076;//prefix: tiền tố
                        //0x: hex
                        //0: prefix octal hệ 8
            //có 2 cách để in:
            System.out.printf("number 1 nè: %d", num1);//tự căn lề trái phải 
            System.out.println("number 1 nè" + num1);//line new: tự xuống dòng
        //3.Operater: toán tử
            //trong java có 10 loại toán tử:
                //+Athrimetic: + - / * ++ -= += *= /= %=
                    int a = 10;
                    int b = a++ + ++a - --a - a--;
                    System.out.println(b);
                //+comparision: > < >= <= == !=
                //+logical:
                    //And(&&)   Or(||)
                    //&            |
                //+Toán tử 3 ngôi
                //+Toán tử 1 ngôi: unary
                //+comma: phẩy
                //+Shift bit: toán tử dịch bit
                    int num2 = 8;
                    num2 = num2 << 2;
                    System.out.println(num2);
                    num2 = num2 >> 2;
                    System.out.println(num2);
                    //công thức nhanh: 
                        //n >> x: n/(2^x)
                        //n << x: n*(2^x)
                //+bitwise: | & ^ ~
                    // |: tìm 1
                        //1 1 0 1 0 0

                        //1 0 1 1 0 1
                    // & tìm 0, nếu là 0 thì kết luận là 0
                    //^: giống là 0 mà lệch là 1
                    //~: not
                
            
            
    }
    
}
