import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import javax.servlet.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Statement;
import javax.servlet.http.HttpSession;
import managedBean.*;
import dao.*;


/**
 * @author Nupur Shah
 *
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	/**
     * @see HttpServlet#HttpServlet()
     */
    public MyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String[] studentID = request.getParameterValues("param");
        StudentDao stdDao = new StudentDao();
        studentBean stdBean = stdDao.retriveForm(studentID[0]);
        HttpSession session = request.getSession();
        session.setAttribute("studentdetails", stdBean);
        request.setAttribute("std", stdBean);
        String address;
        if (stdBean != null) { //If student details found
                address = "Student.jsp";
        } else {
                address = "NoSuchStudent.jsp";
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher(address);
        dispatcher.forward(request, response);
                
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doGet(request, response);
		StudentDao stDao = new StudentDao();
        stDao.saveForm(request);
        
        float mean;
        double stdDev;
        String dataValues = request.getParameter("data");
        DataProcessor dataProc = new DataProcessor();
        mean = dataProc.calcMean(dataValues);
        stdDev = dataProc.calcStdDev(dataValues, mean);
        DataBean dtaBean = new DataBean();
        dtaBean.setMean(mean);
        dtaBean.setStdDev(stdDev);
        
		String ids= "";
		Statement statement = null;
		try {
			Connection con = DriverManager.getConnection("jdbc:oracle:thin:@artemis.vsnet.gmu.edu:1521/vse18c.vsnet.gmu.edu", "nshah23", "thoaptoa");
            String selectSql = "SELECT STDID from STUDENT";  
            statement = con.createStatement();
            ResultSet rs = statement.executeQuery(selectSql);
            while (rs.next()) { //Display student ids
            	ids = ids + rs.getString(1) + ",";
            }
            con.close();
            
	} catch(SQLException sqe) {
		Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "SQLException occured.", sqe);
	} catch(Exception e) {
		Logger.getLogger(StudentDao.class.getName()).log(Level.SEVERE, "Exception occured.", e);
	}
		String[] ids_list = ids.split(",");
        ArrayList<String> std = new ArrayList<String>();
        for(String id:ids_list){
            std.add(id);
        }
        request.setAttribute("id_jsp", std);
        
        HttpSession session = request.getSession();
        session.setAttribute("data_bean1", dtaBean);
        String address1;
        if (dtaBean.getMean() >= 90) {		//If mean is greater than or equal to 90
            request.setAttribute("mean", dtaBean.getMean());
            request.setAttribute("stdDev", dtaBean.getStdDev());
            address1 = "WinnerAcknlowledgement.jsp";
        } else { //If mean is less than 90
            request.setAttribute("mean", dtaBean.getMean());
            request.setAttribute("stdDev", dtaBean.getStdDev());
            address1 = "SimpleAcknowledgement.jsp";
        }
        RequestDispatcher dispatch = request.getRequestDispatcher(address1);
        dispatch.forward(request, response);
	}

}
