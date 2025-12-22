import { Layout, Server, Wifi, Terminal, Database, Code, Globe, Cpu } from 'lucide-react';
import solarPdf from '../assets/Poster-solarcell.pdf';
import rltgPdf from '../assets/RLTG.pdf';

import networkDhcp from '../assets/network_dhcp.png';
import networkMac from '../assets/network_mac.png';
import networkSwitch from '../assets/network_switch.png';
import networkPing from '../assets/network_ping.png';
import networkRouting from '../assets/network_routing.png';

import aclRequirements from '../assets/acl_requirements.png';
import vlanTopology from '../assets/vlan_topology.png';
import dmzDiagram from '../assets/dmz_diagram.png';

import radiusHardware from '../assets/radius_hardware.png';
import radiusTopologyMain from '../assets/radius_topology_main.png';
import radiusTerminal from '../assets/radius_terminal.png';

export const resumeData = {
  name: "Chanatkron Ariya-Amonlert",
  title: "Network Engineer",
  email: "66200338@kmitl.ac.th",
  phone: "+66 61-628-8197",
  location: "Chumphon, Thailand",
  website: "https://www.chanatkron.codes/",
  github: "https://github.com/66200338-Chanatkron",
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
      description: "Designed a 3-Tier Hierarchical Network for a school using Draw.io and Packet Tracer. Implemented VLAN segmentation and DMZ to isolate and secure internal traffic. Structured the logical network using VLAN segmentation (VLAN 10, 20, 30, 40) and established a dedicated DMZ to isolate public-facing services from the internal network.",
      images: [dmzDiagram, aclRequirements, radiusTopologyMain, networkSwitch]
    },
    {
      title: "RADIUS Server & AAA Implementation (Lab Project)",
      description: "Deployed a FreeRADIUS server on Ubuntu integrated with MariaDB for centralized user authentication. Configured WPA2-Enterprise on wireless access points (Linksys/DD-WRT) to authenticate clients via RADIUS. Managed user credentials and system monitoring through phpMyAdmin and validated connectivity using radtest.",
      images: [vlanTopology, radiusTerminal]
    },
    {
      title: "NETWORKING LAB EXPERIENCE",
      description: "Routing & Switching: Configured RIP v2 and Inter-VLAN routing to enable seamless cross-segment communication. Network Services: Set up DHCP Servers and Outbound NAT on Huawei routers for automated addressing and internet access. Traffic Control: Implemented ACLs to enforce security policies and filter traffic based on network requirements.",
      images: [networkRouting,  networkDhcp, networkMac, networkPing, radiusHardware]
    },
    {
      title: "RLTG Web Application (rltg.online)",
      description: "Developed a web application featuring a comprehensive database management system. Designed and implemented the database schema to support application requirements. The project involves full-stack development principles, focusing on data integrity and user interaction.",
      attachment: rltgPdf,
      attachmentLabel: "View Project PDF"
    },
    {
      title: "Solar Cell Tracking System (Smart Dual-Axis)",
      description: "Developed a dual-axis solar tracking system using ESP32 and LDR sensors to optimize energy generation (increasing efficiency by 20-40% compared to fixed systems). Integrated with Raspberry Pi 4 for data logging (InfluxDB) and visualization (Grafana). Features include automated tracking, manual control, and real-time efficiency monitoring.",
      attachment: solarPdf,
      attachmentLabel: "View Project Poster"
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
