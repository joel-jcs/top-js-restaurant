const HomePage = (() => {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = "EXQUISITELY GOOD";


    const bannerImage = document.createElement('img');
    bannerImage.src = "https://img2.rtve.es/v/6897051?w=1600&preview=1684846584492.jpg";

    const descriptionText = document.createElement('p');
    descriptionText.textContent = "Our homemade Tiramisu will melt in your mouth!";

    content.appendChild(heading);
    content.appendChild(bannerImage);
    content.appendChild(descriptionText);


    return content;
})();

export default content;