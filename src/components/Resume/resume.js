import React from 'react'
import './resume.css'
import Sittara_Shafique from '../../assets/Sittara_Shafique.pdf'
function Resume() {
  // const [isDownload,setDownload]=useState(false);
  //   useEffect(()=>{
  //          const isDownloaded=localStorage.getItem({Sittara_Shafique});
  //          if(isDownloaded){
  //           setDownload(true);
  //          }

  //   },[]);
  //   const handleDownload=()=>{
  //     localStorage.setItem({Sittara_Shafique},true);
  //     setDownload(true);
  //   };  



  return (
    <div>
      <section id="resume">
           <a href={Sittara_Shafique} className='downloadResume'>Download CV</a>
           <div className="resumeFrame">
              <embed src={Sittara_Shafique}  type="application/pdf"  className='resFrame'/>
           </div>
      </section>
    </div>
  )
}

export default Resume
