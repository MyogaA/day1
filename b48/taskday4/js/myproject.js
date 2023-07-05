// Mengambil referensi dari id HTML
const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('projectname');
const startDateInput = document.getElementById('startdate');
const endDateInput = document.getElementById('enddate');
const descriptionInput = document.getElementById('message');
const imageInput = document.getElementById('input-img');
const projectCards = document.getElementById('project-card');

// Array untuk menyimpan data project
const projects = [];

// Event listener saat form disubmit
projectForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari form
    const projectName = projectNameInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const description = descriptionInput.value;
    const imageFile = imageInput.files[0];

    // untuk membaca berkas gambar dan mengubahnya menjadi URL
    const reader = new FileReader();
    reader.onload = function () {
        const imageUrl = reader.result;

        // Mengambil nilai dan data dari checkbox
        const nodejs = document.getElementById('nodejs').checked ? '<i class="fa-brands fa-node-js"></i>' : '';
        const Reactjs = document.getElementById('reactjs').checked ? '<i class="fa-brands fa-react"></i>' : '';
        const nextjs = document.getElementById('nextjs').checked ? '<i class="fa-brands fa-android"></i>' : '';
        const typescript = document.getElementById('typescript').checked ? '<i class="fa-brands fa-java"></i>' : '';

        // Membuat objek data project baru
        const newProject = {
            projectName: projectName,
            startDate: startDate,
            endDate: endDate,
            description: description,
            imageUrl: imageUrl,
            technologies: [nodejs, Reactjs, nextjs, typescript].filter(icon => icon !== '')
        };

        // Menambahkan data project baru ke dalam array projects
        projects.push(newProject);

        // Menampilkan semua data proyek menggunakan innerHTML dan loop
        projectCards.innerHTML = '';
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            projectCards.innerHTML += `
        <div class="card-item">
          <div class="project-image">
            <img src="${project.imageUrl}" alt="">
          </div>
          <div class="text-content">
            <h4 style="float: left; padding-left: 20px;"><a style="text-decoration: none; color: black;" href="detail.html">${project.projectName}</a></h4>
            <small>${project.startDate} - ${project.endDate}</small>
            <p>${project.description}</p>
          </div>
          <div class="logo-bahasa">
            ${project.technologies.join('')}
          </div>
          <div class="btn-project">
            <button type="button" class="btn1">edit</button>
            <button type="button" class="btn2">delete</button>
          </div>
        </div>
      `;
        }

        // Mengosongkan ulang nilai input form setelah data ditampilkan
        projectNameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        descriptionInput.value = '';
        imageInput.value = '';

        // Mengosongkan URL objek saat gambar tidak lagi diperlukan
        URL.revokeObjectURL(imageUrl);
    };
    reader.readAsDataURL(imageFile);
});
