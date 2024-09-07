/*
Author is a book
book is a author
=> is not cha con
 */
package data;

import java.util.ArrayList;
import java.util.Scanner;

/*Author
    name nickname old birthday;
    tạo phểu hàm không đối số
    tạo phểu có đối số 
    tạo phểu có đối số là nickname
    tạo getter không tạo setter
    tạo hàm nhập thông tin tác giả
    nhưng nếu tác giả đã tồn tại trong danh sách thì k cho
    ép nhập lại
    tạo hàm showInfor
*/
public class Author {
    //props:
    private String name;
    private String nickname;
    private int yob;
    
    //constructor:
    //phễu đầy đủ
    public Author(String name, String nickname, int yob) {
        this.name = name;
        this.nickname = nickname;
        this.yob = yob;
    }
    //phễu rỗng + InputInfor(auList): nhập name, nickname, yob
    public Author() {
    }
    //phễu chỉ có nickname + InputInfor(): nhập name , yob            
    public Author(String nickname) {
        this.nickname = nickname;
    }
    
    //getter:
    public String getName() {
        return name;
    }

    public String getNickname() {
        return nickname;
    }

    public int getYob() {
        return yob;
    }
    
    //hàm inputInfor(): hàm ko nhận gì cả, nhập thông tin cho tác giả: name, yob
    public void inputInfor(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập tên của tác giả: ");
        this.name = sc.nextLine();
        System.out.println("Nhập năm sinh của tác giả: ");
        this.yob=Integer.parseInt(sc.nextLine());
    } 
            
    //hàm inputInfor(auList): hàm nhận vào danh sách tác giả để ktr trùng
    public void inputInfor(ArrayList<Author> auList){
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập bút danh của tác giả: ");
        while(true){
            String inputNickName = sc.nextLine();//nhập nickname muốn tạo
            boolean isDup = false;
            for (Author author : auList) {
                if(author.getNickname().equals(inputNickName)) isDup = true;
            }
            if(isDup) System.out.println("Nickname đã có người sử dụng");
            else{//nếu ko ai dùng
                this.nickname=inputNickName;
                 break;
            }
        }
        this.inputInfor();//nhập name và yob
    }
    
    //Show:
    public void showInfor(){
        System.out.printf("%-30s|%-30s|%4d\n",name, nickname, yob);
    }
}
