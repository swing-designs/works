let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 1000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 2500);
  }
}

function getRandomPun() {
  const puns = [
   "Hi,  I'm Swing. 	<br>	I love tea.",
    "Hi,  I'm Swing. 	<br>	I love hojicha.",
    "Hi,  I'm Swing. 	<br>	I love ramen.",
    "Hi,  I'm Swing. <br>		I love colours.",
    "Hi,  I'm Swing. 	<br> I love art.",
    "Hi, I'm Swing. 	<br>	I love sketching.",
	"Hi,  I'm Swing.<br> Pineapples on pizza is a sin.",
	"Hi,  I'm Swing. <br> I love yellow.",
	"Hi,  I'm Swing. <br >Tell me what your favourite tea is.",
  "Hi,  I'm Swing. <br> I'm broke.",
  "Hi,  I'm Swing. <br >Do you like hojicha?",
  "Hi,  I'm Swing. <br> I love cute socks."
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);