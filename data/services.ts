export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Wrench" | "Cog" | "Factory" | "ClipboardCheck";
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "engineering-consultancy",
    title: "Engineering Consultancy",
    shortDescription:
      "Professional engineering consulting services for industrial, commercial, and infrastructure projects.",
    iconName: "ClipboardCheck",
    coreCapabilities: [
      "Feasibility Studies",
      "Technical Advisory Services",
      "Engineering Design & Documentation"
    ]
  },
  {
    id: "industrial-installation",
    title: "Industrial Installation",
    shortDescription:
      "End-to-end installation of mechanical, electrical, and industrial systems.",
    iconName: "Factory",
    coreCapabilities: [
      "Mechanical Equipment Installation",
      "Electrical Power Systems",
      "Industrial Plant Commissioning"
    ]
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Technical Support",
    shortDescription:
      "Reliable maintenance solutions that maximize equipment performance and operational efficiency.",
    iconName: "Wrench",
    coreCapabilities: [
      "Preventive Maintenance",
      "Equipment Troubleshooting",
      "Plant Maintenance Services"
    ]
  },
  {
    id: "automation-control",
    title: "Automation & Control Systems",
    shortDescription:
      "Design, integration, and optimization of modern industrial automation solutions.",
    iconName: "Cog",
    coreCapabilities: [
      "PLC & HMI Integration",
      "SCADA System Development",
      "Industrial Control Panel Design"
    ]
  }
];
