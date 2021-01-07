/**
 *  DataProcessor provides methods to compute the mean and standard deviation of the entered 10 numbers in the form.
 */
package managedBean;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author Nupur Shah
 *
 */
public class DataProcessor {
	/* This method calculates the mean of ten numbers. */
	public float calcMean(String dataValues) {
		float mean = 0; 
        List<Float> floatNumbs = new ArrayList<>();
        List<String> items = Arrays.asList(dataValues.split("\\s*,\\s*"));
        for(String s : items) 
        	floatNumbs.add(Float.valueOf(s));
        if(!floatNumbs.isEmpty()) {
            for (Float numbs : floatNumbs) {
            mean += numbs;
            }
        }
        return mean / floatNumbs.size();		
	}
	/* This method calculates the standard deviation of ten numbers. */
	public double calcStdDev(String dataValues, Float mean){
        double sum = 0;
        double stdDev = 0;
        String numbers[] = dataValues.split(",");
        for (int i = 0; i < numbers.length; i++) 
            sum = Math.pow((Integer.parseInt(numbers[i]) - mean), 2);
        sum = sum / numbers.length;
        stdDev = Math.sqrt(sum);
        return stdDev;
	}
}
