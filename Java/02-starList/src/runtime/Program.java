


package runtime;

import data.Star;


public class Program {
    public static void main(String[] args){
        Star mtp = new Star("Thanh Tùng", 1994, "Nam", "Cơn Mưa Ngang Qua");
        //new Star là các phễu Star
        Star chipucC = new Star("Huyền Chi", 1993, "Nữ", "Chiếc ố");
        //mtp và chipuC là object đc tạo từ khuôn star
        //nên giống nhau về method đó
        mtp.showInfor();
        chipucC.showInfor();
        
        //muốn lấy giá trị của năm sinh sơn tùng: get
        System.out.println("Tùng sinh năm: " + mtp.yob);
        mtp.yob=1999;//set lại giá trị của yob
        System.out.println("Tùng sinh năm: " + mtp.yob);
        System.out.println("Tùng tên: " + mtp.getName());
        mtp.setName("Tùng Yêu Điệp", 5071994);//set name
        System.out.println("Tùng tên: " + mtp.getName());
        
        //đi hồ bơi
        Star ngocTrinh = new Star("Trần Thị Ngọc Trinh", 1989, "Nữ", "Eo56");
        ngocTrinh.showInfor();
        Star diep = new Star("Lê Mười Điệp", 1999, "Nam", "Thích gõ code");
        diep.showInfor();
        ngocTrinh.showInfor();
               
    }
    
}

