function renderPatientCards() {
    const container = document.getElementById('patient-cards');
    container.innerHTML = '';
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    patients.forEach(function(patient) {
        const card = document.createElement('div');
        card.classList.add('patient-card');
        card.innerHTML = '<img src="/th.jfif">' + '<div class="info">' +
            '<h3>' + patient.fullName + '</h3>' +
            '<p>Date of Birth: ' + patient.dob + '</p>' +
            '<p>Gender: ' + patient.gender + '</p>' +
            '<p>Phone: ' + patient.phone + '</p>' +  '</div>';
        container.appendChild(card);
    });
}

function render() {
    const patient = {
        fullName: document.getElementById('fullname').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        phone: document.getElementById('phone').value
    };

    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
}

function handleSubmitForm(event) {
    render();
    renderPatientCards();
    document.getElementById('patient-info-form').reset();
    event.preventDefault();
}

function handleClearCards(event) {
    localStorage.removeItem('patients');
    renderPatientCards();
}

window.onload = function() {
    renderPatientCards();

    document.getElementById('patient-info-form').addEventListener('submit', handleSubmitForm);

    document.getElementById('clear-cards-button').addEventListener('click', handleClearCards);
};
