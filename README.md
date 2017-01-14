# ExampleJsComponent3 module for Magento 2
This repository contains a Magento 2 module that illustrates the usage
of RequireJS and a simple JS component, that demonstrates how JS components
can load their configuration.

## Installation
To install use the following composer command:

    composer require yireo/test-js-component3:dev-master

Next enable the module:

    bin/magento module:enable Yireo_ExampleJsComponent3
    bin/magento setup:upgrade

And flush the cache:

    bin/magento cache:clean

# Proof of concept
After installing the module, the main container should contain a box that is updated via the JS component,
displaying the text from the Block class.

Optionally switch between the PHTML templates by modifying the Block class `$_template` variable.
