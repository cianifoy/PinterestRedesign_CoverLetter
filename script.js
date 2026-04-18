const pins = [
  {
    title: "UCF graduation photos | alex spidle art",
    source: "",
    image: "./Images/Graduation.jpg",
    altText:
      "A graduation portrait of a woman standing outdoors in a cap and gown, posed for a celebratory commencement photo.",
    rows: 30,
    tag: "Portrait",
    masonryAspect: "4 / 6.2",
  },
  {
    title: "Luxury foyer with floral shelving",
    source: "",
    image: "./Images/Luxury Foyer.jpg",
    altText:
      "A luxury foyer with decorative wall shelving, warm lighting, floral arrangements, and upholstered stools styled in an elegant entryway.",
    rows: 22,
    tag: "Decor",
    masonryAspect: "4 / 4.4",
  },
  {
    title: "1.5 CT Marquise Cut Moissanite Ring",
    source: "Etsy",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    altText:
      "A close-up of a marquise-cut engagement ring resting on soft fabric, highlighting the stone and gold band.",
    rows: 15,
    tag: "Jewelry",
    masonryAspect: "4 / 5.1",
  },
  {
    title: "Summer street style inspiration",
    source: "",
    image: "./Images/SummerStreetStyle.jpg",
    altText:
      "A woman posing indoors in a summer street style look, wearing a fitted sleeveless top with casual beige pants and styled for a chic warm-weather outfit.",
    rows: 26,
    tag: "Outfits",
    masonryAspect: "4 / 5.7",
  },
  {
    title: "Floral acrylic nails",
    source: "",
    image: "./Images/FloralNails.jpg",
    altText:
      "A close-up of dark glossy acrylic nails decorated with delicate floral details and polished in a dramatic manicure style.",
    rows: 34,
    tag: "Beauty",
    masonryAspect: "4 / 6.1",
  },
  {
    title: "Fenty Beauty Gloss Bomb",
    source: "Sephora",
    sponsored: true,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
    altText:
      "A beauty close-up of glossy lips as a lip gloss wand applies a shiny nude-pink product.",
    rows: 18,
    tag: "Ad",
    masonryAspect: "4 / 5.5",
  },
  {
    title: "Dreamy entryway",
    source: "",
    image: "./Images/Entryway.jpg",
    altText:
      "A styled entryway with layered decor, warm tones, and curated furniture creating a dreamy, welcoming interior vignette.",
    rows: 18,
    tag: "Home",
    masonryAspect: "4 / 3.4",
  },
  {
    title: "Boho bedroom",
    source: "",
    image: "./Images/Bedroom.jpg",
    altText:
      "A boho bedroom with patterned bedding, mixed textures, and warm decorative accents arranged in a cozy interior setting.",
    rows: 28,
    tag: "Photography",
    masonryAspect: "4 / 5.2",
  },
  {
    title: "Tomato Basil Chicken Breasts",
    source: "NYT Cooking",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80",
    altText:
      "A plated chicken dish topped with tomatoes and basil in a rich sauce, styled as a home-cooked meal.",
    rows: 23,
    tag: "Recipe",
    masonryAspect: "4 / 5.1",
  },
  {
    title: "Kat NYU 2025 Graduation Portrait",
    source: "",
    image: "./Images/NYU Grad.jpg",
    altText:
      "A graduation portrait of a woman in formal commencement attire posing for an NYU-themed graduation photo.",
    rows: 21,
    tag: "Graduation",
    masonryAspect: "4 / 5",
  },
  {
    title: "Bridal bow veil close-up",
    source: "",
    image: "./Images/Veil.jpg",
    altText:
      "A bridal portrait detail showing a veil and hair accessory from behind, focusing on soft wedding styling.",
    rows: 28,
    tag: "Wedding",
    masonryAspect: "4 / 5.8",
  },
  {
    title: "Asymmetrical chiffon ruffle skirt",
    source: "SHEIN",
    image: "./Images/Outfit.jpg",
    altText:
      "A fashion photo of a woman modeling a styled outfit with soft textures and a dressy silhouette.",
    rows: 25,
    tag: "Fashion",
    masonryAspect: "4 / 5.7",
  },
  {
    title: "David's Bridal",
    source: "",
    image: "./Images/Wedding.jpg",
    altText:
      "A bridal fashion image featuring a woman in an elegant white wedding gown with voluminous details.",
    rows: 22,
    tag: "Campaign",
    masonryAspect: "4 / 4.8",
  },
  {
    title: "Curly updo",
    source: "",
    image: "./Images/Curly Hair.jpg",
    altText:
      "A hairstyle photo showing a curly updo with soft volume and styled tendrils arranged for a formal look.",
    rows: 19,
    tag: "Beauty",
    masonryAspect: "4 / 4.3",
  },
  {
    title: "Minimal summer capsule wardrobe",
    source: "",
    image: "./Images/Summer Wardrobe.jpg",
    altText:
      "A summer outfit photo featuring a minimal wardrobe look styled with light seasonal clothing and accessories.",
    rows: 22,
    tag: "Style",
    masonryAspect: "4 / 4.8",
  },
  {
    title: "Modern breakfast nook details",
    source: "",
    image: "./Images/Floral Hairstyle.jpg",
    altText:
      "A close-up hairstyle image with floral-inspired styling and soft, polished hair details.",
    rows: 20,
    tag: "Interior",
    masonryAspect: "4 / 4.6",
  },
  {
    title: "Vacation outfit color story",
    source: "",
    image: "./Images/Shein.jpg",
    altText:
      "A fashion image of a styled vacation outfit featuring coordinated pieces arranged for a warm-weather look.",
    rows: 24,
    tag: "Vacation",
    masonryAspect: "4 / 5.4",
  },
  {
    title: "Cherry red chrome manicure ideas",
    source: "",
    image: "./Images/Cherry Red Chrome Nails.jpg",
    altText:
      "A manicure close-up featuring glossy cherry red chrome nails with a reflective finish.",
    rows: 18,
    tag: "Nails",
    masonryAspect: "4 / 4.1",
  },
  {
    title: "Editorial braids with ribbon accents",
    source: "",
    image: "./Images/Editorial Braids.jpg",
    altText:
      "An editorial hairstyle photo featuring braided hair styled with decorative ribbon accents.",
    rows: 23,
    tag: "Hair",
    masonryAspect: "4 / 5.1",
  },
  {
    title: "Neutral bedroom with curved headboard",
    source: "",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80&hue=25",
    altText:
      "A neutral-toned bedroom with a curved headboard, layered bedding, and a softly styled modern interior.",
    rows: 21,
    tag: "Bedroom",
    masonryAspect: "4 / 4.8",
  },
  {
    title: "Fresh flower arrangement for entryway",
    source: "",
    image: "./Images/Floral Arrangement.jpg",
    altText:
      "A flower arrangement displayed indoors with fresh blooms styled in a decorative vase.",
    rows: 20,
    tag: "Decor",
    masonryAspect: "4 / 4.5",
  },
  {
    title: "Stacked rings and gold jewelry mix",
    source: "Etsy",
    image: "./Images/Stacked Gold Rings.jpg",
    altText:
      "A jewelry close-up showing multiple stacked rings and gold accessories styled together.",
    rows: 17,
    tag: "Jewelry",
    masonryAspect: "4 / 4.1",
  },
  {
    title: "Clean girl makeup products lineup",
    source: "Sephora",
    sponsored: true,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    altText:
      "A beauty product image showing makeup items arranged together in a clean, minimal lineup.",
    rows: 19,
    tag: "Ad",
    masonryAspect: "4 / 4.4",
  },
  {
    title: "Blue closet",
    source: "",
    image: "./Images/Blue Closet.jpg",
    altText:
      "A blue-toned closet or wardrobe space with styled shelving and organized fashion or interior details.",
    rows: 21,
    tag: "Decor",
    masonryAspect: "4 / 4.9",
  },
];

