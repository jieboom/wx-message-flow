import { useEffect, useRef } from 'react'
import  './App.css'
const App = () => {
  const wrapper3Ref  = useRef(null)
  const wrapper2Ref = useRef(null)
  
  useEffect(() => {
     new IntersectionObserver(entry => {
      console.log(entry);
    },{
      root:wrapper2Ref.current
    })
  })
  return (
    <div className="wrapper1">
       <div className="wrapper2" ref={wrapper2Ref}>
          <div className="wrapper3" ref={wrapper3Ref}></div>
       </div>
    </div>
  )
}

export default App
