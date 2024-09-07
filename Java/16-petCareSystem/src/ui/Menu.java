
package ui;
//iu là giao diện người dùng

import java.util.ArrayList;
import utils.Inputter;

/*
Menu là 1 cái khuôn tạo ra anh chuyên quản lý menu
    có: danh sách các lựa chọn 'optionList'
    có: tên của menu 'title'
    có: nhưng hàm thao tác với optionList:
        //Thêm 1 option List
        //Hiển thị danh sách optionList
        //hàm thu thập lựa chọn của ng dùng
*/
public class Menu {
    //mảng lưu các lựa chọn
    public ArrayList<String> optionList = new ArrayList<>();
    public String title;//tên của menu
    
    //constructor:
    public Menu(String title){
        this.title = title;
    }
    
    //hàm addNewOption: thêm 1 option có danh sách options
    public void addNewOption(String newOption){
        optionList.add(newOption);
    }
    
    //hàm print: hiển thị danh sách options kèm số phía trc
    public void print(){
        int count = 1;
        System.out.println("_______"+title+"_______");
        for (String op : optionList) {
            System.out.println(count + "." +op);
            count++;
        }
    }
    
    //Hàm getChoice: thu thập lựa chọn của user:
    public int getChoice(){
        int choice = Inputter.getAnInteger("Input your choice: ", 
                    "Your choice must between 1 and " +optionList.size(), 
                    1, optionList.size());
        //=>ở đây ta biết đc menu có bao nhiêu lựa chọn nên chặn trong khoảng đc
        return choice;    
    }
}
