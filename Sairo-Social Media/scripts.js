document.addEventListener('DOMContentLoaded', () => {
    showSection('profile');
});

function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

function saveProfile() {
    const profilePicture = document.getElementById('edit-profile-picture').files[0];
    const username = document.getElementById('edit-username').value;
    const bio = document.getElementById('edit-bio').value;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-picture').src = e.target.result;
        };
        reader.readAsDataURL(profilePicture);
    }

    document.getElementById('username-display').textContent = username;
    document.getElementById('bio').textContent = bio;
}

function changeTheme() {
    const theme = document.getElementById('theme-select').value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
}

function changeLanguage() {
    const language = document.getElementById('language-select').value;
    alert(Language changed to ${language});
}

function saveSettings(event) {
    event.preventDefault();
    const emailNotifications = document.getElementById('email-notifications').checked;
    const smsNotifications = document.getElementById('sms-notifications').checked;
    alert(Settings saved. Email Notifications: ${emailNotifications}, SMS Notifications: ${smsNotifications});
}

function likePost(button) {
    button.innerText = 'Liked';
}

function commentPost(button) {
    const commentText = prompt('Enter your comment:');
    if (commentText) {
        const post = button.parentElement;
        let commentSection = post.querySelector('.comments');
        if (!commentSection) {
            commentSection = document.createElement('div');
            commentSection.className = 'comments';
            post.appendChild(commentSection);
        }
        const newComment = document.createElement('p');
        newComment.innerText = commentText;
        commentSection.appendChild(newComment);
    }
}
