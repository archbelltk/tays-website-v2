<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$firstName   = htmlspecialchars(trim($_POST['firstName'] ?? ''));
$lastName    = htmlspecialchars(trim($_POST['lastName'] ?? ''));
$email       = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone       = htmlspecialchars(trim($_POST['phone'] ?? ''));
$position    = htmlspecialchars(trim($_POST['position'] ?? ''));
$coverLetter = htmlspecialchars(trim($_POST['coverLetter'] ?? ''));

if (!$firstName || !$lastName || !$email || !$position) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'it@imbahub.co.zw';
$subject = "New Job Application – $position – $firstName $lastName";

$boundary = md5(uniqid(time()));

$headers  = "From: noreply@taysautomation.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// Handle CV attachment
$hasCV = isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK;

if ($hasCV) {
    $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    $fileType = mime_content_type($_FILES['cv']['tmp_name']);

    if (!in_array($fileType, $allowedTypes) || $_FILES['cv']['size'] > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid CV file. Use PDF or DOC/DOCX under 5MB.']);
        exit;
    }

    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $body  = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= "New job application received via the TAYS Automation website.\n\n";
    $body .= "Name:     $firstName $lastName\n";
    $body .= "Email:    $email\n";
    $body .= "Phone:    $phone\n";
    $body .= "Position: $position\n\n";
    $body .= "Cover Letter:\n$coverLetter\n\n";
    $body .= "--$boundary\r\n";

    $fileName    = basename($_FILES['cv']['name']);
    $fileContent = chunk_split(base64_encode(file_get_contents($_FILES['cv']['tmp_name'])));
    $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
    $body .= "$fileContent\r\n";
    $body .= "--$boundary--";
} else {
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body  = "New job application received via the TAYS Automation website.\n\n";
    $body .= "Name:     $firstName $lastName\n";
    $body .= "Email:    $email\n";
    $body .= "Phone:    $phone\n";
    $body .= "Position: $position\n\n";
    $body .= "Cover Letter:\n$coverLetter\n";
    $body .= "\nNote: No CV was attached.\n";
}

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send application']);
}
