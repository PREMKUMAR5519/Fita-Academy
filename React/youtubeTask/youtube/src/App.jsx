import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Card from './Card'
function App() {


  const youtubeData =[
    {
      title:"Happy new year",
      description:"This is a Happy new year",
      algorithm:"festivel",
      image:'https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6436.jpg'
    },
    {
      title:"Tour vlog",
      description:"This is a Happy new year",
      algorithm:"travel",
      image:'https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg'

    },
    {
      title:"mern stack course",
      description:"This is a Happy new year",
      algorithm:"education",

      image:'https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg'

    },
    {
      title:"New Movies",
      description:"This is a Happy new year",
      algorithm:"entertainment",
      image:'https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg'

    },
    {
      title:"trending video",
      description:"This is a Happy new year",
      algorithm:"entertainment",
      image:'https://img.freepik.com/free-psd/creative-youtube-thumbnail-design-template_505751-6045.jpg'

    },
    
  ]

  const filteredArray = youtubeData.filter((e)=> e.algorithm == 'education')
  return (
    <div>

      <Sidebar/>
      <TopBar/>
      <div className='main-component'>
         {filteredArray.map((e)=>(
             <Card  data={e}/>
         ))}
         
      </div>
    </div>
  )
}

export default App