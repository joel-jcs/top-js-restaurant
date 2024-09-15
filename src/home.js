const HomePage = (() => {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = "EXQUISITELY GOOD";
    heading.id = 'banner-heading';

    const bannerImage = document.createElement('img');
    bannerImage.src = "https://img2.rtve.es/v/6897051?w=1600&preview=1684846584492.jpg";
    bannerImage.id = 'homepage-banner';

    const descriptionText = document.createElement('p');
    descriptionText.textContent = "Our homemade Tiramisu will melt in your mouth!";
    descriptionText.id = 'banner-text';

    content.appendChild(heading);
    content.appendChild(bannerImage);
    content.appendChild(descriptionText);


    return content;
})();

export default content;