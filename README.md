# WebClient - The Growers' Nation Web Client

## Technologies

* HTML5 + JavaScript
* Dojo - web framework for manipulating HTML

## Getting started

Begin by installing apache (or another webserver that supports a cross domain proxy):

    sudo apt-get install apache2

Now add a virtual host for your Growers' Nation site. Under Ubuntu this can be achieved by creating a new site configuration file. Start by copying the default configuration:

    sudo cp /etc/apache2/sites-available/default /etc/apache2/sites-available/growersnation

and change the ```DocumentRoot``` to the directory containing your WebClient git clone. Now add the following to the bottom of ```/etc/apache2/sites-available/growersnation``` to enable some requests to be forwarded to the google maps api webserver:

    <IfModule mod_proxy.c>
    ProxyRequests Off
    <Proxy *>
    Order deny,allow
    Allow from all
    </Proxy>
    SSLProxyEngine on
    ProxyPass /maps https://maps.googleapis.com/maps
    ProxyPassReverse /maps https://maps.googleapis.com/maps
    </IfModule>

Enable the ```ssl```, ```proxy```, ```proxy_connect``` and ```proxy_http``` apache modules:

    sudo a2enmod ssl proxy proxy_connect proxy_http

Finally, enable your site and reload your apache config using:

    sudo a2ensite growersnation
    sudo service apache2 reload

and browse to http://127.0.1.1/WebClient/src/index_dev.html.

## Making changes

In general the project uses the "master-develop" branching strategy with Issues acting as branch names. This means that the latest release candidate is the head of `develop` and the current production release is the head of `master`.

## Deployment

The project is deployed using a git repo push which triggers a build script on the server. You can only push if you
have the access credentials for the machine.

Assuming that you have set up your repository appropriately (see later) then you can deploy using this command:
```
$ git push production +master:refs/heads/master
```
[Read more about deploying static site with git](http://gary-rowe.com/agilestack/2012/12/14/how-to-deploy-static-sites-with-git).
