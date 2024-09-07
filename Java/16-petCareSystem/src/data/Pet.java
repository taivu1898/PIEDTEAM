/*
một con Pet có nhửng thuộc tính owner , color, weight, id
*/
package data;

public abstract class Pet {
    //props:
    protected String owner;
    protected String color;
    protected double weight;
    protected String id;
    
    //constructor:
    public Pet(String id, String owner, String color, double weight) {
        this.owner = owner;
        this.color = color;
        this.weight = weight;
        this.id = id;
    }
    
    //getter:
    public String getOwner() {
        return owner;
    }

    public String getColor() {
        return color;
    }

    public double getWeight() {
        return weight;
    }

    public String getId() {
        return id;
    }
    
    //setter:

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
    
    
    //method showInfor:tạo ra 1 chuỗi đẹp, 'in' ra cái chuỗi đó
        //con chó thì có necklace còn mèo thì có ribbon
        //=> cách in và cách hiển thị thông tin là khác nhau nên
        //pet ko có công thức chung
    public abstract void showInfor();
    
}
