import { Layout, Server, Wifi, Terminal, Database, Code, Globe, Cpu } from 'lucide-react';

export const resumeData = {
  name: "Chanatkron Ariya-Amonlert",
  title: "Network Engineer",
  email: "66200338@kmitl.ac.th",
  phone: "+66 61-628-8197",
  location: "Chumphon, Thailand",
  website: "https://www.chanatkron.codes/",
  about: "Highly motivated Computer Engineering student from King Mongkut's Institute of Technology Ladkrabang (KMITL), Prince of Chumphon Campus. Possessing a strong attention to detail and hands-on experience with Cisco Packet Tracer and basic Huawei network configuration. Passionate about Network Infrastructure, Troubleshooting, and continuous skill development to excel as a professional Network Engineer.",
  education: [
    {
      school: "King Mongkut's Institute of Technology Ladkrabang Prince of Chumphon Campus",
      degree: "Bachelor of Engineering in Computer Engineering",
      gpa: "3.68",
      year: "Present"
    }
  ],
  experience: [
    {
      title: "Network Infrastructure Design (Simulation)",
      description: "Designed a 3-Tier Hierarchical Network for a school using Draw.io and Packet Tracer. Implemented VLAN segmentation and DMZ to isolate and secure internal traffic. Structured the logical network using VLAN segmentation (VLAN 10, 20, 30, 40) and established a dedicated DMZ to isolate public-facing services from the internal network."
    },
    {
      title: "RADIUS Server & AAA Implementation (Lab Project)",
      description: "Deployed a FreeRADIUS server on Ubuntu integrated with MariaDB for centralized user authentication. Configured WPA2-Enterprise on wireless access points (Linksys/DD-WRT) to authenticate clients via RADIUS. Managed user credentials and system monitoring through phpMyAdmin and validated connectivity using radtest."
    },
    {
      title: "NETWORKING LAB EXPERIENCE",
      description: "Routing & Switching: Configured RIP v2 and Inter-VLAN routing to enable seamless cross-segment communication. Network Services: Set up DHCP Servers and Outbound NAT on Huawei routers for automated addressing and internet access. Traffic Control: Implemented ACLs to enforce security policies and filter traffic based on network requirements."
    }
  ],
  skills: {
    hard: [
      "Network Configuration (Cisco / Huawei)",
      "Routing and Switching Fundamentals",
      "IP Addressing & Subnetting",
      "VLAN Configuration",
      "ACL Configuration",
      "NAT Configuration",
      "Network Diagram Design",
      "Network Troubleshooting",
      "RADIUS (FreeRADIUS)"
    ],
    soft: [
      "Critical Thinking & Problem-Solving",
      "Team Collaboration",
      "Communication Skills",
      "Adaptability",
      "Responsibility"
    ]
  }
};
