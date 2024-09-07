
package runtime;

public class Program {

    public static void main(String[] args) {
        int a = 10;//primitive datatype, 4 byte
            //32 bit số nguyên
            //a có dung lượng rất nhỏ, primitive đc xem là unit nhỏ nhất
            //nên a ko thể tách nhỏ hơn đc nửa nên:
            //a. chấm cái gì?
        //wrapperClass:
        Integer b = new Integer(10);
            //new Integer(10) gọi cái phễu cảu cá khuôn Integer, bỏ 10 vào ngăn
                //của khuôn, đúc ra đc 1 object sau đó b là 1 con trỏ(stack) 
                //sẽ trỏ vào object đó
            //Object đc tạo từ Integer này có gì bên trong
            //Xét về mặt kích thước thì a < b rất nhìu
            //Bản chất cái ở trên là gói 1 con số int = 10 vào 1 object =>boxing
            //Boxing xảy ra khi wrapper = primitive
                //gán primitive vào wrapper Class
        System.out.println("a nè " + a);//scout ctr cách enter
        System.out.println("b nè " + b);//đoán phải là địa chỉ nhưng thực tế in
                                        //ra số 10
        System.out.println("b nè " + b.toString());//auto unboxing
            //b ko bằng 10 | b là địa chỉ
                //mình in ra 10 vì sout mặc định sẽ gọi toString()
                //toString() sẽ in ra các giá trị của prop trong object
                // mà b chỉ có 1 giá trị duy nhất là 10
    
        //auto unboxing:
        int c = b;
            //primitive = wrapperClass
            //đúng thì phải là c đc gán địa chỉ am b đang lưu
                //nhưng vì auto unboxing nên thực tế b đag mở object lấy core
                //là 10 đưa cho c
                //c chấm cái đầu mày
            //shorthand:
            Integer d = 2000;//bản chất vẫn đag là wrapper = primitive
                //gói số 2000 vào 1 object
            System.out.println("d nè " + d);
            System.out.println("Sum nè " + (a+d));//2010
            System.out.println(a==b ? "bằng nhau":"ko bằng nhau");
            System.out.println(d==b ? "bằng nhau":"ko bằng nhau");
            //So primitive và primitive thì '=='
            //So primitive và wrapper thì '==' vì auto unboxing
            //So wrapper và wrapper thì ko có cơ chế auto unboxing
                //=> so địa chỉ  => khỏi =
              
            //Giải pháp cho wrapper class:
            if(d.equals(b)){
                System.out.println("bằng nhau");
            }else{
                System.out.println("ko bằng nhau");
            }
            if(d.compareTo(a)==1){
                System.out.println("bằng nhau");
            }else{
                System.out.println("ko bằng nhau");
            } 
            
            
                
                
    }
    
}
//trong java ko in đc địa chỉ trực tiếp vì hệ thống java nó dã ẩn đi