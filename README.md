nightwatch-skeleton
===================

Skeleton project for getting up and running quickly with Nightwatch for Selenium testing.

# Using this skeleton
To use this skeleton to write your own Nightwatch tests you need have a machine (mostly Mac/Linux friendly here) with Node, NPM, and Java installed and running.

This downloads the packaged archive, unzips it, and removes the zip file. Next up, install our dependencies.

	npm install
	npm install -g nightwatch

# Default environments
The default environment for this Nightwatch config is Chrome. The nightwatch.json file defines our environments. Other available ones include Firefox and Safari. You can specify your environment with the -e flag to nightwatch.

	./nightwatch -e default,firefox,safari
