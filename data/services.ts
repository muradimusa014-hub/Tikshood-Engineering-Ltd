export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Building" | "HardHat" | "Truck" | "Ruler"; 
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "structural-fabrication",
    title: "Structural Steel Fabrication",
    shortDescription: "Precision metalwork and framework assembly for commercial builds.",
    iconName: "Building",
    coreCapabilities: [
      "Heavy Steel Welding & Assembly",
      "Custom Architectural Frameworks",
      "Corrosion-Resistant Treatments"
    ]
  },
  {
    id: "engineering-procurement",
    title: "Engineering Procurement",
    shortDescription: "Strategic sourcing of high-grade construction and fabrication materials.",
    iconName: "Truck",
    coreCapabilities: [
      "Global Material Sourcing",
      "Heavy Machinery Logistics",
      "Supply Chain Cost Optimization"
    ]
  },
  {
    id: "precision-engineering",
    title: "Precision Engineering & Drafting",
    shortDescription: "Highly calibrated structural solutions focused on load-bearing efficiency.",
    iconName: "Ruler",
    coreCapabilities: [
      "CAD Structural Blueprinting",
      "Stress & Load Analysis",
      "Micro-Tolerance Machining"
    ]
  }
];
