
package data;
 /*
Brand là cái khuôn đúc ra 'dòng xe'
*/   
public class Brand {
    //props: đi thi đề để default thì cứ để 
    private String brandID;
    private String brandName; 
    private String soundBrand;
    private double price;
    
    //constructer:
    public Brand() {
    }

    public Brand(String brandID, String brandName, 
                    String soundBrand, double price) {
        this.brandID = brandID;
        this.brandName = brandName;
        this.soundBrand = soundBrand;
        this.price = price;
    }
    
    //getter"
    public String getBrandID() {
        return brandID;
    }

    public String getBrandName() {
        return brandName;
    }

    public String getSoundBrand() {
        return soundBrand;
    }

    public double getPrice() {
        return price;
    }

    //setter:
    public void setBrandID(String brandID) {
        this.brandID = brandID;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public void setSoundBrand(String soundBrand) {
        this.soundBrand = soundBrand;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    
    //method:

    @Override
    public String toString() {
        String str = String.format("%s, %s, %s: %.3f", 
                brandID, brandName, soundBrand, price);
        return str;
    }
}
