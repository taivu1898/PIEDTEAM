/*
Book
    bookName createAt nickName
    tạo có đối số và k có đồi số
    tạo getter anh setter
    tạo hàm input//nếu mà sách này có tác giả mà 
    có tên trong danh sách tác giả thì bỏ qua
    nếu tác giả của cuốn sách mà chưa có tồn tại trong ds
    thì thêm mới
 */
package data;

import java.util.Scanner;

public class Book {
    //props:
    private String bookName;
    private String createAt;
    private String nickname;
    
    //constructor:
    //có đối số:
    public Book(String bookName, String createAt, String nickname) {
        this.bookName = bookName;
        this.createAt = createAt;
        this.nickname = nickname;
    }
    //ko đối số:
    public Book() {
    }
    
    //getter:
    public String getBookName() {
        return bookName;
    }

    public String getCreateAt() {
        return createAt;
    }

    public String getNickname() {
        return nickname;
    }
    
    //hàm nhập full thông tin:
    public void inputinfor(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập tên của sách: ");
        this.bookName = sc.nextLine();
        System.out.println("Nhập ngày xuất bản: ");
        this.createAt = sc.nextLine();
        System.out.println("Nhập Nickname của tác giả: ");
        this.nickname = sc.nextLine();
    }
    
    //hàm show:
    public void showInfor(){
        System.out.printf("%-40s|%-40s|%-40s\n", bookName, createAt, nickname);
    }
}
