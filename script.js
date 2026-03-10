const dressCategories = [
  { key: "all", title: "Visos" },
  { key: "progines", title: "Proginės" },
  { key: "isleistuviu", title: "Išleistuvių" },
  { key: "vakarines", title: "Vakarinės" },
  { key: "kokteilines", title: "Kokteilinės" },
  { key: "vestuvines", title: "Vestuvinės" }
];

const dressImages = {
  progines: [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  isleistuviu: [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80"
  ],
  vakarines: [
    "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=80"
  ],
  kokteilines: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  ],
  vestuvines: [
    "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80"
  ]
};

const sizeSets = [
  ["XS", "S", "M"],
  ["S", "M", "L"],
  ["M", "L", "XL"],
  ["XS", "S", "M", "L"],
  ["S", "M", "L", "XL"]
];

const dresses = [];
["progines", "isleistuviu", "vakarines", "kokteilines", "vestuvines"].forEach((cat, catIndex) => {
  for (let i = 1; i <= 10; i++) {
    const galleryBase = dressImages[cat];
    dresses.push({
      id: `${cat}-${i}`,
      category: cat,
      name: `${dressCategories.find(c => c.key === cat).title} ${i}`,
      image: galleryBase[(i - 1) % galleryBase.length],
      gallery: [
        galleryBase[(i - 1) % galleryBase.length],
        galleryBase[i % galleryBase.length],
        galleryBase[(i + 1) % galleryBase.length],
        galleryBase[(i + 2) % galleryBase.length],
        galleryBase[(i + 3) % galleryBase.length]
      ],
      price: 75 + (catIndex * 35) + (i * 6),
      sizes: sizeSets[(i - 1) % sizeSets.length],
      featured: i <= 2
    });
  }
});

const services = {
  manikiuras: {
    title: "Manikiūras",
    icon: "💅",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    desc: "Tvarkingas, elegantiškas ir ilgaamžis rezultatas.",
    masters: [
      { name: "Aistė", price: 35, duration: "1 val. 30 min." },
      { name: "Laura", price: 40, duration: "1 val. 45 min." },
      { name: "Milda", price: 45, duration: "2 val." }
    ]
  },
  pedikiuras: {
    title: "Pedikiūras",
    icon: "🦶",
    image: "https://images.unsplash.com/photo-1596704017254-975c7b9c6c52?auto=format&fit=crop&w=900&q=80",
    desc: "Pėdų priežiūra ir estetiškas rezultatas.",
    masters: [
      { name: "Simona", price: 40, duration: "1 val. 30 min." },
      { name: "Gabija", price: 45, duration: "2 val." },
      { name: "Justė", price: 50, duration: "2 val." }
    ]
  },
  makiazas: {
    title: "Makiažas",
    icon: "💄",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    desc: "Dieninis, vakarinis ir proginis makiažas.",
    masters: [
      { name: "Eglė", price: 50, duration: "1 val." },
      { name: "Monika", price: 55, duration: "1 val. 15 min." },
      { name: "Karolina", price: 60, duration: "1 val. 20 min." }
    ]
  },
  plaukai: {
    title: "Plaukai",
    icon: "✂️",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    desc: "Kirpimai ir šukuosenos.",
    masters: [
      { name: "Rūta", price: 60, duration: "1 val. 30 min." },
      { name: "Agnė", price: 70, duration: "2 val." },
      { name: "Viktorija", price: 80, duration: "2 val. 20 min." }
    ]
  },
  blakstienos: {
    title: "Blakstienos",
    icon: "👁",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    desc: "Priauginimas ir laminavimas.",
    masters: [
      { name: "Diana", price: 45, duration: "1 val." },
      { name: "Patricija", price: 50, duration: "1 val. 15 min." },
      { name: "Rasa", price: 55, duration: "1 val. 30 min." }
    ]
  },
  antakiai: {
    title: "Antakiai",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?auto=format&fit=crop&w=900&q=80",
    desc: "Korekcija ir dažymas.",
    masters: [
      { name: "Vaida", price: 20, duration: "30 min." },
      { name: "Aistė", price: 25, duration: "45 min." },
      { name: "Sandra", price: 30, duration: "50 min." }
    ]
  }
};

let activeCategory = "all";
let currentDress = null;
let selectedDressSize = null;
let selectedDressDate = "";
let currentRentalDays = 4;
let currentDisplayedPrice = 0;

let currentServiceKey = null;
let currentMaster = null;
let selectedServiceTime = null;
let selectedServiceDate = "";
let adminFilter = "all";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("open");
    document.body.style.overflow = "auto";
  }
});

