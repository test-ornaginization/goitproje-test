async function loadHTML(id, file) {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Dosya yüklenemedi: ${file}`);
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
    } catch (error) {
      console.error(error);
    }
  }

  loadHTML("header-hero","./src/partials/Header-hero.html");
  loadHTML("howitworks","./src/partials/Howitworks.html")
  loadHTML("advertisement","./src/partials/Advertisement.html")
  loadHTML("vegetables","./src/partials/Vegetables.html")
  loadHTML("reviews","./src/partials/Reviews.html")
  loadHTML("yourorder","./src/partials/Yourorder.html")
  loadHTML("footer","./src/partials/Footer.html")