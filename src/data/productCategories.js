// Icon names are stored as strings and resolved in components

export const productCategories = [
  {
    id: 'switches',
    name: 'Smart Switches',
    icon: 'Zap',
    description: 'From basic lighting to heavy-duty appliances - we\'ve got you covered',
    products: [
      {
        modelNumber: "KB 001",
        name: "4 Touch Switch",
        description: "Perfect for modern homes with multiple lighting needs",
        shortDesc: "Control 4 different lights or devices independently",
        voltage: "110-250 VAC, 50/60Hz",
        load: "450W incandescent, 120W LED",
        loadControls: "4",
        applications: ["LED lights", "Ceiling lights", "charging cable", "T.V", "Computers"],
        benefits: ["Individual control", "Energy saving", "Voice compatible", "Schedule timers"],
        icon: "Zap",
        image: "4_switch.png",
        colorClass: "blue",
        type: "switch",
        bestFor: "Living rooms, bedrooms"
      },
      {
        modelNumber: "KB 002",
        name: "15A Heavy Duty Switch",
        description: "Built for high-power appliances and heavy loads",
        shortDesc: "Perfect for air conditioners and major appliances",
        voltage: "110-250 VAC, 50/60Hz",
        load: "2000W",
        loadControls: "2",
        applications: ["A.C (up to 2 Ton)", "Refrigerator", "Microwave", "Oven", "Iron", "Flour mill"],
        benefits: ["High capacity", "Surge protection", "Remote control", "Energy monitoring"],
        icon: "Power",
        image: "15A_switch.png",
        colorClass: "purple",
        type: "switch",
        bestFor: "Kitchen, utility room"
      },
      {
        modelNumber: "KB 003",
        name: "24A Industrial Switch",
        description: "Maximum power handling for industrial applications",
        shortDesc: "Ultimate switch for geysers and heavy machinery",
        voltage: "110-250 VAC, 50/60Hz",
        load: "3500W",
        loadControls: "1",
        applications: ["Geyser", "Room heater", "large Oven", "2hp motor", "A.C (up to 3 Ton)"],
        benefits: ["Maximum capacity", "Industrial grade", "Safety features", "Durable design"],
        icon: "Gauge",
        colorClass: "red",
        type: "switch",
        bestFor: "Water heaters, heavy appliances"
      },
      {
        modelNumber: "KB 004",
        name: "2 Way Smart Switch",
        description: "Dual control for staircases and multiple entry points",
        shortDesc: "Control one light from two different locations",
        voltage: "110-250 VAC, 50/60Hz",
        load: "450W",
        loadControls: "2",
        applications: ["Staircase lights", "Parking area light"],
        benefits: ["Dual control", "Convenient access", "Smart automation", "Memory function"],
        icon: "Activity",
        colorClass: "green",
        type: "switch",
        bestFor: "Staircases, corridors"
      },
      {
        modelNumber: "KB 005",
        name: "Smart Fan Controller",
        description: "Silent speed control with 5-step precision",
        shortDesc: "Smooth, noise-free fan speed control",
        voltage: "110-250 VAC, 50/60Hz",
        load: "100W Capacitor based",
        features: "Humming Free, 5-step fan coil speed output",
        applications: ["Ceiling Fan"],
        benefits: ["Silent operation", "5 speed levels", "Energy efficient", "Smart scheduling"],
        icon: "Settings",
        colorClass: "cyan",
        type: "switch",
        bestFor: "Bedrooms, living areas"
      },
      {
        modelNumber: "KB 006",
        name: "Smart Bell Switch",
        description: "Intelligent doorbell control system",
        shortDesc: "Smart control for doorbells and intercoms",
        voltage: "110-250 VAC, 50/60Hz",
        load: "120W",
        applications: ["Outdoor bell", "Office bell"],
        benefits: ["Remote notifications", "Multiple tones", "Guest management", "Security integration"],
        icon: "Home",
        colorClass: "orange",
        type: "switch",
        bestFor: "Main entrance, offices"
      }
    ]
  },
  {
    id: 'lights',
    name: 'Smart Lighting',
    icon: 'Lightbulb',
    description: 'Complete lighting solutions for homes and commercial spaces',
    products: [
      {
        name: "LED T5 Tubes",
        description: "Energy-efficient commercial lighting",
        shortDesc: "Long-lasting, bright commercial lighting",
        applications: ["Offices", "Shops", "Warehouses"],
        benefits: ["80% energy saving", "50,000 hour life", "Instant on", "Cool operation"],
        icon: "Lightbulb",
        colorClass: "yellow",
        bestFor: "Commercial spaces"
      },
      {
        name: "Smart LED Bulbs",
        description: "WiFi-controlled color changing bulbs",
        shortDesc: "Millions of colors, voice control, scheduling",
        applications: ["Living rooms", "Bedrooms", "Study rooms"],
        benefits: ["Color changing", "Dimming control", "Voice commands", "Energy monitoring"],
        icon: "Lightbulb",
        colorClass: "yellow",
        bestFor: "Home ambiance"
      },
      {
        name: "Motion Sensor Lights",
        description: "Automatic lighting with PIR sensors",
        shortDesc: "Hands-free lighting that turns on automatically",
        applications: ["Corridors", "Bathrooms", "Outdoor areas"],
        benefits: ["Auto on/off", "Energy saving", "Security feature", "Adjustable sensitivity"],
        icon: "Camera",
        colorClass: "yellow",
        bestFor: "Security, convenience"
      }
    ]
  },
  {
    id: 'automation',
    name: 'Home Automation',
    icon: 'Cpu',
    description: "Complete smart home solutions and specialty switches",
    products: [
      {
        name: "Hotel Switch Panels",
        description: "Professional switches for hospitality",
        shortDesc: "Specialized switches for hotels and guest houses",
        variants: ["Do not Disturb", "Clean Room", "Master Control"],
        applications: ["Hotels", "Resorts", "Guest houses"],
        benefits: ["Guest convenience", "Staff efficiency", "Professional look", "Durable design"],
        icon: "Building",
        colorClass: "purple",
        bestFor: "Hospitality industry"
      },
      {
        name: "Scene Controllers",
        description: "Control multiple devices with one touch",
        shortDesc: "Create lighting scenes and automation rules",
        applications: ["Living rooms", "Conference rooms", "Restaurants"],
        benefits: ["One-touch scenes", "Mood lighting", "Energy saving", "Easy setup"],
        icon: "Settings",
        colorClass: "purple",
        bestFor: "Entertainment areas"
      }
    ]
  }
];