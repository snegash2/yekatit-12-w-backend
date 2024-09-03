const servers = {
  "100 Years Anniversary": staticFilePath,
};

const services = {
  "100 Years Anniversary": [
    {
      name: "Celebrating the 100th Anniversary of Yekatit 12 Hospital Medical College!",
      description:
        "We are thrilled to announce a series of special events and activities to commemorate the momentous occasion of our 100th anniversary. We celebrated our 100th anniversary in 2023 with a series of events organized by different departments, each offering unique and exciting experiences. These events ranged from warm and intimate gatherings to vibrant and lively celebrations, creating a joyful and festive atmosphere throughout the anniversary festivities.",
      image: staticImg,
      image1: staticImg2
    },
    // Add more publications here
  ],
};

const serverGrid = document.getElementById("serverGrid");
const servicesContainer = document.getElementById("servicesContainer");
const chooseServicesHeader = document.getElementById("chooseServicesHeader");
const bannerImage = document.getElementById("bannerImage");

Object.keys(servers).forEach((server) => {
  const serverElement = document.createElement("div");
  serverElement.classList.add("server");

  const serverIcon = new Image();
  serverIcon.src = servers[server];
  serverElement.appendChild(serverIcon);

  const serverName = document.createElement("span");
  serverName.textContent = server;
  serverElement.appendChild(serverName);

  serverElement.addEventListener("click", () => {
    document
      .querySelectorAll(".server")
      .forEach((el) => el.classList.remove("selected"));
    serverElement.classList.add("selected");
    displayServices(server);
    chooseServicesHeader.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  serverGrid.appendChild(serverElement);
});

function displayServices(serverName) {
  servicesContainer.innerHTML = "";
  const serverServices = services[serverName];
  serverServices.forEach((service, index) => {
    const serviceElement = document.createElement("div");
    serviceElement.classList.add("service");
    if (index === 0) {
      serviceElement.classList.add("active");
    }

    const serviceName = document.createElement("h2");
    serviceName.textContent = service.name;
    serviceElement.appendChild(serviceName);

    const serviceDescription = document.createElement("p");
    serviceDescription.textContent = service.description;
    serviceElement.appendChild(serviceDescription);

    if (service.image) {
      const image = document.createElement("img");
      const image1 = document.createElement("img");

      image.setAttribute("src", service.image);
      image1.setAttribute("src", service.image1);
      // Set different width and height for mobile view
      if (window.innerWidth < 600) {
        // Adjust the breakpoint as needed
        image.style.width = "300px"; // Set your desired width for mobile
        image.style.height = "200px"; // Set your desired height for mobile
        image1.style.width = "300px"; // Set your desired width for mobile
        image1.style.height = "200px"; // Set your desired height for mobile
        image.style.marginLeft = "-10rem"; // Adjust the left margin for mobile
        image1.style.marginLeft = "-19rem"; // Adjust the left margin for mobile
        image.style.marginTop = "-15rem"; // Adjust the left margin for mobile
        image1.style.marginTop = "17rem"; // Adjust the left margin for mobile
      } else {
        image.style.width = "400px"; // Default width for desktop
        image.style.height = "300px"; // Default height for desktop
        image1.style.width = "400px"; // Default width for desktop
        image1.style.height = "300px"; // Default height for desktop
      }
      serviceElement.appendChild(image);
      serviceElement.appendChild(image1);
    }

    servicesContainer.appendChild(serviceElement);
  });
}

function downloadPDF(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

displayServices(Object.keys(servers)[0]);

window.onload = () => {
  bannerImage.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
