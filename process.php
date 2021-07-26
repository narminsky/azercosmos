$recaptcha = new Quform_Element('g-recaptcha-response', 'reCAPTCHA');
$recaptcha->addValidator('required');
$recaptcha->addValidator('recaptcha', array('secretKey' => '6LefO70bAAAAAJJm4Xz1rgQdHlzfOiNLkHEE5jad'));
$recaptcha->setIsHidden(true);
$form->addElement($recaptcha);