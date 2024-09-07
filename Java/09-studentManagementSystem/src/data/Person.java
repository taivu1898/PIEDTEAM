/*
Person class
        bao gồm name, gender, yob
        có phễu có đối số, và ko có đối số
        có getter và ko có setter
        method showInfor
        method nhập thông tin người dùng
 */
package data;

import java.util.Scanner;

public class Person {
    //props:
    private String name;
    private String gender;
    private int yob;
        //quy tắc viết code là luôn để private, khi mà thực sự quá cần 
            //thì mới để public, defuault..
    
    //constructer có đủ thông tin(full đối số):Trường hợp này rất ít xảy ra 
    public Person(String name, String gender, int yob) {
        this.name = name;
        this.gender = gender;
        this.yob = yob;
    }
    //constructer rỗng(ko đối số):
    public Person() {}
    //=> cần 1 cái hàm giúp thu thập information từ ng dùng: 
            //public void inputInFor()
    
    //getter:quy tắc code là ko viết hàm getter vs setter, thực sự cần mới viết
    public String getName(){
        return name;
    }

    public String getGender() {
        return gender;
    }

    public int getYob() {
        return yob;
    }
    
    //Hàm cặp vs constructer rỗng
    public void inputInfor() {
        Scanner sc = new Scanner(System.in);//máy nhập
        
        System.out.println("Nhập tên đi: ");
        this.name = sc.nextLine();//nhập chuỗi
        
        System.out.println("Nhập gender: ");
        this.gender = sc.nextLine();
        
        System.out.println("Nhập năm sinh: ");
        this.yob = sc.nextInt();
    }
    
    //Show in for:
    public void showInfor(){
        String str = String.format("|%s|%s|%d", name, gender, yob);
        System.out.print(str);
    }
   
}
