// JavaScript Anda di sini
function loadAttendance() {
  const attendees = JSON.parse(localStorage.getItem('attendance')) || [];
  const attendeesList = document.getElementById('attendees');
  attendeesList.innerHTML = ''; // Kosongkan daftar sebelum memuat
  attendees.forEach(attendee => {
      let newAttendee = document.createElement('p');
      newAttendee.innerHTML = `<strong>${attendee.name}:</strong> ${attendee.present ? 'Akan hadir' : 'Tidak bisa hadir'}`;
      attendeesList.appendChild(newAttendee);
  });
}

window.onload = loadAttendance;

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = this.elements['nama'].value;
  let present = this.elements['hadir'].value === 'yes';

  if (name.trim()) {
      const attendees = JSON.parse(localStorage.getItem('attendance')) || [];
      attendees.push({ name: name, present: present });
      localStorage.setItem('attendance', JSON.stringify(attendees));

      let attendeesList = document.getElementById('attendees');
      let newAttendee = document.createElement('p');
      newAttendee.innerHTML = `<strong>${name}:</strong> ${present ? 'Akan hadir' : 'Tidak bisa hadir'}`;
      attendeesList.appendChild(newAttendee);

      this.reset();
  }
});

// Fungsi untuk menampilkan section saat di-scroll
function revealSections() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 100) { // Jika section sudah terlihat
          section.classList.add('visible'); // Tambahkan kelas visible
      }
  });
}

// Menjalankan fungsi saat halaman di-scroll
window.addEventListener('scroll', revealSections);
// Memanggil fungsi untuk menampilkan section yang sudah terlihat saat halaman dimuat
window.onload = revealSections;

// Fungsi untuk menampilkan section saat di-scroll
function revealSections() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 100) { // Jika section sudah terlihat
          section.classList.add('visible'); // Tambahkan kelas visible
      }
  });
}

// Menjalankan fungsi saat halaman di-scroll
window.addEventListener('scroll', revealSections);
// Memanggil fungsi untuk menampilkan section yang sudah terlihat saat halaman dimuat
window.onload = revealSections;
