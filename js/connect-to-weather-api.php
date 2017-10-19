<?php
// For PHP 5 and up
$handle = fopen("url://api.json", "r");
$contents = stream_get_contents($handle);
echo $contents;
fclose($handle);
?>