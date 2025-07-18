import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, MapPin, Calendar, ExternalLink, Code, Database, Cloud, Brain } from 'lucide-react';
import BlogSection from '@/components/BlogSection';
const Index = () => {
  const skills = [{
    category: "AI/ML",
    items: ["Indexing and embedding", "LLM integration", "GPT, Claude, Gemini", "CLI tools - codex-cli and gemini-cli", "Evals", "Multi agent system", "Google ADK"]
  }, {
    category: "Database",
    items: ["Postgres", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
  }, {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "Kubernetes", "CI/CD", "Git"]
  }, {
    category: "Data Engineering",
    items: ["Spark", "Pyspark", "Apache Hudi", "AWS Kinesis"]
  }, {
    category: "Backend",
    items: ["Python", "Javascript", "Typescript", "Nodejs", "Ruby", "Golang", "REST APIs", "GraphQL", "gRPC"]
  }, {
    category: "Frontend",
    items: ["ReactJS", "NextJS", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript"]
  }];
  const experience = [{
    title: "Technical Lead / Engineering Manager",
    company: "Medable, Inc",
    duration: "Jun 2023 - Present",
    description: "Leading automated code generation and testing platform for clinical trial study building through LLM integration and fine tuning.",
    achievements: ["Automated the entire workflow for study building for clinical trials", "Reduced the time to launch a study from 6 months to less than a week", "Improved the profit margin per study from -90% to +40%", "Currently leading a team of 5 backend developers across global teams", "Built self-serve platform for sponsors and CROs to build and test studies"]
  }, {
    title: "Lead Engineer",
    company: "HackerRank",
    duration: "Jan 2022 - Jun 2023",
    description: "Improving concurrency and scale of assessment platform while leading next-generation IDE design.",
    achievements: ["Reduced cost per workspace by 59.7% for frontend/backend and 62.95% for data science workspaces", "Increased workspace concurrency by 10x with improved system reliability", "Led design for next generation IDE by decoupling backend and frontend", "Implemented multi-cloud support for AWS and GCP with new infrastructure"]
  }, {
    title: "Senior Software Engineer",
    company: "HackerRank",
    duration: "Apr 2021 - Dec 2021",
    description: "Leading cloud IDE architecture, collaboration solutions for data science, and scaling cloud assessments platform.",
    achievements: ["Reduced cloud infrastructure cost by ~55% for Developer Skills Platform", "Improved scale for cloud engineering role by 500%", "Set up monitoring and dashboard for usage analytics", "Led efforts on editors-architecture and collaboration solutions"]
  }, {
    title: "Software Development Engineer II",
    company: "HackerRank",
    duration: "Jan 2020 - Mar 2021",
    description: "Designed and implemented data ingestion pipeline for HackerRank Enterprise and community platforms.",
    achievements: ["Built system ingesting data from 60+ million submissions yearly with near real-time insights", "Optimized spark jobs reducing computational results from 24 hours to ~2 minutes", "Reduced IDE load time by ~50% through Eclipse Theia CDN integration", "Implemented logging, alerts and monitoring dashboards for data processing"]
  }, {
    title: "Software Development Engineer I",
    company: "HackerRank",
    duration: "Aug 2018 - Dec 2019",
    description: "Integration of cloud IDE for frontend, backend, and data-science assessment in HackerRank for work platform.",
    achievements: ["Integration of cloud IDE for frontend, backend, and data-science assessment in HackerRank for work platform", "Unit-testing and best practices setup for the backend", "Wrote extensible backend service used for workspaces lifecycle", "Build new features and fix bugs", "Reactjs, Docker, Kubernetes, Ruby on Rails, JavaScript, Backbonejs, Typescript, firebase, Redash, ELK stack", "Open source contributions to Eclipse Theia"]
  }, {
    title: "Software Development Engineer Intern",
    company: "HackerRank",
    duration: "Jun 2018 - Aug 2018",
    description: "Worked on modifying an open source library as per the business requirements for assessment of Design Architecture diagram skills of a candidate.",
    achievements: ["Worked on modifying an open source library as per the business requirements for assessment of Design Architecture diagram skills of a candidate", "Bug fixes and build new features", "Ruby on rails, ReactJS, nodeJS, firebase, twilio, ruby, git"]
  }];
  const projects = [{
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning insights for business intelligence.",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    highlights: ["Real-time data processing", "ML-based predictions", "Interactive visualizations"]
  }, {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    highlights: ["Secure payment processing", "Admin dashboard", "Mobile responsive"]
  }, {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment and scaling solution for microservices architecture.",
    tech: ["Docker", "Kubernetes", "AWS", "Terraform"],
    highlights: ["Auto-scaling", "Cost optimization", "Zero-downtime deployments"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Vinay Badhan</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/vinay-badhan-861a40104/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="mailto:vinay.badhan@email.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/lovable-uploads/646f2f19-6662-42cd-8a35-99c1d2f9f8d1.png" alt="Vinay Badhan" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                VB
              </AvatarFallback>
            </Avatar>
            <h1 className="text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Tech lead / Manager & Problem solver
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Passionate about building scalable applications, implementing AI/ML solutions, 
              and creating efficient cloud architectures. Experienced in leading teams and 
              delivering high-quality software products.
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote (Currently based out of Bengaluru)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {skillCategory.category === "Frontend" && <Code className="w-5 h-5 text-blue-500" />}
                    {skillCategory.category === "Backend" && <Database className="w-5 h-5 text-green-500" />}
                    {skillCategory.category === "Database" && <Database className="w-5 h-5 text-purple-500" />}
                    {skillCategory.category === "Cloud & DevOps" && <Cloud className="w-5 h-5 text-orange-500" />}
                    {skillCategory.category === "AI/ML" && <Brain className="w-5 h-5 text-red-500" />}
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-slate-800">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-slate-600">
                        {job.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {job.achievements.map((achievement, achIndex) => <li key={achIndex}>{achievement}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Highlights:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                        {project.highlights.map((highlight, hlIndex) => <li key={hlIndex}>{highlight}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can collaborate!
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.linkedin.com/in/vinay-badhan-861a40104/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="mailto:vinay.badhan@email.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2024 Vinay Badhan. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;