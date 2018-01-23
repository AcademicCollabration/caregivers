<?php

$myFile = "../getfiles/parameters.json";



if (PHP_OS !== 'WINDOWS')
{
    exec(sprintf('rm -rf %s', $myFile));
}
else
{
    exec(sprintf('rd /s /q %s', $myFile));
}

$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_POST["result"];
echo $stringData;
fwrite($fh, $stringData);
fclose($fh)
?>