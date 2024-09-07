/*
Lambda chỉ xuất hiện sau phiên bản SE8
    nhiệm vụ lớn nhất của lambda là viết code tạo object từu anonymours
    gọn hơn
Tại sao interface thì chỉ nên có 1 method mà thôi ?
    vì lambda chỉ bổ sung code cho 1 method mà thôi, nếu có 2 method
    thì ko biết bổ sung method nào
    vậy nên từ SE9 ngta thêm vào @FunctionalInterface để ràng buộc 
    interface có 1 method
*/
package runtime;
/*
1 file java có thể chứa được nhiều class
    1 file như program..
    1 class có thể chứa bên trong class khác
    class A là outter class của class Program
    class B là inter class của class Program
Tuy có nhiều class nhưng chỉ có 1 class đc public
    và class đc public phải có tên giống file
*/
public class Program {

    public static void main(String[] args) {
        Human diep = () -> {
            System.out.println("Ahihi đồ chó");
        };//cách viết này chỉ áp dụng với interface chỉ có 1 method
        //kĩ thuật này gọi là lambda, nếu dùng lambda vs interface có nhìu
            //method sẽ bị bug
        //=> lambda sinh ra để viết tắc anony o interface
        diep.show();
        
        Math xxx = (int a, int b) -> (a+b);
        xxx.add(2,5);//trả về 7
    }
    
    class B {
        
    }
}

class A{
        }

@FunctionalInterface//khi viết dòng này ra thì các interface ở dưới 
                //chỉ đc có 1 method
interface Human{
    public void show(); 
}

interface Math{
    public int add(int a, int b);
}