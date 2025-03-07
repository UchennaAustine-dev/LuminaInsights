"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  BookOpen,
  Award,
  Sparkles,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const AboutPage = () => {
  const [selectedTeamFilter, setSelectedTeamFilter] = useState("all");

  const filteredTeamMembers =
    selectedTeamFilter === "all"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedTeamFilter
        );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-12 md:py-20"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          About Lumina Insights
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
          Illuminating perspectives in a complex world — where clarity meets
          curiosity.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div variants={itemVariants} className="mb-20">
        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-background to-background/90">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-2 h-8 w-8 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                At Lumina Insights, we strive to illuminate the complexities of
                our rapidly evolving world through thoughtful analysis, diverse
                perspectives, and compelling storytelling that resonates with
                readers globally.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                We believe that informed discourse is the foundation of
                progress. Our commitment is to deliver content that not only
                informs but inspires critical thinking, fosters empathy, and
                empowers you to engage meaningfully with the issues that shape
                our shared future.
              </p>
              <div className="flex space-x-4">
                <Button>Our Journey</Button>
                <Button variant="outline">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-full min-h-64 rounded-xl overflow-hidden">
              <img
                src="/api/placeholder/600/400"
                alt="Team collaborating"
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Our Values */}
      <motion.div variants={itemVariants} className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <Sparkles className="mr-2 h-7 w-7 text-primary" />
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300 overflow-hidden border-t-4"
              style={{ borderTopColor: value.color }}
            >
              <CardContent className="p-6">
                <div
                  className="mb-4 rounded-full w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Our Achievements */}
      <motion.div variants={itemVariants} className="mb-20">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-8">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-center">Our Impact</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {achievement.value}
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground">
                    {achievement.label}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Team Section */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center justify-center mb-10">
          <Users className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-3xl font-bold text-center">Meet Our Experts</h2>
        </div>

        {/* Team Filters */}
        <div className="flex justify-center mb-10 space-x-2 overflow-x-auto pb-2">
          <Button
            variant={selectedTeamFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedTeamFilter("all")}
            className="min-w-20"
          >
            All
          </Button>
          <Button
            variant={selectedTeamFilter === "editorial" ? "default" : "outline"}
            onClick={() => setSelectedTeamFilter("editorial")}
            className="min-w-20"
          >
            Editorial
          </Button>
          <Button
            variant={selectedTeamFilter === "tech" ? "default" : "outline"}
            onClick={() => setSelectedTeamFilter("tech")}
            className="min-w-20"
          >
            Technology
          </Button>
          <Button
            variant={selectedTeamFilter === "creative" ? "default" : "outline"}
            onClick={() => setSelectedTeamFilter("creative")}
            className="min-w-20"
          >
            Creative
          </Button>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-6 relative">
                    <div className="w-full h-40 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={member.backgroundImage}
                        alt=""
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <Avatar className="w-24 h-24 border-4 border-background absolute -bottom-10 left-1/2 transform -translate-x-1/2 shadow-md">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/20 text-primary text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="mt-10 text-center">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <Separator className="my-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex justify-center space-x-2">
                      {member.social.map((platform) => (
                        <Button
                          key={platform.name}
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          {platform.icon}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View Full Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Join Us Section */}
      <motion.div variants={itemVariants} className="text-center mt-20">
        <Card className="bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-10 relative">
            <div className="relative z-10">
              <Lightbulb className="h-12 w-12 mx-auto mb-6 text-primary-foreground opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Journey
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                Become part of our community and help us illuminate the path
                forward through thoughtful discourse and shared wisdom.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Subscribe to Newsletter
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Explore Careers
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 opacity-100"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('/api/placeholder/800/400')] bg-cover bg-center"></div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

// Core Values Data
const coreValues = [
  {
    title: "Intellectual Integrity",
    description:
      "We uphold the highest standards of accuracy, fairness, and transparency in all our content.",
    color: "#3b82f6", // blue
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Inclusive Perspectives",
    description:
      "We actively seek diverse viewpoints to enrich our understanding and challenge conventional thinking.",
    color: "#8b5cf6", // purple
    icon: <Users className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Purposeful Innovation",
    description:
      "We embrace change and continuously explore new ways to deliver meaningful insights.",
    color: "#ec4899", // pink
    icon: <Lightbulb className="h-6 w-6 text-pink-500" />,
  },
  {
    title: "Global Awareness",
    description:
      "We recognize the interconnected nature of our world and the far-reaching implications of local events.",
    color: "#10b981", // green
    icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
  },
  {
    title: "Reader-Centered Approach",
    description:
      "We prioritize the needs and interests of our readers in every piece of content we create.",
    color: "#f59e0b", // amber
    icon: <Award className="h-6 w-6 text-amber-500" />,
  },
  {
    title: "Continuous Learning",
    description:
      "We remain curious, humble, and committed to growing our knowledge and expertise.",
    color: "#ef4444", // red
    icon: <BookOpen className="h-6 w-6 text-red-500" />,
  },
];

// Achievements Data
const achievements = [
  { value: "5M+", label: "Monthly Readers" },
  { value: "120+", label: "Countries Reached" },
  { value: "15", label: "Industry Awards" },
  { value: "3,500+", label: "Published Articles" },
];

// Import Icons for social media (simplified for this example)
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

// Team Members Data (Expanded)
const teamMembers = [
  {
    name: "Emma Thompson",
    role: "Editor-in-Chief",
    department: "editorial",
    bio: "With over 15 years of journalism experience across digital and print media, Emma leads our editorial vision with passion and strategic insight. Her work has been recognized by the International Press Association.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "Twitter", icon: <TwitterIcon /> },
      { name: "LinkedIn", icon: <LinkedInIcon /> },
      { name: "Website", icon: <GlobeIcon /> },
    ],
  },
  {
    name: "Michael Chen",
    role: "Senior Tech Analyst",
    department: "tech",
    bio: "Michael's deep understanding of emerging technologies and market trends helps our readers navigate the ever-changing digital landscape. Previously at TechCrunch, he specializes in AI, blockchain, and consumer tech.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "Twitter", icon: <TwitterIcon /> },
      { name: "LinkedIn", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Sophia Rodriguez",
    role: "Environmental Correspondent",
    department: "editorial",
    bio: "Sophia's investigative reporting on climate issues has won multiple awards and inspired meaningful change. Her stories combine scientific rigor with compelling human narratives.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "Twitter", icon: <TwitterIcon /> },
      { name: "LinkedIn", icon: <LinkedInIcon /> },
      { name: "Website", icon: <GlobeIcon /> },
    ],
  },
  {
    name: "David Okafor",
    role: "Creative Director",
    department: "creative",
    bio: "David brings stories to life through innovative visual design and multimedia storytelling. His background in documentary filmmaking gives our features a unique visual perspective.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "LinkedIn", icon: <LinkedInIcon /> },
      { name: "Website", icon: <GlobeIcon /> },
    ],
  },
  {
    name: "Aisha Patel",
    role: "Data Journalism Lead",
    department: "tech",
    bio: "Specializing in data visualization and analysis, Aisha transforms complex information into accessible insights. Her work bridges technology and storytelling to reveal hidden patterns.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "Twitter", icon: <TwitterIcon /> },
      { name: "LinkedIn", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Marco Vasquez",
    role: "Senior Culture Writer",
    department: "editorial",
    bio: "Marco's thought-provoking analysis of arts, entertainment, and cultural trends has made him a respected voice in cultural criticism. He brings over a decade of experience from major publications.",
    avatar: "/api/placeholder/150/150",
    backgroundImage: "/api/placeholder/600/400",
    social: [
      { name: "Twitter", icon: <TwitterIcon /> },
      { name: "Website", icon: <GlobeIcon /> },
    ],
  },
];

export default AboutPage;