//xem lại cách đặt tên trong code
//xem lại các cấp trong java
/*
Modifier: bổ nghĩa
    1 - access modifier
        +default: phạm vi truy cập trong cùng package
            bên ngoài package ko thể dùng đc(trong cùng 1 cái hộp tụi mình thấy 
                nhau)
        +public: phạm vi truy cập lớn nhất, ai cx có thể truy cập và sử dụng
        +private: riêng tư, chỉ mình nó mới thấy chính nó
            =>VD:
                pks runtime
                    class Program
                pks data
                    public class Student
                    private class Car
                    class Bike
                (chung 1class thì private vẫn xài đc còn khác pks,class thì
                        như VD trên)
            => Program thấy: Student    ai thấy nó: 0
               Student thấy: Bike       ai thấy nó: Program, Bike, Car
               Car thấy: Student, Bike      ai thấy nó: 0
               Bike thấy: Student       ai thấy nó: Student, Car  
            => lí do hàm main phải có public
        +protected:giống public nhưng chỉ có con mới đc xài
            =>VD:
                class Lâm{
                    protected People Bà_Nội
                    => có bà nội
                }
                class Tuấn extends Lâm{
                    protected int money=1000;
                    =>có tiền và có bà nội.
                }
                class Hùng extends Tuấn{
                    //extends ở đây là mở rộng những vốn liếng đã cho
                    private People Người_yêu
                    =>money và bà nội, ng yêu
                }
                =>Tuấn là cha của Hùng(ko có khái niệm đa kế thừa ở đây), lâm là
                    bố của Tuấn, Lâm là ô nội của Hùng
                *Quy tắc bất hiếu trong JAVA: cha cho con hết những gì cha có, 
                    còn con sẽ ko cho cha bất cứ thứ gì
                *Class: có 1 cơ chế là có thể nhận 1 class khác làm cha | con

    2 - non-access modifier
        +final: áp dụng cho class, prop, method
            -final vs class: vẫn tạo đc object, nhưng ko nhận class khác làm con 
                1 class có cơ chế: 
                    class có thể nhận tk kahcs làm cha|con(sinh học)
                    class có thể bỏ nguyên liệu vào và đúc ra object(công việc)
                =>nếu như class của anh có chữ final thì sao?
                    final class Hùng extends Tuấn
                => class đó vẫn tạo đc object nhưng ko cho class khác nhận mình 
                    làm cha
            -final nằm trong prop
                final int yob = 1999 => properties trong class bản chất cx chỉ
                    là biến mà thôi, nếu đặt final ở trc props sẽ làm cho props
                    dó ko đc thay đổi giá trị => biến thành hằng số
            -final trong method(hành động):
                vd: câu truyện bán trà sữa
                    class cha{
                        protected method: nấu_trà_sữa(){
                            //để method th thì con, cháu, cô dì, cha,bác đều see
                                //=>phải để protected
                            đường sữa và than tre
                        }     
                    }
                    class con extends cha{
                        //thời cua con nấu trà sữa siêu ngon, siêu chât lượng 
                            //như cha thì bán dell đc, vì ngta ham rẻ
                        @Override: vượt mặt
                        protected method: nấu_trà_sữa(){
                            sữa và than tre
                            đường hóa học, ma tóe
                            Override: vượt mặt
                        }
                    }
                    => cha có hàm nấu trà sữa rất ngon, con kế thừa cha, cx
                       có hàm nấu trà sữa nấu rất ngon, nhưng với cách nấu đó ko
                       phù hợp vs thười của con, nên tk con phải độ chế lại
                       "nấu trà sữa" nên tuy đều là "nấu trà sữa" nhưng con nấu
                       khác, cha nấu khác => trạng thái này là Override(có 
                       method nằm trên method)
                    => tk con có 2 cách nấu trà sữa
                    => Nếu đặt final:
                        class cha{
                        protected final method: nấu_trà_sữa(){
                            đường sữa và than tre
                        }     
                    }
                    => đoạn code dòng 8--83 bị bug
        +static:(tĩnh lặng | đứng yên | ko di chuyển) áp dụng cho prop và method
            prop hay method mà static tức là ko có nhân bản cho từng object, ko
            thuộc sở hữu của từng object mà chỉ sở hữu của khuôn(class).Object 
            nào cx phải xài chung
        +astract: trừu tượng
            VD: 
                astract class cha{
                    astract method: thành công()
                    astract method: ăn trứng()
                    astract method: yêu()
                }
                => 1 class mà có astract method thì chắc chắn là astract class
                    nhưng 1 astract class thì ko nhất thiết phải có astract
                    method
                *mỗi 1ng định nghĩa thành công khác nhau(còn thay đổi theo time) 

*Bản chất của lập trình
*QUy tắc quản lý gom tụ:(về nhà xem lại)
        Một cái class gồm thuộc tính và phương thức
        Muốn quản lý nhiều đối tượng(object) thì ta phải đưa|nhét
            tất cả chúng vào 1 cái mảng nhưng mảng chỉ chs vs những thk cùng 
            kiểu nên !!! => ta phải đặt 2 object bất kỳ lên 1 bàn cân, tìm điểm
            chung(thuộc tính và hành động ..) và gom điểm chuung lại tạo thành 
            cái khuôn(class) => Từ đó nói
            rằng cái khuôn này là nguồn gốc của các object trên, các chúng bây 
            đều đc tạo ra từ 1 cái khuôn này(class) => cùng loại và cùng loại 
            thì bỏ vào mẳng đc => quản lý đc
*Hàm nằm ở bên ngoài class, khuông gọi là function; bên trong gọi là method,
   trong java ko có function.
*Trong java(oop) quy ước bất kì cài gì: hàm, method, main, hành động gì,..
        phải có quản lí, 1 ng đứng ra respon(khác vs c vì c là code hàm).
        => muống dùng phải thông qua class star
        => đặt đối tượng lên đầu => oop
*Trong properties:
    public -> open set / get
    private -> closed set / get

------ÔN TẬP------
*đa hình gồm override và overload cho phép các object cùng lại sử dụng các mehod
    theo các cách khác nhau
*Trong java chí có method overriding và method overloading là đại diện cho đa
    hình
*override diễn ra ở cha con, dùng method cùng tên và đôi khi giống parameter
*overload diễn ra ở trong cùng 1 class, dùng các method cùng tên nhưng phải khác
    parameter
*khai cha new con thì có prop của cah và con nhưng ko đc quyền truy cập vào prop
    của con, phải ép kiểu vì lúc này đag dùng vùng nhớ của cha
*String a = "HI" và String b = "HI" thì a==b là code đúng vì đang trong cùng 
    pool => cùng địa chỉ vùng nhớ
*Integer cx có pool như string nhưng nó có khoảng từ -127 đến 128
    thì Interger a = 23 và Interger b = 23 thì a==b là dùng
    pool trong Interger thì phức tạp hơn trong String
*abstract method có thêm final để tránh override lại là sai vì abs method là hàm
    ch có code method và cần phái vá
*Khi dùng final bắt buộc prop phải có giá trị và method phải có body
*/
