
package data;
//star là cái khuôn(class) dùng để đúc ra các ca sĩ, ng nổi tiếng => object
//tất cả những ng nổi tiếng đều phải đc tạo ra từ cái khuôn này
public class Star {
//trong 1 cái class gồm : 
    //properties|field|attribute: thuộc tính
    private String name;
    public int yob;
    public String gender;//nữ hay nam
    public String hotsong;
        //=>những cái ngăn
    //static  là ko phân tán, chỉ có duy nhất 1 tk ám chỉ việc prop hay method 
        //này thuộc class 
    //method|function:phương thức(goi là function ko chuẩn)
        //cần constructer: cái phễu: hàm giúp phân phối giá trị vào đúng ngăn
            //phễu phải cùng tên vs class chứa nó, phải public
            //phễu ko đc quy định đầu ra
            //this: là đề cập đến star (class) đang chứa nó
    //phễu đặt tên cái giống class chứa nó
    public Star(String name, int yob, 
                String gender, String hotsong){
        //ko đc quy định đầu ra tức ko có int hay void gì hết
        this.name = name;//this.name là star.name là name màu xanh
        this.yob = yob;
        this.gender = gender;
        this.hotsong = hotsong;
        //nếu viết trùng tên thì sẽ ko phân biệt nào là ngăn nào là giá trị rót
        //=> dùng this
    }
    
    public void showInfor(){
        System.out.println("Tôi là: " + name +
                            ", sinh năm: " + yob +
                            ", gender: " + gender +
                            ", hot song: " + hotsong);
    }
    
    //get: tạo hàm get để lấy giá trị khi khai báo thuộc tính là private
    //=>open get but closed set
    public String getName(){
        return name;
    }
    
    //Hàm set: tạo hàm set để lấy giá trị khi khai báo thuộc tính là private 
    //=>open set=> làm vậy thì quá vô ích khi khai báo private
    //=>làm 1 password để có thể đổi đc 
    public void setName(String newName, int psw){
        this.name = psw==5071994? newName : this.name;
    }
    
}
