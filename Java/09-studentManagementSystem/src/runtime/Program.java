/*
Quản lý danh sách sinh viên
menu gồm các chức năng cơ bản:
    1.Nhập vào 1 sinh viên
    2.Hiển thị thông tin sinh viên
    3.Hiển thị max min điểm trung bình
    4.Tìm kiếm theo mã sinh viên
    5.Sắp xếp sinh viên theo tên asc và hiển thị
    6.In ra sinh viên có học bổng và hiển thị desc
    7.Thoát
trong chương trình này tôi muốn có
    Person class
        bao gồm name, gender, yob
        có phễu có đối số, và ko có đối số
        có getter và ko có setter
        method showInfor
        method nhập thông tin người dùng
    Student class
        sử dụng kế thừa để có name, gender, yob của Person
        riêng Student thì muốn có thêm id, gpa, email
        phễu có đối số và ko có đối số
        getter và ko có setter
        showInfor

*/
package runtime;

import data.Student;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Program {
    
    public static void main(String[] args) {
        //Muốn quản lí sinh viên thì luôn cần mảng chứa
            //sinh viên
        //=> dùng mảng arrayList là mảng đặc biệt,
            //có khả năng co giản
        ArrayList<Student> studentList = new ArrayList<>();
        int choose;//lưu lựa chọn
        Scanner sc = new Scanner(System.in);
        
        do{
            showMenu();//xét về tổng thể là ko đạt, ko tốt khi xét về java
            System.out.println("Vui loàng nhập lựa chọn nha: ");
            choose = Integer.parseInt(sc.nextLine());
            switch(choose){
                case 1:{
                    System.out.println("Thêm sinh viên");
                    Student newStudent = new Student();//tạo 1 sinh viên mới
                    newStudent.inputInfor();//xin thông tin
                    studentList.add(newStudent);//nhét sv mới vào ds
                    break;
                }
                case 2:{
                    System.out.println("Hiển thị danh sách sinh viên");
                    if(studentList.isEmpty()){
                        System.out.println("Ko có sinh viên nào cả");
                        break;
                    }
                    //nếu có thì in
                    for (Student item : studentList) {
                        item.showInfor();
                    }
                    System.out.println("");
                    break;
                }
                case 3:{
                    System.out.println("Tìm sinh viên giỏi và gà nhất");
                    float maxPoint = studentList.get(0).getGpa();
                    float minPoint = studentList.get(0).getGpa();
                    
                    //tìm điểm bé nhất và điểm lớn nhất:
                    for (Student student : studentList) {
                        if(student.getGpa() > maxPoint){
                            maxPoint = student.getGpa();
                        }
                         if(student.getGpa() < minPoint){
                            minPoint = student.getGpa();
                        }   
                    }
                    //in ra:
                    System.out.println("những thằng giỏi nhất nè:");
                    for (Student student : studentList) {
                        if(student.getGpa() == maxPoint){
                            student.showInfor();
                        }  
                    }
                    System.out.println("những thằng gà nhất nè:");
                    for (Student student : studentList) {
                         if(student.getGpa() == minPoint){
                            student.showInfor();
                        }   
                    }
                    break;
                }
                case 4:{
                    System.out.println("Tìm kiếm sinh viên theo ID");
                    System.out.println("Nhập mã sinh viên cần tìm");
                    String keyId = sc.nextLine();//nhập chuỗi
                    //họ nhập mã gì kệ họ, tìm ko đc thì kêu ko
                    boolean isFind = false;
                    for (Student student : studentList) {
                        if(student.getId().equals(keyId)){
                            student.showInfor();
                            isFind = true;
                        }
                    }
                    if(!isFind) System.out.println("Ko có sinh viên cần tìm");
                    System.out.println("");
                            
                    break;
                }
                case 5:{
                    System.out.println("Sắp xếp sinh viên theo tên asending");
                    //asending là sắp xếp tăng dần, desasending là ngc lại
                    //trong studentList có method studentList.get(i) là nhận giá
                        //trị ở vị trí i nhưng ko thay đổi đc
                        //muốn thay đổi dùng studentList.set(i, tên gì đó)
                    //studentList là 1 chiếc mảng đặc biệt của java
                    //java cung cấp 1 bộ công cụ giúp thao tác vs chiếc mảng này
                    //Collection(bộ công cụ giúp xử lí những cái mảng):
                        //TRONG Collection có hàm sort(list, comparator) giống 
                            //bên c++
                        //TRONG Collection có hàm sort(List) dành cho những 
                            //danh sách cơ bản và những danh sách có tk đố kị
                            //(comparable)
                    Collections.sort(studentList, new Comparator<Student>() {
                        @Override
                        public int compare(Student t1, Student t2) {
                            if(t1.getName().compareTo(t2.getName())>0){
                                return 1;//swap
                            }
                            else return -1;//ko làm gì hết
                            //viết ngắn 1 dòng:
                            //return t1.getName().compareTo(t2.getName());
                        }
                    });//giống bên c++
                    //hiển thị ra màn hình:
                    for (Student student : studentList) {
                        student.showInfor();
                    }
                    break;
                }
                case 6:{
                    System.out.println("In ra sinh viên có học bổng theo Desc");
                    //desc là giảm dần, sinh viên có học bổng là GPA > 8
                    Collections.sort(studentList, new Comparator<Student>() {
                        @Override
                        public int compare(Student t1, Student t2) {
                           if(t1.getGpa()>t2.getGpa()) return 1;
                           return -1;
                           //code ngắn 
                        }
                    }
                    );
                    Collections.reverse(studentList);
                    //trong danh sách đang giảm dần đó , in ra những tk có GPA>8
                    for (Student student : studentList) {
                        if(student.hasScholarship()){
                            student.showInfor();
                        }
                    }
                    break;
                }
                case 7:{
                    System.out.println("Chào tạm biệt");
                    break;
                }
                default:{
                    System.out.println("Phải nhập từ 1 đến 7 nhé!!");
                    break;
                }
            }
        }while(choose!=7);
                
    }
    
    public static void showMenu(){
        System.out.println("-----Student Managament Application-----");
        System.out.println("1.Nhập vào 1 sinh viên");
        System.out.println("2.Hiển thị thông tin sinh viên");
        System.out.println("3.Hiển thị max min điểm trung bình");
        System.out.println("4.Tìm kiếm theo mã sinh viên");
        System.out.println("5.Sắp xếp sinh viên theo tên asc và hiển thị");
        System.out.println("6.In ra sinh viên có học bổng và hiển thị desc");
        System.out.println("7.Thoát");
        System.out.println("\n\n");
    }
}
//Collection(bộ những cái mảng, bộ sưu tập những cái mảng)
//Collections:
    //sort(List, comparator)
    //sort(List)