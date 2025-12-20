import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, MapPin, Calendar, Code, Database, Cloud, Brain, FileText } from 'lucide-react';
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
    title: "Engineering Manager",
    company: "Medable, Inc",
    duration: "Jun 2023 - Present",
    description: "Leading automated code generation and testing platform for clinical trial study building through LLM integration and fine tuning.",
    achievements: ["Automated the entire workflow for study building for clinical trials", "Reduced the time to launch a study from 6 months to less than a week", "Improved the profit margin per study from -90% to +40%", "Currently leading a team of 5 backend developers across global teams", "Built self-serve platform for sponsors and CROs to build and test studies", "Built and deployed code generation agents which uses a custom RAG to generation study extensions code and write tests for them and deploy them"]
  }, {
    title: "Lead Engineer",
    company: "HackerRank",
    duration: "Jan 2022 - Jun 2023",
    description: "Improved concurrency and scale of assessment platform while leading next-generation IDE design.",
    achievements: ["Reduced cost per workspace by 59.7% for frontend/backend and 62.95% for data science workspaces", "Increased workspace concurrency by 10x with improved system reliability", "Led design for next generation IDE by decoupling backend and frontend", "Implemented multi-cloud support for AWS and GCP with new infrastructure"]
  }, {
    title: "Senior Software Engineer",
    company: "HackerRank",
    duration: "Apr 2021 - Dec 2021",
    description: "Led cloud IDE architecture, collaboration solutions for data science, and scaling cloud assessments platform.",
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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Vinay Badhan</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/vinay-badhan/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/vinay-badhan-861a40104/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="mailto:vinay.badhan21@gmail.com">
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
              <AvatarImage src="lovable-uploads/646f2f19-6662-42cd-8a35-99c1d2f9f8d1.png" alt="Vinay Badhan" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                VB
              </AvatarFallback>
            </Avatar>
            <h1 className="text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
              Engineering Leader | Strategic Problem Solver
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

      {/* Professional Summary */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Professional Summary</h2>
          <Card className="bg-white/70 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                I build systems that turn months of work into minutes. At Medable, I lead a team developing AI-powered code generation 
                that transformed clinical trial setup from a 6-month process to under a week—flipping profit margins from -90% to +40%. 
                Before that, I spent 5+ years at HackerRank growing from intern to Lead Engineer, where I architected cloud IDE 
                infrastructure that cut costs by 60% and scaled assessment capacity 10x. I'm passionate about finding leverage points 
                where smart engineering meets real business impact, whether through custom RAG and knowledge pool systems, multi-agent architectures, 
                or simply rethinking how things have always been done.
              </p>
            </CardContent>
          </Card>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Key Projects</h2>
          <div className="space-y-8">
            {/* Autobuild */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Autobuild</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Clinical Trial Study Artifact Generation
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-600">
                    2024-2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Use Case:</h4>
                    <p className="text-slate-600">
                      Generate the deployable study artifact for a clinical trial study by providing the study spec in form of a JSON 
                      (based on top of <a href="https://www.cdisc.org/ddf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDISC DDF</a> - 
                      industry standard with modifications to support Medable specific terminology)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Impact:</h4>
                    <p className="text-slate-600">
                      Instantaneous generation of deployable study artifact within few seconds instead of days 
                      (earlier done manually - time taking and error prone)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenges:</h4>
                    <p className="text-slate-600">
                      Understand the context of the clinical trial space and coming up with unified schema for both input and output 
                      which is extensible and easy to maintain
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://autobuild.medable.com/api-docs/" target="_blank" rel="noopener noreferrer">
                        View Documentation
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VM Provider */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">VM Provider</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Multi-Cloud IDE Infrastructure at HackerRank
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-600">
                    2022-2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Impact:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Reduced cost per workspace by 59.7% for frontend/backend and 62.95% for data science workspaces</li>
                      <li>Increased workspace concurrency by 10x with improved system reliability</li>
                      <li>Led design for next generation IDE by decoupling backend and frontend - for frontend assessments</li>
                      <li>Implemented multi-cloud support for AWS and GCP with new infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenges:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>New infrastructure development within a quarter and migration of all production traffic in the next upcoming quarter while ensuring all components and questions are working as expected</li>
                      <li>Worked across multiple teams and ensured the success of the project</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.hackerrank.com/blog/hackerrank-projects-interview-professional-hires-real-world-scenarios/" target="_blank" rel="noopener noreferrer">
                        HackerRank Blog
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://vinay-badhan21.medium.com/vm-provider-at-hackerrank-for-projects-65c2c75d79ae?source=rss-dad166d0686f------2" target="_blank" rel="noopener noreferrer">
                        Medium: VM Provider
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://vinay-badhan21.medium.com/aws-as-provider-vm-provider-with-workspace-service-at-hackerrank-48cba63340f6" target="_blank" rel="noopener noreferrer">
                        Medium: AWS Provider
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planb */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Planb</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Routing Engine written in Golang
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-600">
                    2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Use Case:</h4>
                    <p className="text-slate-600">
                      Routing engine for maintaining the public routes for the workspace and workspace exec agent. 
                      Tested and scaled for production traffic and load tested for 200k concurrency 
                      (normal production traffic is of 10k concurrency)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenges:</h4>
                    <p className="text-slate-600">
                      Evaluated all different routing solutions and this fit well for our case for faster routing using redis based routes. 
                      Traefik had one issue with one of the packages it uses with redis - the dashboard fetches all entries and load testing 
                      caught that beyond 20k records, the insertions became significantly slower. Wrote this solution on top of existing 
                      open source project, updated it, cleaned it up, fixed bugs and deployed it to production with comprehensive testcases.
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/vinayb21/planb" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Developer Skills Platform */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Developer Skills Platform</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Real-time Data Ingestion & Analytics at HackerRank
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-600">
                    2019-2021
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Impact:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Built system ingesting data from 60+ million submissions yearly with near real-time insights - Rank component of Developer Skills Platform</li>
                      <li>Optimized spark jobs reducing computational results from 24 hours to ~2 minutes</li>
                      <li>Reduced cloud infrastructure cost by ~55% for Developer Skills Platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenges:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Learning spark and data ingestion from scratch in a short span of time and implement the PoC within a month</li>
                      <li>Led team and architected the entire system</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.hackerrank.com/wp-content/uploads/2020/05/HackerRank_Developer-Skills-Platform.pdf" target="_blank" rel="noopener noreferrer">
                        Platform Overview
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://vinay-badhan21.medium.com/spark-streaming-monitoring-2cfaeff72199" target="_blank" rel="noopener noreferrer">
                        Medium: Spark Monitoring
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://vinay-badhan21.medium.com/optimisations-and-checkpointing-for-spark-streaming-job-8187ee3d4fe4" target="_blank" rel="noopener noreferrer">
                        Medium: Optimizations
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://vinay-badhan21.medium.com/using-apache-hudi-snapshot-queries-with-pyspark-ccc803e3c009" target="_blank" rel="noopener noreferrer">
                        Medium: Apache Hudi
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="/vinay-badhan/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.linkedin.com/in/vinay-badhan-861a40104/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="mailto:vinay.badhan21@gmail.com">
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
            <p>&copy; 2025 Vinay Badhan. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;