const feed = document.querySelector("#feed");
const layoutToggle = document.querySelector("#layoutToggle");
const MODULAR_ROW_SPAN = 14;

pins.forEach((pin) => {
  const card = document.createElement("article");
  card.className = "pin-card";
  card.dataset.masonryRows = String(pin.rows);
  card.style.gridRow = `span ${MODULAR_ROW_SPAN}`;
  card.style.setProperty("--masonry-aspect", pin.masonryAspect || "4 / 5");

  const sponsoredClass = pin.sponsored ? "pin-source sponsored" : "pin-source";
  const sponsoredLabel = pin.sponsored ? "<div class=\"pin-source sponsored\">Sponsored</div>" : "";

  card.innerHTML = `
    <div
      class="pin-frame"
      tabindex="0"
      aria-label="${pin.altText || pin.title}"
    >
      <img src="${pin.image}" alt="${pin.altText || pin.title}" loading="lazy" />
      <div class="pin-overlay">
        <span class="pin-tag">${pin.tag}</span>
        <button class="pin-save" type="button">Save</button>
      </div>
    </div>
    <div class="pin-meta">
      <div class="pin-text">
        <p class="pin-title">${pin.title}</p>
        ${pin.source ? `<div class="${sponsoredClass}">${pin.source}</div>` : ""}
        ${sponsoredLabel}
      </div>
      <button class="pin-action" type="button" aria-label="More options">…</button>
    </div>
  `;

  feed.appendChild(card);
});

const setLayoutMode = (mode) => {
  const isMasonry = mode === "masonry";
  feed.classList.toggle("is-masonry", isMasonry);

  feed.querySelectorAll(".pin-card").forEach((card) => {
    card.style.gridRow = isMasonry
      ? `span ${card.dataset.masonryRows}`
      : `span ${MODULAR_ROW_SPAN}`;
  });

  layoutToggle.setAttribute("aria-pressed", String(!isMasonry));
  layoutToggle.querySelector(".toggle-thumb").style.transform = isMasonry
    ? "translateX(0)"
    : "translateX(20px)";
  layoutToggle.querySelector(".toggle-track").classList.toggle("is-active", !isMasonry);
};

let currentMode = "modular";
setLayoutMode(currentMode);

layoutToggle.addEventListener("click", () => {
  currentMode = currentMode === "modular" ? "masonry" : "modular";
  setLayoutMode(currentMode);
});
