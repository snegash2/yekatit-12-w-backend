const servers = {
  "Manual and Guidelines": staticFilePath,
};

const services = {
  "Manual and Guidelines": [
    {
      name: "Yekatit 12 Hospital Medical College Research and Publication guideline and procedures",
      description: "The major goals of the research and publication guideline are to enhance the research visibility of the college, to maximize the relevance and usefulness of its research programs and to determine the procedure and financial administration of research in Y12HMC.",
      pdf: staticPDFmanual,
    },
    {
      name: "Educational program guideline",
      description: "The purpose of this document is to provide guidance to senior managers, academic staff, admin staff and external stakeholders on the development of new educational program and Present procedures and instructions for efficient implementation of program designing, approval and reviewing the effectiveness with the set of specifications and standard criteria.",
      pdf: staticPDFeducation,
    },
    {
      name: "Community service and engagement guideline",
      description: "The rational of this community service and engagement guideline is to provide guidance on the community services provided by the community of the hospital medical college.",
      pdf: staticPDFcommunity,
    },
    {
      name: "Academic staff handbook",
      description: "This Academic Staff Handbook has been created to provide you with important information about our institution, policies, and procedures.",
      pdf: staticPDFacademic,
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
