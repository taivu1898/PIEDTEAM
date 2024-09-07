/*
Car: khuôn đúc các chiếc xe
 */
package data;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

public class Car implements Comparable<Car>{
    //props:
    private String carId;
    private Brand brand;
    private String color;
    private String frameId;
    private String engineId;
            
    //constructor:
    public Car() {
    }

    public Car(String carId, Brand brand, String color, 
            String frameId, String engineId) {
        this.carId = carId;
        this.brand = brand;
        this.color = color;
        this.frameId = frameId;
        this.engineId = engineId;
    }
    
    //getter:
    public String getCarId() {
        return carId;
    }

    public Brand getBrand() {
        return brand;
    }

    public String getColor() {
        return color;
    }

    public String getFrameId() {
        return frameId;
    }

    public String getEngineId() {
        return engineId;
    }
    
    //setter:
    public void setCarId(String carId) {
        this.carId = carId;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setFrameId(String frameId) {
        this.frameId = frameId;
    }

    public void setEngineId(String engineId) {
        this.engineId = engineId;
    }
    
    //toString:
    @Override
    public String toString() {
        String str = String.format("%s, %s, %s, %s, %s", 
                carId, brand.getBrandID(), color, frameId, engineId);
        return str;
    }
    
    public String screenString(){
        String str = String.format("%s,\n %s, %s, %s, %s", 
                brand,carId, color, frameId, engineId);
        return str;
    }

    @Override
    public int compareTo(Car that) {
        String thisBrandName = this.brand.getBrandName();
        String thatBrandName = that.brand.getBrandName();
        if(thisBrandName.compareTo(thatBrandName) > 0) return 1;//swap đc
        else if(thisBrandName.compareTo(thatBrandName) == 0){
            //so qua carId:
            return this.getCarId().compareTo(that.getCarId());
        }
        return -1;
    }
    
    
    
    
            
    
}

//order of và order by
