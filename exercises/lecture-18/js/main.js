'use strict';

// Example profile data
const profiles = [
  {
    pictureUrl: "img/adna_mask.jpg",
    name: "Edna Mask",
    jobTitle: "Software Engineer",
    description: "Experienced in developing scalable web applications.",
  },
  {
    pictureUrl: "img/peter_cat.jpg",
    name: "Peter Cat",
    jobTitle: "Product Manager",
    description: "Guides product vision, strategy, and success.",
  },
  {
    pictureUrl: "img/grace_picasso.jpg",
    name: "Grace Picasso",
    jobTitle: "UX Designer",
    description: "Passionate about creating user-friendly designs.",
  },
];

// Template element for profile card
const profileCardTemplate = document.getElementById('profile-card-template');
const profileCardsContainer = document.getElementById('profile-cards-container');

// Function to render the profile cards
function renderProfileCards() {
  profiles.forEach(profile => {
    // Clone the template
    const profileCard = profileCardTemplate.content.cloneNode(true);

    // Populate the card with profile data
    const profilePicture = profileCard.querySelector('.profile-picture');
    const profileTitle = profileCard.querySelector('.profile-title');
    const profileJobTitle = profileCard.querySelector('.profile-job-title');
    const profileDescription = profileCard.querySelector('.profile-description');

    profilePicture.src = profile.pictureUrl;
    profileTitle.textContent = profile.name;
    profileJobTitle.textContent = profile.jobTitle;
    profileDescription.textContent = profile.description;

    // Append the profile card to the container
    profileCardsContainer.appendChild(profileCard);
  });
}

// Render all profile cards when the page loads
document.addEventListener('DOMContentLoaded', renderProfileCards);
