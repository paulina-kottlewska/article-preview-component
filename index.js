// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const shareDiv = document.querySelector('.share-div');
    const shareIcon = document.querySelector('.share-icon')
    const user = document.querySelector('.user');
    const profile = document.querySelector('.profile');
    const profileShare = document.querySelector('.profile-share');

    shareDiv.addEventListener('click', () => {
        // Toggle classes to add css styling
        shareDiv.classList.toggle('share-active');
        shareIcon.classList.toggle('share-icon-active');
        user.classList.toggle('user-share');
        profile.classList.toggle('desktop-active');
        profileShare.classList.toggle('hidden');
    })
})
