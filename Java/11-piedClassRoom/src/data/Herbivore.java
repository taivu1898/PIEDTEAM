/*
Herbivore: động vật ăn cỏ
*/
package data;

public abstract class Herbivore {
    //props: 
    protected String name;
    protected int yob;
    protected double weight;
    
    //constructor:
    public Herbivore(String name, int yob, double weight) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
    }
    
    //getter:
    public String getName() {
        return name;
    }

    public int getYob() {
        return yob;
    }

    public double getWeight() {
        return weight;
    }
    
    //showInfor: tạo ra chuỗi đẹp, in ra cái chuỗi đẹp đó
    //  ai gọi showInfor thì có dùng đc chuỗi đẹp ko? ko
    //toString: tạo ra chuỗi đẹp, ko in mà đưa cho mình tùy ý sử dụng
    //  sử dụng sout(h1) mà ko cần .toString
    @Override
    public String toString() {
        String str = String.format("|%-20s|%-10s|%4d|%6.2f", 
                                    "Herbivore", name, yob, weight);
        return str;
    }
    
    //method study:con vật đó học và trả ra điểm số(double):
    //mỗi 1 herbivore thì có mức độ tiếp thu kiến thức khác nhau
    //VD: +ngựa vừa học vừa hú hí 
    //    +con khỉ là học kiểu bắt chước(mimic)  
    public abstract double study();
    
    //vì chúng nó học khác nhau, nên khi hiển thị kết quả học tập 
    //cx có phần khác nhau:
    public abstract void showLearningOutComes();
}
