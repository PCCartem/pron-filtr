<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require "vendor/autoload.php";
require_once "par/ActiveRecord.php";

\ActiveRecord\Config::initialize(function($cfg)
 {
     $cfg->set_model_directory('C:\OpenServer\domains\pf.loc\models');
     $cfg->set_connections(array(
         'development' => 'mysql://root:@localhost/pf'));
 });
$app = new \App\Brut();
$app->getCatsUrls();
