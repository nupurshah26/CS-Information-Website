/**
 * The DataBean has two attributes to hold the mean and standard deviation.
 */
package managedBean;

/**
 * @author Nupur Shah
 *
 */
public class DataBean {
	private float mean;
	private double stddev;
	
	public float getMean() {
		return mean;
	}
	public void setMean(float mean) {
		this.mean = mean;
	}
	
	public double getStdDev() {
		return stddev;
	}
	public void setStdDev(double stddev) {
		this.stddev = stddev;
	}
}
