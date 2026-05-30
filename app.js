import data from './data/posts.js'

const plataformLogos = {
  instagram: './img/platform-logos/Instagram_icon.png',
  x: './img/platform-logos/twitter-x-icon.webp',
  youtube: './img/platform-logos/YouTube_full-color_icon_(2017).svg.png'
}

const postsSection = document.querySelector('.posts-section');

function renderPosts(data){
  postsSection.innerHTML = data.map(post => 
  `
      <div class="post">
            <div class="post-header">
              <div class="header-info">
                <img
                  class="pfp-img"
                  src="${post.img}"
                  alt="pfp"
                />
                <div class="names">
                  <p class="post-name">${post.teamName} ${post.tag ? '<span class="tag">New</span></p>' : ''}
                  <p class="at-name">@${post.atName}</p>
                </div>
              </div>
              <div class="social-media">
                <img
                  src=${plataformLogos[post.socialMedia.toLowerCase()]}
                  alt="social-media"
                />
                <p>${post.socialMedia}</p>
              </div>
            </div>

            <p class="post-text">
              ${post.postText}
            </p>

            <div class="footer-section">
              <div class="reactions">
                <p><i style="font-size: 16px" class="fa">&#xf08a;</i> ${post.likes}</p>
                <p><i style="font-size: 16px" class="fa">&#xf0e5;</i> ${post.comments}</p>
                <p><i style="font-size: 16px" class="fa">&#xf079;</i> ${post.shares}</p>
              </div>
              <p class="time">${post.time}</p>
            </div>
          </div>
  `
  ).join('');
}

renderPosts(data)

const filtersSection = document.querySelector('.filters-section')

const filtersButtonList = document.querySelectorAll('.filters-section button')

filtersSection.addEventListener('click',(e) => {
  const filterTeam = e.target.dataset.team;

  if(!filterTeam) return;

  filtersButtonList.forEach(btn => btn.classList.remove('btn-active'));
  e.target.classList.add('btn-active');

  const filteredData = filterTeam === 'all' ?
  data : data.filter(post => post.nameTag === filterTeam);

  if(filteredData.length === 0){
    postsSection.innerHTML = 
    `
    <p id="no-posts">No Posts Yet</p>
    `
  }
  else {
    renderPosts(filteredData)
  }
  
});

const header = document.querySelector('h1')

header.addEventListener('click', () => {
  filtersButtonList.forEach(btn => btn.classList.remove('btn-active'));
  renderPosts(data);
})

// TODO: light/dark mode - start with :root and .darkmode class with colors
const btnMode = document.querySelector('.btn-mode')
let lightMode = localStorage.getItem('lightmode')

const enableDarkMode = () => {
  document.body.classList.add('light-mode');
  localStorage.setItem('lightmode', 'active')
}
const disableDarkmode = () => {
  document.body.classList.remove('light-mode');
  localStorage.setItem('lightmode', null)
}

if(lightMode === 'active') enableDarkMode();

btnMode.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightmode')
  lightMode !== 'active' ? enableDarkMode() : disableDarkmode()
})

// TODO: finish hamburger menu for mobile

// TODO: add search bar to filter posts by keyword