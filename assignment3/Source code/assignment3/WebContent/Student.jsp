<!-- StudentJSP using RequestDispatcher object to display the student data to the user. The structure of the StudentJSP page for the retrieved data could be similar to the Survey Form in a read only format.  -->
<%@page import="managedBean.studentBean"%>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/custom.css" />
<title>Student Survey Details</title>
</head>
<body>
	<header>
		<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
	    <span>Department of Computer Science</span>
	</header>
	<!-- Display students survey records -->
	<table class="cs-container cs-table cs-content">
		<caption class="cs-container cap-heading">Student Survey Records</caption>
		<%	studentBean std = new studentBean();
			std = (studentBean) request.getAttribute("std");
		%>
		<tr>
			<td>Student ID</td>
			<td><%=std.getStdid() %></td>
		</tr>
		<tr>
			<td>Name</td>
			<td><%=std.getUsername() %></td>
		</tr>
		<tr>
			<td>Street Address</td>
			<td><%=std.getStreet() %></td>
		</tr>
		<tr>
			<td>City</td>
			<td><%=std.getCity() %></td>
		</tr>
		<tr>
			<td>State</td>
			<td><%=std.getState() %></td>
		</tr>
		<tr>
			<td>Zip</td>
			<td><%=std.getZip() %></td>
		</tr>
		<tr>
			<td>Telephone</td>
			<td><%=std.getTelephone() %></td>
		</tr>
		<tr>
			<td>Email</td>
			<td><%=std.getMail() %></td>
		</tr>
		<tr>
			<td>URL</td>
			<td><%=std.getUrl() %></td>
		</tr>		
		<tr>
			<td>Interested in the university because</td>
			<td><%=std.getIntrestinuni() %></td>
		</tr>
		<tr>
			<td>Additional Comments</td>
			<td><%=std.getAdditionalcomments() %></td>
		</tr>
		<tr>
			<td>High-school graduation month-year</td>
			<td><%=std.getHighschlgradmonth() %>&nbsp;<%=std.getHighschlgradyear() %></td>
		</tr>
		<tr>
			<td>Recommending this school to other students</td>
			<td><%=std.getRecos() %></td>
		</tr>
	</table>
	<footer>
			<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
	</footer>
</body>
</html>