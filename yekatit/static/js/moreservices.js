const servers = {
  "Board Clinic": "assets/images/bordclicnic-removebg-preview.png",
  Emergency: "./asset/assets/icons/cardio.png",
  "General OPD": "assets/images/OPD-removebg-preview.png",
  MNCH: "assets/images/mnch-removebg-preview.png",
  "Ophtalmology OPD": "assets/images/eye-removebg-preview.png",
  OR: "assets/images/or-removebg-preview.png",
  PACU: "assets/images/private_clinic-removebg-preview.png",
  "private-Clinic": "assets/images/private_clinic-removebg-preview.png",
  "Procedural-OPD": "assets/images/producal-removebg-preview.png",
  "Specialty Clinic": "assets/images/specialist-removebg-preview.png",
  "TB-and-HIV": "assets/images/hiv-removebg-preview.png",
  VCT: "assets/images/vct-removebg-preview.png",
};
const services = {
  "Board Clinic": [
    {
      name: "Board Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },

    // Add more services here for Server 1
  ],
  Emergency: [
    {
      name: "Emergency Services",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-tools",
    },
    {
      name: "Adult Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Gyn Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Pedi Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Ophtha Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "GBV Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Dialysis Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Neonatal Emergency Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-hammer",
    },
    {
      name: "Priming Induction Waiting Unit",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-hammer",
    },
    // Add more services here for Server 2
  ],
  "General OPD": [
    {
      name: "General Outpatient Services",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "General Health Check-ups",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "General Medical",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Surgical",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Pediatrics",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Gynocology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Medical Referral",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Surgical Referral",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Pedi Referral",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Gynocology Referral",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "Staff Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    {
      name: "HPN and DM Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      icon: "fa-screwdriver",
    },
    // Add more services here for Server 3
  ],
  MNCH: [
    {
      name: "Maternal and Child Health",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-hammer",
    },
    {
      name: "Neonatal OPD",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "PNC Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "PNC Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Cervical Ca screening",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "PMTCT Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "ANC Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Hepatitis Immunization",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Infant Immunization",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "TT Immunization",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "HPV Immunization",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Growth Monitoring Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "IMNCI Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Family Planning",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 4
  ],
  "Ophtalmology OPD": [
    {
      name: "General Ophtha OPD",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Pediatric Optha",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Glaucoma clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Retina clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Neuro Ophtha clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Anterior segment",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Oculoplastic clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Uveitis clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Low vision clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Refractive surgery",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Ophtha Appointment",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Optha Pre-Op Evaluation",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 1
  ],
  OR: [
    {
      name: "General Major OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Plastic Major OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "maternity OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Day Case OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "OPhtha Major OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },

    // Add more services here for Server 1
  ],
  PACU: [
    {
      name: "Major PACU",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Plastic PACU",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "maternity PACU",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Day Case PACU",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "OPhtha PACU",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 1
  ],
  "private-Clinic": [
    {
      name: "private-Clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },

    // Add more services here for Server 1
  ],
  "Procedural-OPD": [
    {
      name: "Physiotherapy",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Speech Therapy",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "General Minor OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Plastic Minor OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "OPhtha Minor OR",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Procedure Room",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 1
  ],
  "Specialty Clinic": [
    {
      name: "Orthopedics",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Dermatology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Maxilo Fascial",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Dental",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },

    {
      name: "ENT",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Neurology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Neuro Surgery",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Urology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Plastic and Burn",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Psychiatry",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Nephrology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Pre-Anesthesia OPd",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Dental Orthodentics",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Oncology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Infertility clinic",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Cardiology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Endocrine",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Gastroenterology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Hematology",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Hepato-Billiary Surgery",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "Thoracic Surgery",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 1
  ],
  "TB-and-HIV": [
    {
      name: "ART Adult",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "ART Pedi",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    {
      name: "ART Pedi",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },
    // Add more services here for Server 1
  ],
  VCT: [
    {
      name: "VCT",
      description:
        "Donec ut magna sit amet velit tempor ultricies. Nam semper nisi vel nulla interdum, nec laoreet libero vehicula. Curabitur mollis nisl nec augue ultrices, et aliquam urna dictum. Nunc fermentum erat vitae ligula aliquet, ut faucibus elit convallis.",
      // icon: "fa-wrench",
    },

    // Add more services here for Server 1
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
