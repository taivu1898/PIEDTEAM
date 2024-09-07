//xin video
/*
tạo chương trình quản lý thư viện
gồm 2 class sau
Author
    name nickname old birthday;
    tạo phểu hàm không đối số
    tạo phểu có đối số 
    tạo phểu có đối số là nickname
    tạo getter không tạo setter
    tạo hàm nhập thông tin tác giả
    nhưng nếu tác giả đã tồn tại trong danh sách thì k cho
    ép nhập lại
    tạo hàm showInfor
Book
    bookName createAt nickName
    tạo có đối số và k có đồi số
    tạo getter anh setter
    tạo hàm input//nếu mà sách này có tác giả mà 
    có tên trong danh sách tác giả thì bỏ qua
    nếu tác giả của cuốn sách mà chưa có tồn tại trong ds
    thì thêm mới
program:
    menu
    1.Nhập thông tin sách in ra màn hình
    2.Hiển thị thông tin sách ra màn hình
    3.Nhập thông tin tác giả
    4.Tìm kiếm sách theo bút danh
    5.Thoát
*/
package runtime;

import data.Author;
import data.Book;
import java.util.ArrayList;
import java.util.Scanner;

public class Program {
    
    public static void main(String[] args) {
        ArrayList<Author> auList = new ArrayList<>();
        ArrayList<Book> boList = new ArrayList<>();
        initData(auList, boList);//nập data vào
        int choose;//lưu lựa chọn
        Scanner sc = new Scanner(System.in);
        do{
            showMenu();
            System.out.println("Vui lòng nhập lựa chọn");
            choose = Integer.parseInt(sc.nextLine());
            switch(choose){
                case 1: {
                    System.out.println("Thêm mới 1 cuốn sách ");
                    Book newBook = new Book();
                    newBook.inputinfor();//nhập bookName,createAt, nickname
                    //kiểm tra xem tác giả của sách đã đc lưu chưa:
                    boolean isDup = false;
                    for (Author author : auList) {
                        if(author.getNickname().equals(newBook.getNickname())){
                            isDup = true;
                            break;
                        }
                    }
                    //nếu có thì th, ko có thì tạo mới:
                    if(!isDup){
                        //tạo tác giả từ nickname của cuốn sách mới:
                        Author newAuthor = new Author(newBook.getNickname());
                        newAuthor.inputInfor();//ko có đầu vào, chỉ nhập thêm
                                                 //name và yob
                        auList.add(newAuthor);//thêm tác giả vào danh sách
                        }
                    boList.add(newBook);//thêm cuốn sách vào danh sách
                    break;
                }
                case 2: {
                    System.out.println("Hiển thị các cuốn sách");
                    boolean isFind = false;
                    for (Book book : boList) {
                        book.showInfor();
                        isFind = true;
                    }
                    if(!isFind) System.out.println("ko có cuốn sách nào cả!!!");
                    break;
                }
                case 3: {
                    System.out.println("Thêm mới 1 tác giả");
                    Author newAuthor = new Author();
                    newAuthor.inputInfor(auList);//nhập 3 thông tin 
                                            //có check trùng
                    auList.add(newAuthor);//thêm tác giả vào danh sách
                    break;
                }
                case 4: {
                    System.out.println("In ra các cuốn sách dựa trên nickname");
                    System.out.println("Nhập nickname của tác giả bạn muốn tìm sách: ");
                    String key = sc.nextLine();
                    boolean isFind = false;
                    for (Book book : boList) {
                        if(book.getNickname().equals(key)){
                            book.showInfor();
                            isFind = true;
                        }
                    }
                    if(!isFind) System.out.println("ko tìm đc cuốn sách nào!!!");
                            
                    break;
                }
                case 5: {
                    System.out.println("Xin chào tạm biệt");     
                    break;
                }
                default: {
                    System.out.println("Phải chọn 1 trong 5 lựa chọn trên");
                    break;
                }
            }
        }while(choose!=5);
        
        
        
        
        

    }
    
    //viết hàmnhận mảng và giúp nạp giá trị vào mảng luôn, đỡ phải nạp từng cái:
    public static void initData(ArrayList<Author> auList, 
                                    ArrayList<Book> boList){
        //Nạp giá trị cho danh sách tác giả:
        auList.add(new Author("Ngo Kien Huy", "Huy Quan Hoa", 1997));
        auList.add(new Author("Nguyen Thuy Chi", "ChiPu", 1994));
        auList.add(new Author("Le Muoi Diep", "UncleTen", 1999));
        
        //nạp vào vài cuốn sách:
        boList.add(new Book("Kho Báu nơi biển sâu", "15-4-2024",
                                    "Huy Quan Hoa"));
        boList.add(new Book("Đừng làm mọi thứ Phức Tạp", "16-4-2024",
                                    "ChiPu"));
        boList.add(new Book("Dạy người giảu giả nghèo", "12-4-2023",
                                    "UncleTen"));
    }
    
    //Hàm Show menu:
    public static void showMenu(){
        System.out.println("1.Nhập thông tin sách in ra màn hình");
        System.out.println("2.Hiển thị thông tin sách ra màn hình");
        System.out.println("3.Nhập thông tin tác giả");
        System.out.println("4.Tìm kiếm sách theo bút danh");
        System.out.println("5.Thoát");
    }
    
}
