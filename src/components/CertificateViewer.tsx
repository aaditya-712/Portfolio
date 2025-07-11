import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Award } from 'lucide-react';

const CertificateViewer = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();

  const certificates = {
    'entrepreneurship-essentials': {
      title: 'Entrepreneurship Essentials',
      issuer: 'NPTEL',
      date: 'May 2025',
      // description: 'Comprehensive course covering Spring Boot fundamentals, REST APIs, JPA, Security, and deployment.',
      // skills: ['Spring Boot', 'REST APIs', 'JPA/Hibernate', 'Spring Security', 'Maven'],
      image: '../certificates/NPTEL25GE11S115350017304546787.jpg',
      credentialUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/127/noc25-ge11/Course/NPTEL25GE11S115350017304546787.pdf'
    },
    'ai-agents-seminar': {
      title: 'AI Agents Seminar',
      issuer: 'SECT India 2.0',
      date: 'March 2025',
      // description: 'In-depth study of fundamental data structures and algorithms with practical implementations.',
      // skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting Algorithms'],
      image: '../certificates/AI-agents.jpg',
      credentialUrl: 'https://credsverse.com/credentials/c465fe1f-a6ac-4883-9b86-d4985d67d473'
    },
    'web-design': {
      title: 'Learn Web Design, Python and MySQL: Bootcamp',
      issuer: 'Udemy',
      date: 'March 2025',
      // description: 'Complete Android development course covering UI design, data storage, and app deployment.',
      // skills: ['Android SDK', 'Java', 'XML Layouts', 'SQLite', 'Material Design'],
      image: '../certificates/Web-Design-Python-and-MySQL.jpg',
      credentialUrl: 'https://www.udemy.com/certificate/UC-8b4c40c2-5f23-448e-b8bc-941d28cf363b/'
    },
    'java': {
      title: 'Java',
      issuer: 'HackerRank',
      date: 'March 2025',
      // description: 'Complete Android development course covering UI design, data storage, and app deployment.',
      // skills: ['Android SDK', 'Java', 'XML Layouts', 'SQLite', 'Material Design'],
      image: '../certificates/java_basic.jpg',
      credentialUrl: 'https://www.hackerrank.com/certificates/iframe/05968aa1b357'
    },
    'python': {
      title: 'Python',
      issuer: 'HackerRank',
      date: 'November 2024',
      // description: 'Advanced database concepts including normalization, indexing, and query optimization.',
      // skills: ['SQL', 'Database Design', 'Normalization', 'Indexing', 'Query Optimization'],
      image: '../certificates/python_basic.jpg',
      credentialUrl: 'https://www.hackerrank.com/certificates/iframe/94fbbf362eb7'
    },
    'ai-nxtwave': {
      title: 'AI for students: Build your own Generative AI model workshop',
      issuer: 'NxtWave',
      date: 'September 2024',
      // description: 'Advanced database concepts including normalization, indexing, and query optimization.',
      // skills: ['SQL', 'Database Design', 'Normalization', 'Indexing', 'Query Optimization'],
      image: '../certificates/NXT-Wave.png',
      credentialUrl: 'https://www.ccbp.in/ai-workshop-certificate?par=TXT76S90W0?utm_source=website&utm_campaign=4.0-tribe-academy-ai-workshop-inbound-certificate-linkedin&utm_medium=linkedin'
    },
    'web-development': {
      title: 'Web Development',
      issuer: 'Udemy',
      date: 'August 2024',
      // description: '',
      // skills: [],
      image: '../certificates/Web-Dev.jpg',
      credentialUrl: 'https://www.udemy.com/certificate/UC-ad056a05-45e1-4c8a-baba-3ea865f93b53/'
    },
    'java-development': {
      title: 'Java Development',
      issuer: 'TechnoHacks EduTech Official',
      date: 'August 2024',
      // description: '',
      // skills: [],
      image: '../certificates/Java-Technohack.jpg',
      credentialUrl: 'https://www.linkedin.com/in/aaditya-deshmukh-05a587262/details/certifications/1754595428/multiple-media-viewer/?profileId=ACoAAECDU4YBl-EL0dNufxL2qbVGIv-fq_hpUQE&treasuryMediaId=1721888999889'
    },
    'efset': {
      title: 'EFSET',
      issuer: 'EF SET',
      date: 'May 2024',
      // description: '',
      // skills: [],
      image: '../certificates/EF-SET.jpg',
      credentialUrl: 'https://cert.efset.org/9a3K5M'
    },
    'unstop-talent-park': {
      title: 'Certificate of Participation in MCQ Coding Assessment of Unstop Talent Park - Tech',
      issuer: 'Unstop',
      date: 'April 2024',
      // description: '',
      // skills: [],
      image: '../certificates/Unstop-Talent-Park.jpg',
      credentialUrl: 'https://unstop.com/certificate-preview/7f946dfb-fc5e-485e-8f56-20a7d15f0f39'
    },
    'aws-knowledge': {
      title: 'AWS Knowledge: Cloud Essentials',
      issuer: 'Amazon Web Services (AWS)',
      date: 'January 2024',
      // description: '',
      // skills: [],
      image: '../certificates/AWS.png',
      credentialUrl: 'https://www.credly.com/badges/2d8a6a6b-58a4-44c0-a601-3cb398fec960/linked_in_profile'
    },
    'cloud-essentials': {
      title: 'Cloud Essentials',
      issuer: 'Amazon Web Services (AWS)',
      date: 'January 2024',
      // description: '',
      // skills: [],
      image: '../certificates/Cloud-Essentials.jpg',
      credentialUrl: 'https://www.credly.com/badges/2d8a6a6b-58a4-44c0-a601-3cb398fec960/linked_in_profile'
    },
    'matlab': {
      title: 'MATLAB Tutorial Series 2023',
      issuer: 'MathTech Thinking Foundation',
      date: 'December 2023',
      // description: '',
      // skills: [],
      image: '../certificates/MATLAB.jpg',
      credentialUrl: 'https://drive.google.com/file/d/12bLaeXYTGk-gMu5nVSzf4x986o61XEf3/view?usp=drive_link'
    },
    'cpp': {
      title: 'C++',
      issuer: 'Infosys Springboard',
      date: 'November 2023',
      // description: '',
      // skills: [],
      image: '../certificates/CPP.jpg',
      credentialUrl: ''
    },
    'consultathon': {
      title: 'Certificate of Participation in Consultathon 4.0',
      issuer: 'Unstop',
      date: 'November 2023',
      // description: '',
      // skills: [],
      image: '../certificates/Consulatathon.jpg',
      credentialUrl: 'https://unstop.com/certificate-preview/2a073cd5-f8d0-424f-af1e-18a0005b6b2d'
    },
    'c': {
      title: 'C Programming Course',
      issuer: 'Infosys Springboard',
      date: 'October 2023',
      // description: '',
      // skills: [],
      image: '../certificates/C.jpg',
      credentialUrl: ''
    },
    'ui-ux': {
      title: 'Introduction To UI/UX',
      issuer: 'Skillsoft',
      date: 'October 2023',
      // description: '',
      // skills: [],
      image: '../certificates/ui-ux.png',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/1533463b-cf0e-4845-a9ee-3b82cca72709#acc.BHk3sOCG'
    },
    'basic-computer-science': {
      title: 'Basic Computer Science',
      issuer: 'nfosys Springboard',
      date: 'June 2023',
      // description: '',
      // skills: [],
      image: '../certificates/Basic-Computer-Science.jpg',
      credentialUrl: ''
    }
  };

  const certificate = certificates[certificateId as keyof typeof certificates];

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Certificate Not Found</h1>
          <p className="text-gray-400 mb-8">The certificate you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            
            <div className="flex space-x-4">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify</span>
              </a>
            </div>
          </div>

          {/* Certificate Display */}
          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                  <Award className="w-12 h-12" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {certificate.title}
              </h1>
              <p className="text-xl text-gray-400 mb-4">
                Issued by {certificate.issuer}
              </p>
              <p className="text-cyan-400 font-semibold">
                {certificate.date}
              </p>
            </div>

            {/* Certificate Image */}
            <div className="mb-8">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto max-h-[36rem] object-contain rounded-lg border-2 border-gray-700"
              />
            </div>

            {/* Description */}
            {/* <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {certificate.description}
              </p>
            </div> */}

            {/* Skills Covered */}
            {/* <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Skills Covered</h3>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}

            {/* Credential Info */}
            <div className="border-t border-gray-700 pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Certificate Holder</h4>
                  <p className="text-gray-300">Aaditya Deshmukh</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Completion Date</h4>
                  <p className="text-gray-300">{certificate.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Original Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;