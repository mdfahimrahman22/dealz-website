<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'New Form Submission',
    'email_message' => 'You have a new form submission',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => '',
    'to' => '',
    'toCopy' => '',
    'toHiddenCopy' => ''
    ),
    'fields' => array(
    'store-address' => array(
    'order' => 1,
    'type' => 'string',
    'label' => 'Store Address',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Store Address\' is required.'
    )
    ),
    'floor' => array(
    'order' => 2,
    'type' => 'string',
    'label' => 'Floor &#x2F; Suite (Optional)',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Floor &#x2F; Suite (Optional)\' is required.'
    )
    ),
    'store-name' => array(
    'order' => 3,
    'type' => 'string',
    'label' => 'Store Name',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Store Name\' is required.'
    )
    ),
    'brand-name' => array(
    'order' => 4,
    'type' => 'string',
    'label' => 'Brand Name',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Brand Name\' is required.'
    )
    ),
    'business-type' => array(
    'order' => 5,
    'type' => 'string',
    'label' => 'Business Type',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Business Type\' is required.'
    )
    ),
    'name' => array(
    'order' => 6,
    'type' => 'string',
    'label' => 'Full Name',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Full Name\' is required.'
    )
    ),
    'email' => array(
    'order' => 7,
    'type' => 'email',
    'label' => 'Email',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Email\' is required.'
    )
    ),
    'phone-number' => array(
    'order' => 8,
    'type' => 'string',
    'label' => 'Phone Number',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Phone Number\' is required.'
    )
    ),
    'agree' => array(
    'order' => 9,
    'type' => 'checkbox',
    'label' => 'I agree to the Terms and Conditions',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'I agree to the Terms and Conditions\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>