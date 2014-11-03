#Hilary's Library Collection App


##Installation
- $ git clone https://github.com/hilarybarr/AngularLib1.git
- $ git clone https://github.com/hilarybarr/SymfonyLibrary1.git
- In terminal:
- Shell 1: $ mongod
- Shell 2: $ cd SymfonyLibrary1 
-   If you have PHP 5.4 and up (and thus can PHP's built-in server): $ php app/console server:run
-   Otherwise you may want to try the following and update the routes specified in the Angular controller accordingly: 
-   $ php composer.phar self-update
$ php composer.phar install --dev --prefer-dist
$ php vendor/sensio/distribution-bundle/Sensio/Bundle/DistributionBundle/Resources/bin/build_bootstrap.php app/
$ php app/console assets:install --symlink web
$ php app/console assetic:dump --env=prod --no-debug
$ php app/console assetic:dump --env=dev
$ mkdir app/cache
$ mkdir app/logs
$ sudo sh -c "php app/console cache:clear --env=prod && php app/console cache:clear --env=dev && sudo chmod -R a+w app/cache app/logs"

- Open the Angular index.html in your browser.


