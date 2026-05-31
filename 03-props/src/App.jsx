import { useState } from 'react'
import './App.css'

import BasicProps from './components/BasicProps.jsx';
import RefProps from './components/ResfProps.jsx';
import ChildrenProps from './components/ChildrenProps.jsx';
import ComplexProps from './components/ComplexProps.jsx';
import ThemeToggler from './components/ThemeToggler.jsx';


function Navigation() {
  

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'ref', label: 'ref Props', icon: '🔗'},
    {id: 'children', label: 'children Props', icon: '👶'},
    {id: 'complex', label: 'complex Props', icon: '🧩'},
    {id: 'theme', label: 'theme Props', icon: '🎨'}
  ]



  return(
    <>
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div className="flex justify-center">
          {sections.map((section) => (
            <button className={`px-4 py-2 rounded-lg font-medium bg-blue-600 mt-2 mr-2 hover:bg-blue-700 transition`}
            key={section.id}
            ><span>{section.icon}</span>
              {section.label}</button>
          ))}  
        </div>
      </div>
    </nav>
    </>
  );
}

function AppContent() {

  const isDark = true;

  return(

    <div className={`min-h-screen bg-gray-800`}>
      <h1 className="text-3xl text-white font-bold underline"
      >Hello world!</h1>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
        className={`text-center mb-12 transition-colors 
        ${
          isDark ? "text-white" : "text-gray-800"
        }`}>
          <h1 className="text-5xl font-bold mb-4">React props explained</h1>
          <p>A comprehensive guide to understanding props in react </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
    
  )
}
function App() {

  return(
    <AppContent />
  );
}

export default App
