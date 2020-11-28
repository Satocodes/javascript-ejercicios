<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Consulta a la base de datos</title>
</head>

<body>
    <!-- php opcional para consultar la base de datos-->
<?php
include ("../conect.php");

$result = mysqli_query( $conexion, "SELECT * FROM aladiluir");

?>

<table width="758" border = '1'>

<tr>

<td width="93"><b>User ID</b></td>
<td width="192"><b>Nombre</b></td>
<td width="142"><b>Apellido</b></td>
<td width="137"><b>Email</b></td>
<td width="50"><b>Fecha de nac</b></td>
<td width="104"><b>Te gusto el nuevo ala para diluir</b></td>
<td width="104"><b>como lo conociste</b></td>
<td width="104"><b>Si respondiste otro cual</b></td>
<td width="104"><b>por que razon lo elegiste</b></td>
<td width="104"><b>fueron claras las instrucciones</b></td>
<td width="104"><b>lo volverias a comprar</b></td>
<td width="104"><b>en caso que la respuesta haya sido que no xq</b></td>
<td width="104"><b>sugerencia</b></td>
<td width="104"><b>mayor18</b></td>
<td width="104"><b>allowbrand</b></td>
<td width="104"><b>allowglobal</b></td>
<td width="104"><b>byc</b></td>

</tr>

<?php
while ($row = mysqli_fetch_row($result)){
?>
<tr>

<td><?php echo $row[0]; ?></td>
<td><?php echo $row[1]; ?></td>
<td><?php echo $row[2]; ?></td>
<td><?php echo $row[3]; ?></td>
<td><?php echo $row[4]; ?></td>
<td><?php echo $row[5]; ?></td>
<td><?php echo $row[6]; ?></td>
<td><?php echo $row[7]; ?></td>
<td><?php echo $row[8]; ?></td>
<td><?php echo $row[9]; ?></td>
<td><?php echo $row[10]; ?></td>
<td><?php echo $row[11]; ?></td>
<td><?php echo $row[12]; ?></td>
<td><?php echo $row[13]; ?></td>
<td><?php echo $row[14]; ?></td>
<td><?php echo $row[15]; ?></td>
<td><?php echo $row[16]; }?></td>


</tr>

</table>


</body>
</html>
