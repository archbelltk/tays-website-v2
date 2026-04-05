<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$firstName  = htmlspecialchars(trim($data['firstName'] ?? ''));
$lastName   = htmlspecialchars(trim($data['lastName'] ?? ''));
$email      = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone      = htmlspecialchars(trim($data['phone'] ?? ''));
$company    = htmlspecialchars(trim($data['company'] ?? ''));
$service    = htmlspecialchars(trim($data['service'] ?? ''));
$message    = htmlspecialchars(trim($data['message'] ?? ''));

if (!$firstName || !$lastName || !$email || !$message || !$service) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'archbell1maunganidze@gmail.com';
$subject = "New Enquiry from $firstName $lastName – $service";

$body  = "You have received a new enquiry via the TAYS Automation website.\n\n";
$body .= "Name:    $firstName $lastName\n";
$body .= "Email:   $email\n";
$body .= "Phone:   $phone\n";
$body .= "Company: $company\n";
$body .= "Service: $service\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: TAYS Automation <tinashe@taysautomation.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    // Acknowledgement to the user
    $ackSubject = "We've received your enquiry – TAYS Automation";
    $ackBody  = "Dear $firstName,\n\n";
    $ackBody .= "Thank you for getting in touch with TAYS Automation.\n\n";
    $ackBody .= "We have received your enquiry regarding \"$service\" and a member of our team will be in touch within 24 hours.\n\n";
    $ackBody .= "For urgent matters, you can reach us at:\n";
    $ackBody .= "  Email: tinashe@taysautomation.com\n";
    $ackBody .= "  Phone: +44 330 133 5282\n\n";
    $ackBody .= "Kind regards,\n";
    $ackBody .= "The TAYS Automation Team\n";
    $ackBody .= "www.taysautomation.com\n";

    $ackHeaders  = "From: TAYS Automation <tinashe@taysautomation.com>\r\n";
    $ackHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($email, $ackSubject, $ackBody, $ackHeaders);

    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
