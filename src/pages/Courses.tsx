import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Cloud, Code, Terminal, Brain, Lock } from 'lucide-react';

const courses = [
  {
    icon: <Shield className="h-12 w-12 text-accent" />,
    title: 'Ethical Hacking',
    description: 'Master penetration testing, vulnerability assessment, and ethical hacking methodologies. CEH-inspired curriculum with hands-on labs.',
    duration: '12 weeks',
    level: 'Beginner',
    status: 'Coming Soon',
  },
  {
    icon: <Lock className="h-12 w-12 text-accent" />,
    title: 'Defensive Security/SOC',
    description: 'Learn security operations, threat detection, incident response, and defensive strategies for enterprise environments.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    status: 'Coming Soon',
  },
  {
    icon: <Cloud className="h-12 w-12 text-accent" />,
    title: 'Cloud Security',
    description: 'Secure cloud infrastructure and applications across AWS, Azure, and GCP. Focus on cloud-native security practices.',
    duration: '8 weeks',
    level: 'Intermediate',
    status: 'Enroll Now',
  },
  {
    icon: <Code className="h-12 w-12 text-accent" />,
    title: 'DevSecOps',
    description: 'Integrate security into the development lifecycle. Learn secure coding, CI/CD security, and automated security testing.',
    duration: '10 weeks',
    level: 'Intermediate to Advanced',
    status: 'Enroll Now',
  },
  {
    icon: <Terminal className="h-12 w-12 text-accent" />,
    title: 'Advanced Cybersecurity',
    description: 'Deep dive into advanced topics including malware analysis, reverse engineering, and advanced persistent threats.',
    duration: '16 weeks',
    level: 'Advanced',
    status: 'Coming Soon',
  },
  {
    icon: <Brain className="h-12 w-12 text-accent" />,
    title: 'IoT Hacking',
    description: 'Explore security vulnerabilities in IoT devices, firmware analysis, and hardware hacking techniques.',
    duration: '8 weeks',
    level: 'Intermediate to Advanced',
    status: 'Coming Soon',
  },
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Courses | ByteHat Academy</title>
        <meta
          name="description"
          content="Comprehensive cybersecurity courses including ethical hacking, cloud security, DevSecOps, and more. Start your cybersecurity career with ByteHat Academy."
        />
        <meta
          name="keywords"
          content="cybersecurity courses, ethical hacking training, DevSecOps certification, cloud security training"
        />
      </Helmet>

      <div className="pt-20 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-xl text-gray-400">
              Comprehensive cybersecurity training for all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card">
                <div className="mb-6">{course.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold">Level:</span> {course.level}
                  </p>
                </div>
                <button
                  className={`w-full ${
                    course.status === 'Enroll Now'
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {course.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;