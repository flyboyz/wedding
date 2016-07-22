<?php
	mysql_connect('localhost', 'flyboyz', 'flyboyzzz1') or die('Could not connect: ' . mysql_error());
	mysql_select_db('flyboyz') or die('Не могу выбрать базу данных');

	$query = "INSERT INTO `flyboyz`.`emails` (`id`, `email`, `date`) VALUES (NULL, '" . $_POST['email'] . "', '" . date("d.m.y H:m:s") . "');";
	$result = mysql_query($query) or die('Query failed: ' . mysql_error());
/*
	$query = "SELECT * from emails";
	$result = mysql_query($query) or die('Query failed: ' . mysql_error());
	 
	# Фильтрация строк и вывод нужной информации
	while ($row = mysql_fetch_object($result)) {
	    echo '<br>' . $row->email . ' -> ' . $row->date;
	}

*/
?>