<!-- No Such Student JSP informs the user that no student was found with matching StudentID -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/custom.css" />
<title>No Such Student</title>
</head>
<body>
	<header>
		<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
        <span>Department of Computer Science</span>
    </header>
    <!-- Display no student was found -->
	<h1 class="cs-content">There is no such student.</h1>
	<footer>
		<a href="https://www2.gmu.edu/" target="_blank" class="mason-logo"><img src="images/mason-logo.png" alt="Mason Logo"></a>
    </footer>
</body>
</html>