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

$to      = 'tinashe@taysautomation.com';
$subject = "New Enquiry from $firstName $lastName – $service";

$body  = "You have received a new enquiry via the TAYS Automation website.\n\n";
$body .= "Name:    $firstName $lastName\n";
$body .= "Email:   $email\n";
$body .= "Phone:   $phone\n";
$body .= "Company: $company\n";
$body .= "Service: $service\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: noreply@taysautomation.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
