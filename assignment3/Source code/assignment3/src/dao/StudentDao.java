/**
 * The StudentDao encapsulates code to store and retrieve the Survey data into/from a database. 
 * It provides two methods: one to save the Student Survey Form data to a database table and another to retrieve the survey information from the database.
 */
package dao;

/**
 * @author Nupur Shah
 *
 */
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

import managedBean.studentBean;

/**
 * Servlet implementation class StudentDao
 */
@WebServlet("/StudentDao")
public class StudentDao {
	/* This method is used to save the Student Survey Form data to a database table */
	public void saveForm(HttpServletRequest request) {
		String username = request.getParameter("username");
		String stdid = request.getParameter("stdid");
		String street = request.getParameter("street");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String zip = request.getParameter("zip");
		String telephone = request.getParameter("telephone");
		String mail = request.getParameter("mail");
		String url = request.getParameter("websiteaddress");		
		String intrestinuni = request.getParameter("intrestinuni");
		String highschlgradmonth = request.getParameter("highschlgradmonth");
		String highschlgradyear = request.getParameter("highschlgradyear");
		String recos = request.getParameter("recos");
		String additionalcomments = request.getParameter("additionalcomments");
		
		studentBean studentBean = new studentBean();
		studentBean.setUsername(username);
		studentBean.setStdid(stdid);
		studentBean.setStreet(street);
		studentBean.setCity(city);
		studentBean.setState(state);
		studentBean.setZip(zip);
		studentBean.setTelephone(telephone);
		studentBean.setMail(mail);
		studentBean.setUrl(url);		
		studentBean.setIntrestinuni(intrestinuni);
		studentBean.setHighschlgradmonth(highschlgradmonth);
		studentBean.setHighschlgradyear(highschlgradyear);
		studentBean.setRecos(recos);
		studentBean.setAdditionalcomments(additionalcomments);
		
		try{
			// Registering database driver
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@artemis.vsnet.gmu.edu:1521/vse18c.vsnet.gmu.edu", "nshah23", "thoaptoa");
			// Insert data to the database table 
			String insertTableSql = "INSERT INTO STUDENT" + "(STDID, USERNAME, STREET, CITY, STATE, ZIP, TELEPHONE, EMAIL, URL, INTINUNI, HIGHSCHLGRADMONTH, HIGHSCHLGRADYEAR, RECOS, COMMENTS) VALUES" + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			try (PreparedStatement preparedStmt = con.prepareStatement(insertTableSql)) {
				preparedStmt.setString(1, studentBean.getStdid());
				preparedStmt.setString(2, studentBean.getUsername());
				preparedStmt.setString(3, studentBean.getStreet());
				preparedStmt.setString(4, studentBean.getCity());
				preparedStmt.setString(5, studentBean.getState());
				preparedStmt.setString(6, studentBean.getZip());
				preparedStmt.setString(7, studentBean.getTelephone());
				preparedStmt.setString(8, studentBean.getMail());
				preparedStmt.setString(9, studentBean.getUrl());
				preparedStmt.setString(10, studentBean.getIntrestinuni());
				preparedStmt.setString(11, studentBean.getHighschlgradmonth());
				preparedStmt.setString(12, studentBean.getHighschlgradyear());
				preparedStmt.setString(13, studentBean.getRecos());
				preparedStmt.setString(14, studentBean.getAdditionalcomments());
				preparedStmt.executeUpdate();
			}
			con.close();
 
		} // Handle errors for JDBC SQL exception
		catch(SQLException sqe) {
			Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "SQLException occured.", sqe);
		} // Handle all other exceptions 
		catch(Exception e) {
			Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "Exception occured.", e);
		}				
	}
	/**
	 * @param id
	 * @return
	 * This method is to retrieve the survey information from the database.
	 */
	public studentBean retriveForm(String id) {
		Statement stmt = null;
		studentBean stdBean = new studentBean();
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@artemis.vsnet.gmu.edu:1521/vse18c.vsnet.gmu.edu", "nshah23", "thoaptoa");
			id = "'"+id+"'";
			// Retrieving data from database
			String selectTableSql = "SELECT * from STUDENT WHERE STDID = " +id;
			stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(selectTableSql);
			
			while(rs.next()) {
				stdBean.setStdid(rs.getString("STDID"));
				stdBean.setUsername(rs.getString("USERNAME"));
				stdBean.setStreet(rs.getString("STREET"));
				stdBean.setCity(rs.getString("CITY"));
				stdBean.setState(rs.getString("STATE"));
				stdBean.setZip(rs.getString("ZIP"));
				stdBean.setTelephone(rs.getString("TELEPHONE"));
				stdBean.setMail(rs.getString("EMAIL"));
				stdBean.setUrl(rs.getString("URL"));				
				stdBean.setIntrestinuni(rs.getString("INTINUNI"));
				stdBean.setHighschlgradmonth(rs.getString("HIGHSCHLGRADMONTH"));
				stdBean.setHighschlgradyear(rs.getString("HIGHSCHLGRADYEAR"));
				stdBean.setRecos(rs.getString("RECOS"));
				stdBean.setAdditionalcomments(rs.getString("COMMENTS"));
			}
			stmt.close();
			con.close();
			
		} // Handle errors for JDBC SQL exception
		catch(SQLException sqe) {
			Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "SQLException occured.", sqe);
		} // Handle all other exceptions 
		catch(Exception e) {
			Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "Exception occured.", e);
		}
		return stdBean;
	}
}
