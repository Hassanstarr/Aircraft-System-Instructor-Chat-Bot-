export interface AircraftSystem {
  name: string;
  description: string;
  quickFact: string;
}

export const aircraftSystems: Record<string, AircraftSystem> = {
  hydraulics: {
    name: "Hydraulic Systems",
    description: "Aircraft hydraulic systems use pressurized fluid to operate flight controls, landing gear, and brakes. They provide the muscle to move heavy control surfaces that would be impossible to operate manually.",
    quickFact: "💧 Modern aircraft hydraulic systems operate at pressures of 3000-5000 PSI - that's about 100 times the pressure in your car's tires!"
  },
  turbofan: {
    name: "Turbofan Engine",
    description: "Turbofan engines are the most common type of jet engine. They work by accelerating a large mass of air using a fan at the front, with only a portion passing through the hot core for combustion.",
    quickFact: "🔥 A turbofan engine can produce thrust equivalent to the power of thousands of car engines, yet is remarkably fuel-efficient!"
  },
  avionics: {
    name: "Avionics Systems",
    description: "Avionics encompasses all electronic systems used for communication, navigation, and flight management. This includes everything from autopilot to weather radar.",
    quickFact: "📡 Modern aircraft avionics can process millions of data points per second to keep you flying safely!"
  },
  electrical: {
    name: "Electrical Systems",
    description: "Aircraft electrical systems provide power for everything from lighting to navigation equipment. They typically use multiple generators and backup batteries for redundancy.",
    quickFact: "⚡ A large commercial aircraft can generate enough electrical power to supply a small neighborhood!"
  },
  brakes: {
    name: "Brake Systems",
    description: "Aircraft brakes use carbon composite discs that can withstand extreme heat. They're activated hydraulically and include anti-skid systems similar to ABS in cars.",
    quickFact: "🛑 Aircraft brakes can reach temperatures over 1000°C during a rejected takeoff - hot enough to melt aluminum!"
  },
  flightControls: {
    name: "Flight Control Systems",
    description: "Flight controls include primary surfaces (ailerons, elevator, rudder) and secondary surfaces (flaps, slats, spoilers). Modern aircraft use fly-by-wire systems for precise control.",
    quickFact: "🎮 Fly-by-wire systems interpret pilot inputs and automatically adjust control surfaces for optimal performance and safety!"
  }
};

export const getQuickFact = (query: string): string | null => {
  const lowerQuery = query.toLowerCase();
  
  for (const [key, system] of Object.entries(aircraftSystems)) {
    if (lowerQuery.includes(key) || lowerQuery.includes(system.name.toLowerCase())) {
      return system.quickFact;
    }
  }
  
  return null;
};

export const isSystemTopic = (query: string): boolean => {
  const lowerQuery = query.toLowerCase();
  const keywords = [
    'hydraulic', 'turbofan', 'engine', 'avionics', 'electrical', 
    'brake', 'flight control', 'autopilot', 'navigation', 
    'thrust', 'propulsion', 'landing gear', 'flaps'
  ];
  
  return keywords.some(keyword => lowerQuery.includes(keyword));
};

export const enhanceStudentAnswer = (answer: string): string => {
  // Add student-friendly formatting hints
  const enhancements = {
    safety: "⚠️ Safety Note:",
    important: "📌 Key Point:",
    example: "💡 Example:",
    remember: "🎯 Remember:"
  };
  
  let enhanced = answer;
  
  Object.entries(enhancements).forEach(([key, prefix]) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    if (regex.test(enhanced)) {
      enhanced = enhanced.replace(regex, prefix);
    }
  });
  
  return enhanced;
};