function calculateRentalPrice(basePrice, days) {
  const multipliers = {
    4: 1,
    8: 1.55,
    16: 2.35,
    28: 3.6
  };
  return Math.round(basePrice * (multipliers[days] || 1));
}

function getUpcomingDates(days = 18) {
  const result = [];
  const names = ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"];

  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const iso = d.toISOString().split("T")[0];
    const label = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}`;
    const weekday = names[d.getDay()];

    result.push({ iso, label, weekday, index: i });
  }

  return result;
}

function getDressAvailabilityByDate(dress, dateIso) {
  const dates = getUpcomingDates(18);
  const day = dates.find(d => d.iso === dateIso);
  if (!day) return [];

  if (day.index % 7 === 5) return [];
  if (day.index % 5 === 0) return dress.sizes.slice(0, 2);
  if (day.index % 4 === 0) return dress.sizes.slice(1);
  return [...dress.sizes];
}

function getServiceTimesByDate(dateIso) {
  const dates = getUpcomingDates(18);
  const day = dates.find(d => d.iso === dateIso);
  if (!day) return [];

  if (day.index % 6 === 0) return [];
  if (day.index % 5 === 0) return ["10:00", "12:00", "16:00"];
  if (day.index % 4 === 0) return ["09:30", "11:30", "14:30"];
  return ["09:00", "10:30", "12:00", "14:00", "16:30"];
}

function updateDressPrice() {
  if (!currentDress) return;

  const newPrice = calculateRentalPrice(currentDress.price, currentRentalDays);
  currentDisplayedPrice = newPrice;

  document.getElementById("dressModalPrice").innerText = `${newPrice} €`;
  document.getElementById("dressOldPrice").innerText = `${newPrice + 35} €`;
  document.getElementById("dressPriceNote").innerText = `${currentRentalDays} dienų nuomos kaina`;
}

function updateRentalButtons() {
  const buttons = document.querySelectorAll(".rental-btn");
  if (!currentDress) return;

  buttons.forEach(btn => {
    const days = Number(btn.dataset.days);
    const price = calculateRentalPrice(currentDress.price, days);
    btn.innerHTML = `${days} ${days === 16 ? "dienų" : "dienos"}<small>${price} €</small>`;
  });
}

function updateDressSummary() {
  const summary = document.getElementById("dressSelectedSummary");
  if (!summary) return;

  if (!selectedDressSize || !selectedDressDate) {
    summary.style.display = "none";
    summary.innerText = "";
    return;
  }

  summary.style.display = "block";
  summary.innerText = `Pasirinkta: dydis ${selectedDressSize}, ${currentRentalDays} dienų nuoma, data ${selectedDressDate}, kaina ${currentDisplayedPrice} €`;
}

function renderFeaturedDresses() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;

  const featured = dresses.filter(d => d.featured).slice(0, 4);

  grid.innerHTML = featured.map(dress => `
    <div class="featured-card" onclick="openDressDetailById('${dress.id}')">
      <div class="featured-image-wrap">
        <img src="${dress.image}" alt="${dress.name}">
        <div class="tag">Populiaru</div>
      </div>
      <div class="featured-body">
        <div class="featured-title">${dress.name}</div>
        <div class="featured-price">nuo ${dress.price} €</div>
        <div class="sizes">
          ${dress.sizes.map(size => `<span class="size-pill">${size}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderDressFilters() {
  const wrap = document.getElementById("dressFilters");
  if (!wrap) return;

  wrap.innerHTML = "";

  dressCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (activeCategory === cat.key ? " active" : "");
    btn.innerText = cat.title;
    btn.onclick = () => {
      activeCategory = cat.key;
      renderDressFilters();
      renderDressCatalog();
    };
    wrap.appendChild(btn);
  });
}

function renderDressCatalog() {
  const grid = document.getElementById("dressCatalog");
  if (!grid) return;

  grid.innerHTML = "";

  const sortValue = document.getElementById("sortSelect")?.value || "default";
  const sizeValue = document.getElementById("sizeFilter")?.value || "all";

  let filtered = activeCategory === "all"
    ? [...dresses]
    : dresses.filter(d => d.category === activeCategory);

  if (sizeValue !== "all") {
    filtered = filtered.filter(d => d.sizes.includes(sizeValue));
  }

  if (sortValue === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "lt"));
  }

  if (!filtered.length) {
    grid.innerHTML = `<div class="muted">Pagal pasirinktus filtrus suknelių nerasta.</div>`;
    return;
  }

  filtered.forEach(dress => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => openDressDetail(dress);

    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${dress.image}" alt="${dress.name}">
        <div class="tag">${dressCategories.find(c => c.key === dress.category).title}</div>
      </div>
      <div class="product-body">
        <div class="product-title">${dress.name}</div>
        <div class="product-price">nuo ${dress.price} €</div>
        <div class="sizes">
          ${dress.sizes.map(size => `<span class="size-pill">${size}</span>`).join("")}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function bindRentalButtons() {
  document.querySelectorAll(".rental-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".rental-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRentalDays = Number(btn.dataset.days);
      updateDressPrice();
      updateDressSummary();
    };
  });
}

function renderDressCalendar() {
  const wrap = document.getElementById("dressCalendar");
  if (!wrap || !currentDress) return;

  const dates = getUpcomingDates(18);

  wrap.innerHTML = dates.map(date => {
    const sizes = getDressAvailabilityByDate(currentDress, date.iso);
    const fullClass = sizes.length ? "" : "is-full";
    const activeClass = selectedDressDate === date.iso ? "active" : "";

    return `
      <button class="calendar-day ${fullClass} ${activeClass}" data-dress-date="${date.iso}" ${sizes.length ? "" : "disabled"}>
        <strong>${date.label}</strong>
        <span>${date.weekday}</span>
      </button>
    `;
  }).join("");

  wrap.querySelectorAll("[data-dress-date]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedDressDate = btn.dataset.dressDate;
      wrap.querySelectorAll(".calendar-day").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      showDressSizes();
    });
  });
}

function openDressDetailById(id) {
  const dress = dresses.find(d => d.id === id);
  if (dress) openDressDetail(dress);
}

function openDressDetail(dress) {
  currentDress = dress;
  selectedDressSize = null;
  selectedDressDate = "";
  currentRentalDays = 4;

  const thumbsWrap = document.getElementById("dressThumbs");
  const mainImg = document.getElementById("dressModalImg");
  const sizeSelect = document.getElementById("dressSizeSelect");
  const sizeButtons = document.getElementById("dressSizeButtons");
  const summary = document.getElementById("dressSelectedSummary");

  document.getElementById("dressModalTitle").innerText = dress.name;
  document.getElementById("dressBrand").innerText = "DOLL HOUSE COLLECTION";
  document.getElementById("dressFormWrap").style.display = "none";
  document.getElementById("dressSuccess").style.display = "none";
  document.getElementById("dressClientName").value = "";
  document.getElementById("dressClientEmail").value = "";
  document.getElementById("dressClientNote").value = "";
  sizeButtons.innerHTML = "";

  if (summary) {
    summary.style.display = "none";
    summary.innerText = "";
  }

  const images = dress.gallery?.length ? dress.gallery : [dress.image, dress.image, dress.image, dress.image];

  thumbsWrap.innerHTML = "";
  images.forEach((img, index) => {
    const thumb = document.createElement("div");
    thumb.className = "dress-thumb" + (index === 0 ? " active" : "");
    thumb.innerHTML = `<img src="${img}" alt="${dress.name}">`;
    thumb.onclick = () => {
      mainImg.src = img;
      document.querySelectorAll(".dress-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    };
    thumbsWrap.appendChild(thumb);
  });

  mainImg.src = images[0];

  sizeSelect.innerHTML = "";
  dress.sizes.forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  document.querySelectorAll(".rental-btn").forEach((btn, index) => {
    btn.classList.remove("active");
    if (index === 0) btn.classList.add("active");
  });

  updateRentalButtons();
  updateDressPrice();
  bindRentalButtons();
  renderDressCalendar();
  openModal("dressModal");
}

function showDressSizes() {
  const btnWrap = document.getElementById("dressSizeButtons");
  const summary = document.getElementById("dressSelectedSummary");

  btnWrap.innerHTML = "";
  document.getElementById("dressFormWrap").style.display = "none";
  selectedDressSize = null;

  if (summary) {
    summary.style.display = "none";
    summary.innerText = "";
  }

  if (!selectedDressDate) {
    btnWrap.innerHTML = `<div class="muted">Pirmiausia pasirink dieną.</div>`;
    return;
  }

  const available = getDressAvailabilityByDate(currentDress, selectedDressDate);

  if (!available.length) {
    btnWrap.innerHTML = `<div class="muted">Tą dieną laisvų dydžių nėra.</div>`;
    return;
  }

  available.forEach(size => {
    const btn = document.createElement("button");
    btn.className = "select-btn";
    btn.innerText = size;
    btn.onclick = () => {
      selectedDressSize = size;
      [...btnWrap.querySelectorAll(".select-btn")].forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("dressFormWrap").style.display = "block";
      updateDressSummary();
    };
    btnWrap.appendChild(btn);
  });
}

function saveReservation(entry) {
  const current = JSON.parse(localStorage.getItem("dollhouseReservations") || "[]");
  current.unshift(entry);
  localStorage.setItem("dollhouseReservations", JSON.stringify(current.slice(0, 100)));
  renderAdminReservations();
}

function submitDressBooking() {
  const name = document.getElementById("dressClientName").value.trim();
  const email = document.getElementById("dressClientEmail").value.trim();
  const note = document.getElementById("dressClientNote").value.trim();
  const success = document.getElementById("dressSuccess");

  if (!name || !email || !selectedDressDate || !selectedDressSize) {
    alert("Užpildyk dieną, pasirink dydį, vardą ir el. paštą.");
    return;
  }

  const entry = {
    kind: "dress",
    type: "Suknelė",
    title: currentDress.name,
    details: `Dydis ${selectedDressSize}, ${currentRentalDays} dienų, data ${selectedDressDate}, kaina ${currentDisplayedPrice} €${note ? `, pastaba: ${note}` : ""}`,
    contact: `${name} / ${email}`,
    createdAt: new Date().toISOString()
  };

  saveReservation(entry);

  success.style.display = "block";
  success.innerText =
`Rezervacija priimta:
${currentDress.name}
Dydis: ${selectedDressSize}
Nuoma: ${currentRentalDays} dienų
Data: ${selectedDressDate}
Kaina: ${currentDisplayedPrice} €
Kontaktas: ${name}, ${email}`;
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  Object.entries(services).forEach(([key, service]) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.onclick = () => openServiceMasters(key);

    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function openServiceMasters(serviceKey) {
  currentServiceKey = serviceKey;
  const service = services[serviceKey];

  document.getElementById("serviceMastersTitle").innerText = service.title;

  const list = document.getElementById("serviceMastersList");
  list.innerHTML = "";

  service.masters.forEach(master => {
    const card = document.createElement("div");
    card.className = "master-card";
    card.onclick = () => openServiceBooking(serviceKey, master);
    card.innerHTML = `
      <strong>${master.name}</strong>
      <div>Kaina: ${master.price} €</div>
      <div>Trukmė: ${master.duration}</div>
    `;
    list.appendChild(card);
  });

  openModal("serviceMastersModal");
}

function renderServiceCalendar() {
  const wrap = document.getElementById("serviceCalendar");
  if (!wrap) return;

  const dates = getUpcomingDates(18);

  wrap.innerHTML = dates.map(date => {
    const times = getServiceTimesByDate(date.iso);
    const fullClass = times.length ? "" : "is-full";
    const activeClass = selectedServiceDate === date.iso ? "active" : "";

    return `
      <button class="calendar-day ${fullClass} ${activeClass}" data-service-date="${date.iso}" ${times.length ? "" : "disabled"}>
        <strong>${date.label}</strong>
        <span>${date.weekday}</span>
      </button>
    `;
  }).join("");

  wrap.querySelectorAll("[data-service-date]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedServiceDate = btn.dataset.serviceDate;
      wrap.querySelectorAll(".calendar-day").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      showServiceTimes();
    });
  });
}

function openServiceBooking(serviceKey, master) {
  currentServiceKey = serviceKey;
  currentMaster = master;
  selectedServiceTime = null;
  selectedServiceDate = "";

  document.getElementById("bookingServiceTitle").innerText = services[serviceKey].title;
  document.getElementById("bookingMaster").innerText = master.name;
  document.getElementById("bookingPrice").innerText = master.price;
  document.getElementById("bookingDuration").innerText = master.duration;
  document.getElementById("serviceTimesWrap").style.display = "none";
  document.getElementById("serviceTimeButtons").innerHTML = "";
  document.getElementById("serviceFormWrap").style.display = "none";
  document.getElementById("serviceHint").style.display = "block";
  document.getElementById("serviceClientName").value = "";
  document.getElementById("serviceClientEmail").value = "";
  document.getElementById("serviceClientNote").value = "";
  document.getElementById("serviceSuccess").style.display = "none";

  renderServiceCalendar();
  closeModal("serviceMastersModal");
  openModal("serviceBookingModal");
}

function showServiceTimes() {
  const wrap = document.getElementById("serviceTimesWrap");
  const btnWrap = document.getElementById("serviceTimeButtons");

  wrap.style.display = "block";
  btnWrap.innerHTML = "";
  document.getElementById("serviceFormWrap").style.display = "none";
  document.getElementById("serviceHint").style.display = "block";
  selectedServiceTime = null;

  if (!selectedServiceDate) {
    btnWrap.innerHTML = `<div class="muted">Pirmiausia pasirink dieną.</div>`;
    return;
  }

  const times = getServiceTimesByDate(selectedServiceDate);

  if (!times.length) {
    btnWrap.innerHTML = `<div class="muted">Tą dieną laisvų laikų nėra.</div>`;
    return;
  }

  times.forEach(time => {
    const btn = document.createElement("button");
    btn.className = "select-btn";
    btn.innerText = time;
    btn.onclick = () => {
      selectedServiceTime = time;
      [...btnWrap.querySelectorAll(".select-btn")].forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("serviceFormWrap").style.display = "block";
      document.getElementById("serviceHint").style.display = "none";
    };
    btnWrap.appendChild(btn);
  });
}

function submitServiceBooking() {
  const name = document.getElementById("serviceClientName").value.trim();
  const email = document.getElementById("serviceClientEmail").value.trim();
  const note = document.getElementById("serviceClientNote").value.trim();
  const success = document.getElementById("serviceSuccess");

  if (!currentServiceKey || !currentMaster || !selectedServiceDate || !selectedServiceTime || !name || !email) {
    alert("Užpildyk dieną, laiką, vardą ir el. paštą.");
    return;
  }

  const entry = {
    kind: "service",
    type: "Paslauga",
    title: `${services[currentServiceKey].title} – ${currentMaster.name}`,
    details: `Data ${selectedServiceDate}, laikas ${selectedServiceTime}, kaina ${currentMaster.price} €${note ? `, pastaba: ${note}` : ""}`,
    contact: `${name} / ${email}`,
    createdAt: new Date().toISOString()
  };

  saveReservation(entry);

  success.style.display = "block";
  success.innerText =
`Rezervacija priimta:
${services[currentServiceKey].title}
Meistrė: ${currentMaster.name}
Data: ${selectedServiceDate}
Laikas: ${selectedServiceTime}
Kontaktas: ${name}, ${email}`;
}

function submitContactForm(e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  const success = document.getElementById("contactSuccess");

  if (!name || !email || !message) {
    alert("Užpildyk vardą, el. paštą ir žinutę.");
    return;
  }

  const entry = {
    kind: "contact",
    type: "Užklausa",
    title: "Kontaktų forma",
    details: message,
    contact: `${name} / ${email}`,
    createdAt: new Date().toISOString()
  };

  saveReservation(entry);

  success.style.display = "block";
  success.innerText = `Užklausa išsaugota:
${name}
${email}

Žinutė:
${message}`;

  e.target.reset();
}

function backToMasters() {
  closeModal("serviceBookingModal");
  openModal("serviceMastersModal");
}

function renderAdminReservations() {
  const wrap = document.getElementById("adminReservations");
  if (!wrap) return;

  const entries = JSON.parse(localStorage.getItem("dollhouseReservations") || "[]");

  const filtered = entries.filter(entry => {
    if (adminFilter === "all") return true;
    return entry.kind === adminFilter;
  });

  if (!filtered.length) {
    wrap.innerHTML = `<div class="admin-empty">Rezervacijų nėra.</div>`;
    return;
  }

  wrap.innerHTML = filtered.map(entry => `
    <div class="admin-row">
      <span>${entry.type}</span>
      <span>${entry.title}</span>
      <span>${entry.details}</span>
      <span>${entry.contact}</span>
    </div>
  `).join("");
}

function bindAdminFilters() {
  document.querySelectorAll("[data-admin-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      adminFilter = btn.dataset.adminFilter;
      document.querySelectorAll("[data-admin-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAdminReservations();
    });
  });

  document.getElementById("clearReservationsBtn")?.addEventListener("click", () => {
    localStorage.removeItem("dollhouseReservations");
    renderAdminReservations();
  });
}

function bindLightbox() {
  document.querySelectorAll("[data-lightbox]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("lightboxImg").src = btn.dataset.lightbox;
      openModal("lightboxModal");
    });
  });
}

function bindMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

document.getElementById("sortSelect")?.addEventListener("change", renderDressCatalog);
document.getElementById("sizeFilter")?.addEventListener("change", renderDressCatalog);
document.getElementById("contactForm")?.addEventListener("submit", submitContactForm);

renderFeaturedDresses();
renderDressFilters();
renderDressCatalog();
renderServices();
renderAdminReservations();
bindAdminFilters();
bindLightbox();
bindMobileMenu();