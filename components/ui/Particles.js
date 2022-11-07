import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesStuff = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onDiv: {
              elementId: 'repulse-div',
              enable: false,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.2,
              size: 60,
              speed: 10,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.01,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 0.1,
              },
            },
            push: {
              quantity: 2,
            },
            remove: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#000',
          },
          lineLinked: {
            blink: false,
            color: '#000',
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.1,
            width: 1,
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: true,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 100,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.01,
              sync: true,
            },
            random: true,
            value: 0.2,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: 'random',
            random: true,
            value: 0,
          },
          shape: {
            character: {
              fill: true,
              font: 'Verdana',
              style: '',
              value: 'ASfsfksn',
              weight: '400',
            },
            image: [
              {
                src: '/images/banana.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/beer.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/cards.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/chicken.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/dobby.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/frog.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/hand1.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/hand2.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/hand3.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/hand4.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/houba.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/housenka.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/lungs.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/muchomurka.png',
                width: 64,
                height: 64,
              },
              {
                src: '/images/potlouk.png',
                width: 64,
                height: 64,
              },
            ],
            polygon: {
              sides: 20,
            },
            stroke: {
              color: '#000000',
              width: 0,
            },
            type: 'image',
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.02,
              speed: 20,
              sync: true,
            },
            random: false,
            value: 40,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: '#ffffff',
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          type: 'none',
          url: '',
        },
        background: {
          color: '#fff',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  )
}

export default ParticlesStuff
