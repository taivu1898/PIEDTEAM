package runtime;
//Bây giờ t muốn quản lý ko chỉ alf 1 hcn mà t còn muốn quản lí hình vuông 
//hình tròn
//=>nhiệm vụ là tạo ra liên kết cah con cho bọn này thì mới chung 1 nhà đc
import data.Disk;
import data.Rectangle;
import data.Shape;
import data.Square;

public class Program {
    public static void main(String[] args) {
        Shape ds[] = new Shape[5];
        ds[0]=new Rectangle("Phi", "Đỏ", 4, 5);
        ds[1]=new Square("Lan", "Vàng", 5);
        ds[2]=new Disk("Phúc", "Xanh", 4);
        Disk d = new Disk("Phi", "Nâu", 5);
        //d trỏ vô vùng nhớ chứa hình tròn
        ds[3]=d;
        //ds[3] cx trỏ vào vùng nhớ hình tròn chung vs d => 2 chàng trỏ 1 nàng
        //Anonymours(mượn gió bẻ măng):
        Shape xxx = new Shape("Bé Na", "7 color") {//gõ new Shape ctr cách
            @Override
            public double getArea() {
                return 50;//phải tự thực nghiệm tự đo
            }    
            @Override
            public double getPerameter() {
                return 15;
            }          
            @Override
            public void paint() {
                String str = String.format("%15s|%10s|%10s|%5.2f|%5.2f",
                    "xxx", owner, color, getPerameter(), getArea());
                System.out.println(str);
            }
        };
        ds[4]=xxx;       
        //duyệt và in
        for(Shape item: ds){
            item.paint();
        }
        
        
        
        //kỹ thuật parse type: ép kiểu
        Rectangle r1 = new Rectangle("r1", "Vàng",10,23);
        r1.paint();
        Square s1 = new Square("s1", "Tím", 15);
        s1.paint();
        s1.drawTitle();//r1.drawTitle ko đc xài hàm riêng của Square
        
        //hình vuông cx chính là hình chữ nhật
        //  vậy nếu anh có 1 hình vuông, xong anh nói nó là hình chữ nhật
        //  em có đồng ý ko?
        Rectangle r2 = new Square("r2", "Đỏ", 16);
        r2.paint();//Do sử dụng danh xưng là Rectangle r2 nên chỉ có thể sử 
                    //dụng các hàm trong vùng nhớ của Rectangle()
        
        Square tmp = (Square)r2;//đổi lại danh xưng là Square từ Rectangle
        tmp.drawTitle();
        ((Square)r2).drawTitle();
        
        
            
    }
}

//Muốn có Object thì ta phải làm gì?
            //cái khuôn - class
            //phễu - constructor - new phễu
            //biến con trỏ = new phễu(...); trỏ vào vùng nhớ new
        //Dog chiquaqua= new Dog(..)
            //Nếu ta có object từ class con thì sao?
            //thì như nhau
            //Square sq = new Square(..)
            //tạo cái gì cx cần cái khuôn, phễu, biến con trỏ     
        /*
        Tuy nhiên nếu nhìn vào sâu bên trong vùng nhớ của con thì vùng nhớ
          của con sẽ có vùng new cha 
            -Mục đích:  giúp cho tk con có tất cả những gì mà cha có
                bản thân tk cha và con có thể sống độc lập
                nhưng để có thể nhận cha con và về chung 1 nhà thì 
                con phải đem ra những điểm chung cho cha nên kế thừa
                cũng là lúc nó khôi phục lại những gì đã đưa cho cha nó
            =>ko cần làm lại những điều mà ng khác đã làm tốt rồi
            Object con nếu nhìn vào vùng nhớ sẽ là:
                Square s1 = new Square()
                        mà new Square = new Rectangle + code của riêng con
            => tk con chính là: new cha + code của riêng con
                            new cha là super|di truyền|inherit
                            còn vùng nhớ của code của riêng con à extends
                                        (vùng biến dị)
            -Vậy nếu tk cha là abs Class thì sao?
                thì tk con = new cha + code riêng con + abs method của cha;
                bản thân abs class ko tạo đc object
                nó cần class trung gian(cho 1 class con vá lỗi và tạo object)
                nhưng đôi khi mình lười, mình ko thích đi qua class trung gian 
                hoặc ko bik đặt tên là gì, nhưng bik nó là 1 dạng Shape
                thì anh có thể dùng abs class để đúc object thông qua kỹ thuật
                Anonymours(mượn gió bẻ măng)
                
            -Bình thường 1 abs class ko tạo đc object phải tìm 1 class con kế 
                thừa và vá thủng để dựa đó tạo object: 
                    +ưu điểm: nhân bản đc
                    +nhược điểm: quá trình tạo khuông mất time, phải đặt tên
             Nhưng mà có 1 cách khác có thể tạo trực tiếp object thông qua abs 
                class mà ko cần class trung gian (anonymous):
                    +ưu điểm: nhanh, ko cần tạo class trung gian, khỏi đặt tên
                    +nhược điểm: vì tạo = tay, nên khó nhân bản, muốn nhân bản
                            phải copy, phải trùng lập code
            -Dùng anonymous khi nào:
                khi em muốn tạo object bằng abs class mà ko thông qua class 
                trung gian em có 1 đối tượng biết là Shape nhưng ko bik rõ là gì
                ->anonymous là hệ thống có 1 tk cx thuộc về hệ thống đó nhưng ko
                    rõ nó là ai, là gì..
        */


