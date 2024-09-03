const servers = {
    "Strategic Plan": staticFilePath,
  };
  
  const services = {
    "Strategic Plan": [
      {
        name: "Yekatit 12 Hospital Medical College Strategic Plan",
        pdf: staticPDFstrategicPlan
      },

      // Add more services here for Server 3
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
  
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download PDF";
      downloadButton.addEventListener("click", () => {
        downloadPDF(service.pdf);
      });
      downloadButton.style.color = "blue";
      serviceElement.appendChild(downloadButton);
  
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
  