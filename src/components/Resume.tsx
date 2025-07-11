// import React from 'react';
// import { Download, FileText, Eye } from 'lucide-react';

// const Resume = () => {
//   const handleDownload = () => {
//     // Create a link element and trigger download
//     const link = document.createElement('a');
//     link.href = '/Aaditya Deshmukh Resume.pdf';
//     link.download = 'Aaditya_Deshmukh_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleView = () => {
//     // Open resume in new tab
//     window.open('/Aaditya Deshmukh Resume.pdf', '_blank');
//   };

//   return (
//     <section id="resume" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//             My <span className="text-cyan-400">Resume</span>
//           </h2>
          
//           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
//             Download or view my complete resume to learn more about my experience, 
//             education, and technical expertise in Java backend development.
//           </p>

//           <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
//             <div className="flex items-center justify-center mb-6">
//               <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
//                 <FileText className="w-8 h-8" />
//               </div>
//             </div>

//             <h3 className="text-2xl font-semibold text-white mb-2">
//               Aaditya Deshmukh
//             </h3>
//             <p className="text-gray-400 mb-6">
//               Java Backend Developer Resume
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={handleDownload}
//                 className="flex items-center justify-center space-x-2 px-4 md:px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
//               >
//                 <Download className="w-5 h-5" />
//                 <span>Download PDF</span>
//               </button>
              
//               <button
//                 onClick={handleView}
//                 className="flex items-center justify-center space-x-2 px-4 md:px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
//               >
//                 <Eye className="w-5 h-5" />
//                 <span>View Online</span>
//               </button>
//             </div>

//             <div className="mt-8 pt-6 border-t border-gray-700/50">
//               <h4 className="text-lg font-semibold text-white mb-4">
//                 What's Inside
//               </h4>
//               <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
//                   <span>Professional Experience</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                   <span>Technical Skills</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                   <span>Education & Certifications</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//                   <span>Project Portfolio</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const fileId = '1iEY9kP9FMhMng6Iui8-YjRDYJUFwIzTK';

  const handleDownload = () => {
    window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
  };

  const handleView = () => {
    window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download or view my complete resume to learn more about my experience, 
            education, and technical expertise in Java backend development.
          </p>

          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                <FileText className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">
              Aaditya Deshmukh
            </h3>
            <p className="text-gray-400 mb-6">
              Java Backend Developer Resume
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center space-x-2 px-4 md:px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              
              <button
                onClick={handleView}
                className="flex items-center justify-center space-x-2 px-4 md:px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                <Eye className="w-5 h-5" />
                <span>View Online</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">
                What's Inside
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Professional Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Technical Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Education & Certifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Project Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
