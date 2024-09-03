const servers = {
    "Registrar Office": "assets/images/bordclicnic-removebg-preview.png",
    "Student Statics": "./asset/assets/icons/cardio.png",
    "Academic Calendar": "assets/images/OPD-removebg-preview.png",
    "Admission": "assets/images/OPD-removebg-preview.png",
    "Alumni": "assets/images/OPD-removebg-preview.png",
    "Announcement": "assets/images/OPD-removebg-preview.png",

  };
  const services = {
    "Registrar Office": [
      {
        name: "Registrar Office",
        description: "The Registrar's Office at Yekatit 12 Hospital Medical College is responsible for student records, course registration, academic calendars, degree audits, transcripts, graduation, academic policies, and student support services. We are dedicated to providing efficient and responsive assistance to ensure a smooth academic journey for students, faculty, and staff. Contact us or visit our office for any inquiries or support needed.",
      },
  
      // Add more services here for Server 1
    ],
    "Student Statics": [
      {
        name: "Student Statics",
        description:
          "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      },

      // Add more services here for Server 2
    ],
    "Academic Calendar": [
      {
        name: "Academic Calendar",
        description: "The academic calendar for Yekatit 12 Hospital Medical College outlines important dates and events throughout the academic year. The academic calendar is as below:",
      },
    ],
    "Admission": [
      {
        name: "Admission",
        description: "Online application steps\
        1.	Prepare your all educational documents in single\
        PDF file and the application fee receipt in separate PDF\
        2.	Use the website and click the SIS portal\
        3.	Go to and click 'online admission'\
        4.	Complete all the required fields\
        5.	Attached (PDF only) your educational document\
        and receipt on the respective space provided\
        6.	Submit the application and you get message with a\
        registration number/ tracking number/.\
        7.	 Please keep your registration number and check\
        your application status on 'Online admission\
        tracking'\
        8.	 You can submit any missed document on 'online\
        admission tracking'\
        9.	Note that while you resubmit any missed document, please combine with the first documents (already submitted) and reattach in a single PDF file.\
        ",
        image: "images/academics/registrar/sis.png",
        image1: "images/academics/registrar/sis2.png",

       },
    ],
    "Alumni": [
        {
            name: "Alumni",
            description: "Welcome to the Alumni service of Yekatit 12 Hospital Medical College. We celebrate your achievements and provide resources to support your personal and professional growth. Benefit from lifelong networking, career development opportunities, continuing education programs, and exclusive alumni events, and access to college updates. Join our vibrant Alumni Association and contribute to the college's mission. Stay connected, make a difference, and shape the future of healthcare. Contact the Alumni Office for any inquiries or suggestions. Below is the platform for alumni registration:",
        },
    ],
    "Announcement": [
      {
          name: "Announcement",
          description: "Any announcement from registrar will be posted here:",
      },
  ],
    // Add more services here for Server 3
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
  
      // Using an image element for service icons
      // const serviceIcon = new Image();
      // serviceIcon.src = service.icon;
      // serviceElement.appendChild(serviceIcon);
  
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

      if (service.image){
        const image = document.createElement('img');
        const image1 = document.createElement('img');

        image.setAttribute("src", service.image);
        image1.setAttribute("src", service.image1);
        image.style.width = "400px";
        image.style.height = "300px";
        image1.style.width = "400px";
        image1.style.height = "300px";


        serviceElement.appendChild(image);
        serviceElement.appendChild(image1);
      }


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
