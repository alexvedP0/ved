(() => {
  const galleries = {
    "hygiene-housekeeping-healthcare.html": {
      title: "Hygiene, Housekeeping & Healthcare",
      description: "Everyday hygiene, washroom and housekeeping essentials for healthier workplaces.",
      photos: [
        ["hygiene-01.jpg", "Cleaning and hygiene essentials"],
        ["hygiene-02.jpg", "Personal care and hygiene products"],
        ["hygiene-03.jpg", "Healthcare and wellness essentials"],
        ["hygiene-04.jpg", "Washroom care products"],
      ],
    },
    "one-time-setup-capex-electronics.html": {
      title: "One Time Setup, Capex & Electronics",
      description: "Technology and equipment for setting up productive, connected workplaces.",
      photos: [
        ["electronics-01.jpg", "Business electronics"],
        ["electronics-02.jpg", "Connected workplace technology"],
        ["electronics-03.jpg", "Computer and IT equipment"],
        ["electronics-04.jpg", "Office technology essentials"],
      ],
    },
    "stationery-office-supplies.html": {
      title: "Stationery & Office Supplies",
      description: "Reliable stationery and desk essentials for everyday office productivity.",
      photos: [
        ["stationery-01.jpg", "Writing and stationery essentials"],
        ["stationery-02.jpg", "Notebooks and office supplies"],
        ["stationery-03.jpg", "Planning and organization"],
        ["stationery-04.jpg", "Books and paper products"],
      ],
    },
    "mro.html": {
      title: "MRO",
      description: "Maintenance, repair and operations supplies to keep work moving.",
      photos: [
        ["mro-01.jpg", "Industrial maintenance"],
        ["mro-02.jpg", "Machinery and equipment"],
        ["mro-03.jpg", "Operations and engineering"],
        ["mro-04.jpg", "Tools and hardware"],
      ],
    },
    "gifting.html": {
      title: "Gifting",
      description: "Thoughtful corporate gifts to celebrate teams, clients and milestones.",
      photos: [
        ["gifting-01.jpg", "Corporate gift selections"],
        ["gifting-02.jpg", "Gift boxes and hampers"],
        ["gifting-03.jpg", "Gift wrapping and presentation"],
        ["gifting-04.jpg", "Client appreciation gifts"],
      ],
    },
    "packaging.html": {
      title: "Packaging",
      description: "Practical packaging materials for protecting and shipping business goods.",
      photos: [
        ["packaging-01.jpg", "Shipping boxes and cartons"],
        ["packaging-02.jpg", "Protective packaging"],
        ["packaging-03.jpg", "Packing materials"],
        ["packaging-04.jpg", "Shipping and delivery supplies"],
      ],
    },
  };

  const page = galleries[window.location.pathname.split("/").pop()];
  const content = document.querySelector("#__next > div > .relative.z-10 > .pt-32");
  if (!page || !content) return;

  const section = document.createElement("section");
  section.className = "category-gallery";

  const heading = document.createElement("h1");
  heading.textContent = page.title;
  section.append(heading);

  const description = document.createElement("p");
  description.className = "category-gallery-description";
  description.textContent = page.description;
  section.append(description);

  const grid = document.createElement("div");
  grid.className = "category-gallery-grid";

  page.photos.forEach(([file, label]) => {
    const card = document.createElement("figure");
    card.className = "category-gallery-card";

    const image = document.createElement("img");
    image.src = `../../images/category-gallery/${file}`;
    image.alt = label;
    image.loading = "lazy";
    image.decoding = "async";
    card.append(image);

    const caption = document.createElement("figcaption");
    caption.textContent = label;
    card.append(caption);
    grid.append(card);
  });

  section.append(grid);

  const backLink = document.createElement("a");
  backLink.className = "category-gallery-back";
  backLink.href = "../all-categories.html";
  backLink.textContent = "Browse all categories";
  section.append(backLink);

  content.replaceChildren(section);
})();
