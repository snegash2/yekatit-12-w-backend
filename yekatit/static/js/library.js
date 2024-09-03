const servers = {
    "Digital Library": "assets/images/bordclicnic-removebg-preview.png",
    "E-Books": "./asset/assets/icons/cardio.png",
  };
  const services = {
    "Digital Library": [
      {
        name: "Digital Library",
        description: "Cervical Cancer Screening Barriers Among HIV Positive Women Attending ART Clinic at Yekatit 12 Hospital Medical College, Addis Ababa, Ethiopia: A Qualitative Study",
      },
  
      // Add more services here for Server 1
    ],
    "E-Books": [
      {
        name: "E-Books",
        description:
          "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      },

      // Add more services here for Server 2
    ],
  };
  
  // =================================================
  const serverGrid = document.getElementById("serverGrid");
  const servicesContainer = document.getElementById("servicesContainer");
  const chooseServicesHeader = document.getElementById("chooseServicesHeader");
  const bannerImage = document.getElementById("bannerImage");
  
  Object.keys(servers).forEach((server) => {
    const serverElement = document.createElement("div");
    serverElement.classList.add("server");
  
    // Creating an image element instead of using <i> for icons
    const serverIcon = new Image();
    serverIcon.src = servers[server];
    serverElement.appendChild(serverIcon);
  
    // Appending the server name as text
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
    
      // Adding service name and description as text
      const serviceName = document.createElement("h2");
      serviceName.textContent = service.name;
      serviceElement.appendChild(serviceName);
  
      const serviceDescription = document.createElement("p");
      serviceDescription.textContent = service.description;
      serviceElement.appendChild(serviceDescription);
  
      const servicePdf = document.createElement("object");
      servicePdf.data = service.pdf;
      serviceElement.appendChild(servicePdf);


      servicesContainer.appendChild(serviceElement);
    });
  }
  
  // Display first server's services by default
  displayServices(Object.keys(servers)[0]);
  
  // Scroll to the banner image when the page reloads
  window.onload = () => {
    bannerImage.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
