<?php
$daysy = $_POST['daysy'];
$daysn = $_POST['date'];
$summn1 = $_POST['summ1'];
$depositTerm = $_POST['depositTerm'];
$select = $_POST['select'];
$summadd = $_POST['summadd'];
if($select == 0)
  $summadd = 0;
$summn = $summn1 + ($summn1 + $summadd) * $daysn * (0.1 / $daysy * $depositTerm);
$result = substr($summn, 0, -6);
$ans= array(
  'answer' => '<span>Результат:</span> '.$result. " руб.",
);
echo json_encode($ans);