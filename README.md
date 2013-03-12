# WebClient - The Growers' Nation Web Client

## Technologies

* HTML5 + JavaScript
* Dojo - web framework for manipulating HTML

## Getting started

Start a web server using the `src` directory as your base with this handy python command

```
python -m SimpleHTTPServer 8080
```
then navigate to `localhost:8080` to see the site. Any changes you make will be instantly reflected upon a refresh.

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
