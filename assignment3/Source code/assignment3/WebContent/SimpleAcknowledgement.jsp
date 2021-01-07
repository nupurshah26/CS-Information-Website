<!-- If the mean was less than 90, the servlet forwards request to SimpleAcknowledgement JSP using the RequestDipatcher object. The
SimpleAcknowdedgementJSP simply thanks the user for filling out the form and prints mean and standard deviation on the page accessing the data from DataBean.  -->
<%@page import="managedBean.DataBean"%>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/custom.css" />
<title>Simple Acknowledgment</title>
</head>
<body>
	<header>
		<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
        <span>Department of Computer Science</span>
    </header>
    <div class="cs-content">
	<h2>Thank you for filling out the form!</h2>
	<h3>Your form has been submitted successfully.</h3>
	<%  DataBean dataBean = new DataBean();
	    dataBean = (DataBean) request.getAttribute("data_bean1");
	%>
	<!-- Display mean and standard deviation and student ids -->
	<p> Mean: <%=request.getAttribute("mean")%> </p>
	<p>	Standard Deviation: <%=request.getAttribute("stdDev")%> </p>
	<form id="SimpleAck" method="get" action="MyServlet">
		<table class="cs-container cs-table">
		<caption class="cs-container cap-heading">Student Data</caption>
		<thead class="tablehead">
			<tr>
				<th>Student IDs</th>
			</tr>
		</thead>
		<% ArrayList<String> std = (ArrayList<String>)request.getAttribute("id_jsp"); 
		for(String s:std){%>
		<tr>
			<td><a name="id1" href="MyServlet?param=<%=s%>"><%=s%></a></td>
		</tr>
			<%}%>
		</table>
	</form>
	</div>
	<footer>
		<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
    </footer>
</body>
</html>