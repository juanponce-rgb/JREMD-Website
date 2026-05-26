JREMD Technologies — Image Folder Guide
========================================

LOGO:
  Place your logo file as: logo.png
  (in the root folder, same level as index.html)
  Recommended: PNG with transparent background, min 200px tall

CLIENT LOGOS (images/clients/):
  mamou-logo.png
  din-tai-fung-logo.png
  maxs-logo.png
  meycauayan-doctors-logo.png
  (Add more as needed — PNG with transparent bg preferred)

WORKS / PROJECT PHOTOS (images/works/):
  cctv-restaurant-1.jpg
  cctv-hospital-1.jpg
  solar-commercial-1.jpg
  solar-residential-1.jpg
  fire-alarm-hotel-1.jpg
  biometrics-office-1.jpg
  pabx-hospital-1.jpg
  lan-office-1.jpg
  (Add photos from your actual installations)

HOW TO CONNECT PHOTOS:
  In works.html, find each work-card and replace:
    <div class="work-ph">...</div>
  with:
    <img src="images/works/your-photo.jpg" alt="Description">
  
  In clients.html, inside each .cli-logo-wrap, add:
    <img src="images/clients/client-logo.png" alt="Client Name">
