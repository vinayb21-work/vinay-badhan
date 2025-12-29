import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, MapPin, Calendar, Code, Database, Cloud, Brain, FileText, TrendingUp, Users, Zap, DollarSign, Github, BookOpen, Mountain, Camera } from 'lucide-react';
import BlogSection from '@/components/BlogSection';
import ThemeToggle from '@/components/ThemeToggle';
const Index = () => {
  const skills = [{
    category: "AI/ML",
    items: ["MCP", "Google ADK", "LangGraph", "Indexing and embedding", "LLM integration", "Evals", "Multi agent system"]
  }, {
    category: "Database",
    items: ["Postgres", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"]
  }, {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Git"]
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
    techStack: ["Python", "TypeScript", "Node.js", "LLMs", "RAG", "GCP", "PostgreSQL", "Redis", "Azure", "MCP", "Google ADK", "LangGraph", "Git", "Terraform", "CI/CD", "Docker", "Kubernetes"],
    achievements: [
      "Transformed clinical trial study setup from a 6-month manual process to under a week through end-to-end automation",
      "Reversed profit margins from -90% to +40% per study by eliminating manual bottlenecks",
      "Architected self-serve platform enabling sponsors and CROs to independently build and validate studies",
      "Deployed AI-powered code generation agents leveraging custom RAG pipelines to auto-generate study extensions, tests, and deployments",
      "Established and scaled India-based engineering team, hiring and mentoring 6 developers"
    ]
  }, {
    title: "Lead Engineer",
    company: "HackerRank",
    duration: "Jan 2022 - Jun 2023",
    description: "Improved concurrency and scale of assessment platform while leading next-generation IDE design.",
    techStack: ["Golang", "Ruby", "Python", "AWS", "GCP", "Kubernetes", "Docker", "Redis", "PostgreSQL", "Terraform", "CI/CD", "Git"],
    achievements: [
      "Reduced workspace costs by 60-65% across frontend, backend, and data science environments",
      "Delivered ~$1.5M annual savings through strategic cloud resource optimization",
      "Scaled workspace concurrency 10x while improving system reliability",
      "Pioneered next-gen IDE architecture with decoupled frontend/backend, achieving sub-second load times",
      "Engineered multi-cloud infrastructure spanning AWS and GCP based on VMs and containers with custom machine images and background processes for exec and IDE",
      "Elevated IDE launch-time SLA from 80% to 98% via intelligent provisioning and warm-up strategies",
      "Boosted IDE-Editor launch SLA from 93% to 99% by developing a high-performance management service in Golang"
    ]
  }, {
    title: "Senior Software Engineer",
    company: "HackerRank",
    duration: "Apr 2021 - Dec 2021",
    description: "Led cloud IDE architecture, collaboration solutions for data science, and scaling cloud assessments platform.",
    techStack: ["Ruby on Rails", "React", "Python", "Kubernetes", "GCP", "Docker", "Redis", "Terraform", "CI/CD", "Git"],
    achievements: [
      "Reduced cloud infrastructure costs by 55% for Developer Skills Platform through architectural improvements",
      "Improved cloud engineering assessment capacity by 500% via automated warm-up and scaling strategies",
      "Established comprehensive monitoring infrastructure with Google Analytics and custom dashboards",
      "Spearheaded editor architecture and real-time collaboration features for data science assessments"
    ]
  }, {
    title: "Software Development Engineer II",
    company: "HackerRank",
    duration: "Jan 2020 - Mar 2021",
    description: "Designed and implemented data ingestion pipeline for HackerRank Enterprise and community platforms.",
    techStack: ["Python", "Spark", "PySpark", "Apache Hudi", "AWS Kinesis", "S3", "PostgreSQL", "CI/CD", "Git", "Docker", "AWS"],
    achievements: [
      "Engineered real-time data pipeline processing 60M+ annual submissions with near-instant insights",
      "Optimized Spark jobs, reducing computation time from 24 hours to under 2 minutes",
      "Accelerated IDE load times by 50% through Eclipse Theia CDN integration",
      "Implemented end-to-end observability with logging, alerting, and monitoring dashboards",
      "Unified data ingestion across interview scorecards, screening scores, challenges, and hackathons"
    ]
  }, {
    title: "Software Development Engineer I",
    company: "HackerRank",
    duration: "Aug 2018 - Dec 2019",
    description: "Integrated cloud IDE for frontend, backend, and data-science assessments in HackerRank for Work platform.",
    techStack: ["Ruby on Rails", "React", "TypeScript", "Docker", "Eclipse Theia"],
    achievements: [
      "Pioneered cloud IDE integration for multi-domain technical assessments (frontend, backend, data science)",
      "Established unit testing framework and backend best practices across the team",
      "Designed extensible microservice for managing workspace lifecycles",
      "Contributed to Eclipse Theia open-source project with production-ready enhancements"
    ]
  }, {
    title: "Software Development Engineer Intern",
    company: "HackerRank",
    duration: "Jun 2018 - Aug 2018",
    description: "Extended open-source diagramming library for architecture design skill assessments.",
    techStack: ["Ruby on Rails", "React", "JavaScript"],
    achievements: [
      "Customized open-source diagramming library to enable architecture design skill evaluation",
      "Shipped multiple features and bug fixes for the interviewing platform"
    ]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
    {/* Header/Navigation */}
    <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm dark:shadow-slate-800/50 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Vinay Badhan</h1>
          <div className="flex gap-4 items-center">
            <ThemeToggle />
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="transition-colors">
                <DropdownMenuItem asChild className="transition-colors">
                  <a href="https://github.com/vinayb21-work" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Github className="w-4 h-4 mr-2" />
                    Work Profile
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="transition-colors">
                  <a href="https://github.com/vinayb21" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Github className="w-4 h-4 mr-2" />
                    Personal Profile
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" asChild>
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
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-white/50 dark:ring-slate-700/50">
            <AvatarImage src="/vinay-badhan/uploads/profile.png" alt="Vinay Badhan" className="object-cover" />
            <AvatarFallback delayMs={600} className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              VB
            </AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 animate-fade-in">
            Engineering Leader | Strategic Problem Solver
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Engineering leader who turns complex technical challenges into measurable business outcomes.
            Specializing in AI-powered automation, distributed backend systems, cloud infrastructure, and building high-performing teams.
          </p>
          <div className="flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400 mb-8">
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

    {/* Impact Stats Banner */}
    <section className="container mx-auto px-6 -mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-slate-900/30 border border-slate-200/50 dark:border-slate-700/50 px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">10x</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Scale Improvement</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">60%</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Cost Reduction</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">6mo→1wk</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Delivery Speed</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">6+</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">Engineers Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Professional Summary */}
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-8">Professional Summary</h2>
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-lg dark:shadow-slate-900/50">
          <CardContent className="p-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Building systems that turn months of work into minutes. Currently leading a team at Medable developing AI-powered code generation
              that transformed clinical trial setup from a 6-month process to under a week—flipping profit margins from -90% to +40%.
              Over 5+ years at HackerRank, grew from intern to Lead Engineer, architecting cloud IDE infrastructure that cut costs by 60%
              and scaled assessment capacity 10x. Also designed real-time data pipelines using Spark and Apache Hudi, ingesting 60+ million
              submissions yearly with near real-time analytics—optimizing processing from 24 hours down to under a minute. Passionate about
              finding leverage points where smart engineering meets real business impact, whether through custom RAG systems, multi-agent
              architectures, data engineering at scale, or simply rethinking how things have always been done.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Skills Section */}
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => <Card key={index} className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg dark:text-slate-100">
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
    <section className="bg-white dark:bg-slate-900/50 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => <Card key={index} className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{job.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                    {job.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
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
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">Key Projects</h2>
        <div className="space-y-8">
          {/* Autobuild */}
          <Card className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Autobuild</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    Clinical Trial Study Artifact Generation
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                  2024-2025
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Use Case:</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Generate the deployable study artifact for a clinical trial study by providing the study spec in form of a JSON
                    (based on top of <a href="https://www.cdisc.org/ddf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CDISC DDF</a> -
                    industry standard with modifications to support Medable specific terminology)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Impact:</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Instantaneous generation of deployable study artifact within few seconds instead of days
                    (earlier done manually - time taking and error prone)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Challenges:</h4>
                  <p className="text-slate-600 dark:text-slate-400">
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
          <Card className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">VM Provider</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    Multi-Cloud IDE Infrastructure at HackerRank
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                  2022-2023
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Impact:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    <li>Reduced cost per workspace by 59.7% for frontend/backend and 62.95% for data science workspaces</li>
                    <li>Increased workspace concurrency by 10x with improved system reliability</li>
                    <li>Led design for next generation IDE by decoupling backend and frontend - for frontend assessments</li>
                    <li>Implemented multi-cloud support for AWS and GCP with new infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Challenges:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
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
          <Card className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Planb</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    Routing Engine written in Golang
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                  2023
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Use Case:</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Routing engine for maintaining the public routes for the workspace and workspace exec agent.
                    Tested and scaled for production traffic and load tested for 200k concurrency
                    (normal production traffic is of 10k concurrency)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Challenges:</h4>
                  <p className="text-slate-600 dark:text-slate-400">
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
          <Card className="hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300 dark:bg-slate-800/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Developer Skills Platform</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    Real-time Data Ingestion & Analytics at HackerRank
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                  2019-2021
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Impact:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    <li>Built system ingesting data from 60+ million submissions yearly with near real-time insights - Rank component of Developer Skills Platform</li>
                    <li>Optimized spark jobs reducing computational results from 24 hours to ~2 minutes</li>
                    <li>Reduced cloud infrastructure cost by ~55% for Developer Skills Platform</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Challenges:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
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
    <section className="bg-slate-100 dark:bg-slate-950 py-16 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Let's Work Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can collaborate!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="/vinay-badhan/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/vinay-badhan-861a40104/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/vinayb21-work" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub (Work)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/vinayb21" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub (Personal)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:vinay.badhan21@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Beyond Work Section */}
    <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-4">Beyond Work</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">When I'm not building software, you'll find me...</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/reading" className="text-center group cursor-pointer block">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Reading</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Exploring books on technology, leadership, and personal growth</p>
            </Link>

            <Link to="/trekking" className="text-center group cursor-pointer block">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Trekking</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Hitting the trails and conquering peaks</p>
            </Link>

            <Link to="/photos" className="text-center group cursor-pointer block">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Photography</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Capturing landscapes, wildlife, and the beauty of the outdoors</p>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-100 dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">&copy; 2025 Vinay Badhan. All rights reserved.</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  </div>;
};
export default Index;