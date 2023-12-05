const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const form = document.querySelector("form");
const local = localStorage.setItem("dark", darkBtn);
let API = "https://api.github.com/users/";
darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  lightBtn.classList.remove("dsp");
  darkBtn.classList.add("dsp");
});

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  lightBtn.classList.add("dsp");
  darkBtn.classList.remove("dsp");
});
let api;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = form.search.value;
  let api1 = "https://api.github.com/users/" + inputVal;
  api = api1;
  mes(api);
});

async function mes(api) {
  const request = await fetch(api);
  const data = await request.json();
  updateUI(data);
}

function updateUI(data) {
  const xato = document.querySelector(".xato3");
  if (data.login) {
    xato.classList.add("dsc");
  } else {
    xato.classList.remove("dsc");
  }
  const userName = document.getElementById("user__name");
  const userLog = document.getElementById("user__log");
  const userImg = document.getElementById("user__img");
  const userA = document.getElementById("user__a");
  const userAbout = document.getElementById("user__about");
  const userRepos = document.getElementById("user__repos");
  const userFollowers = document.getElementById("user__followers");
  const userFollowing = document.getElementById("user__following");
  const userLoc = document.getElementById("user__loc");
  const userTwitter = document.getElementById("user__twitter");
  const userBlog = document.getElementById("user__blog");
  const userCompany = document.getElementById("user__company");
  const userDay = document.getElementById("user__day");
  if (data.login) {
    userName.textContent = data.login;
  } else {
    userName.textContent = "user login none";
  }
  if (data.login) {
    userLog.textContent = data.login;
  } else {
    userLog.textContent = "user login none";
  }
  if (data.avatar_url) {
    userImg.src = data.avatar_url;
  } else {
    userImg.src = "../img/user.svg";
  }
  if (data.html_url) {
    userA.href = data.html_url;
  } else {
    userA.href = "#";
  }
  if (data.bio) {
    userAbout.textContent = data.bio;
  } else {
    userAbout.textContent = "user bio none";
  }
  if (data.public_repos) {
    userRepos.textContent = data.public_repos;
  } else {
    userRepos.textContent = "0";
  }
  if (data.followers) {
    userFollowers.textContent = data.followers;
  } else {
    userFollowers.textContent = "0";
  }
  if (data.following) {
    userFollowing.textContent = data.following;
  } else {
    userFollowing.textContent = "0";
  }
  if (data.location) {
    userLoc.textContent = data.location;
  } else {
    userLoc.textContent = "user no location";
  }
  if (data.twitter_username) {
    userTwitter.textContent = data.twitter_username;
  } else {
    userTwitter.textContent = "user no twitter username";
  }
  if (data.blog) {
    userBlog.textContent = data.blog;
  } else {
    userBlog.textContent = "user blog none";
  }
  if (data.company) {
    userCompany.textContent = data.company;
  } else {
    userCompany.textContent = "user company none";
  }
  if (data.created_at) {
    userDay.textContent = data.created_at;
  } else {
    userDay.textContent = "joined none";
  }
}
