<?php
namespace Yireo\ExampleJsComponent3\Block;

class Example extends \Magento\Framework\View\Element\Template
{
    protected $_template = 'example2.phtml';

    /**
     * @return string
     */
    public function getMessage() : string
    {
        return 'Output of PHP method getMessage()';
    }
}
