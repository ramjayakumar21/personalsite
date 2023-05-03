import { useEffect, useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import Card from './components/Card'
import DarkModeButton from './components/DarkModeButton'
import "./index.css"
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  


  const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    let body = document.getElementById("body-elem")
    console.log("body", body)



    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7777e8,
          backgroundColor: 0x1a1a1b,
          points: 9.00,
          maxDistance: 17.00,
          spacing: 16.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])



  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  
  // camera.position.z = 5;

  // function animate() {
  //   requestAnimationFrame( animate );
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render( scene, camera );
  // }
  // animate();



  return (
  <div className='content'>
    {/* <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}></DarkModeButton> */}
    <Card darkMode={darkMode}/>
  </div>
  )
}


export default App
