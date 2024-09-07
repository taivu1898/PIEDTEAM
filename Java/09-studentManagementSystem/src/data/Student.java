/*
Student class
        sử dụng kế thừa để có name, gender, yob của Person
        riêng Student thì muốn có thêm id, gpa, email
        phễu có đối số và ko có đối số
        có getter và có setter nhưng thông minh
        showInfor
 */
package data;

import java.util.Scanner;

public class Student extends Person{
    //props:
    private String id; 
    private float gpa;
    private String email;
    
    //hiện tượng overload là nhìu method cùng tên(khác para và body) có 
            //nhiều cách xài(dùng ở mọi nơi)
            //-> ví dụ: constructer đầy đủ và constructer rỗng
            //=>khác vs override
    //constructer đầy đủ:
    public Student(String name, String gender, int yob,
                String id, float gpa, String email){
        super(name, gender, yob);//new Person => nhận name, gender, yob
        this.id = id;
        this.gpa = gpa;
        this.email = email;
    }
    
    //constructer rỗng(luôn đi kèm vs hàm input)
    public Student() {
    }
    
    //getter:
    public String getId() {
        return id;
    }
    
    public float getGpa() {
        return gpa;
    }
    
    public String getEmail() {
        return email;
    }
    
    //setter thông minh: thay vì nhận đc giá trị r bỏ vào luôn
                //thì mình sẽ ktr giá trị đó, nếu value is valid(hợp lệ)
                //thì mình gán giá thị và return tre
                //còn nếu value is not valid thì mình chửi, return false

    public boolean setId(String id) {
        if(id.length()<=0){
            System.err.println("ko đc để trống");//err in ra chữ màu đỏ
            return false;
        }
        
        if(!id.matches("^SE\\d{7}$")){
            System.err.println("ID phải có dạng SEDDDDDDD vs D là số");
            return false;
        }
        
        //nếu ko vào if nào ở trên - vượt qua các tầng validate(xác thực)
            //thì mình sẽ gán giá trị vào object và return true
        this.id=id;
        return true;
    }

    public boolean setGpa(float gpa) {
        if(gpa<0 || gpa>10){
            System.err.println("GPA ko hợp lệ");
            return false;
        }
        this.gpa = gpa;
        return true;
    }

    public boolean setEmail(String email) {
        if(email.length()==0){
            System.err.println("Email ko đc bỏ trống");
            return false;
        }
        
        if(!email.contains("@")){
            System.err.println("Email ko hợp lệ");
            return false;
        }
        
        //hot mailer send one time password(otp) dùng trong thực tế
        this.email = email;
        return true;
    }
    
    //hàm inputInFor
    @Override
    public void inputInfor() {
        Scanner sc = new Scanner(System.in);//máy nhập
        
        super.inputInfor();//cha: nhập cho con name, gender, yob;
        
        //id
        System.out.println("Nhập Student ID: ");
        /*while(true){//này code gà
            String inpId = sc.nextLine();
            boolean isvalid = this.setId(inpId);
            if(isvaled) break;
        }*/
        while(!setId(sc.nextLine()));//phải luôn có dấu chấm phẩy sau code này
        
        //gpa 
        System.out.println("Nhập GPA: ");
        while(!setGpa(Float.parseFloat(sc.nextLine())));
            //ở đâ nếu viết !setGpa(sc.nextFloat()) sẽ bị bug trôi lệnh do \n
                //(buffer giống bên c) nhưng trong java ko có buffer
                //nên ta phải nhận chuỗi r ép kiểu lịa thành float
        
        //email
        System.out.println("Nhập Email: ");
        while(!setEmail(sc.nextLine()));
    }
    
    //Show in for:
    @Override
    public void showInfor(){
        super.showInfor();
        String str = String.format("|%s|%f|%s\n", id, gpa, email);
        System.out.printf(str);
    }
    
    public boolean   hasScholarship(){
        return this.gpa > 8;
    } 
}
