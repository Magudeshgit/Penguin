import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import imagesLoaded from 'imagesloaded';
import { ReactLenis, useLenis } from 'lenis/react'

import banner from '../src/assets/images/banner.png'
import phbanner from '../src/assets/images/phbanner.png'
import heart from '../src/assets/images/heart.svg'

import a from '../src/assets/images/1.png'
import b from '../src/assets/images/2.png'
import c from '../src/assets/images/3.png'
import d from '../src/assets/images/4.png'
import e from '../src/assets/images/5.png'
import f from '../src/assets/images/6.png'
import g from '../src/assets/images/7.png'
import h from '../src/assets/images/8.png'
import i from '../src/assets/images/9.jpg'
import j from '../src/assets/images/10.jpg'
import k from '../src/assets/images/11.jpg'
import l from '../src/assets/images/12.png'

import m from '../src/assets/images/13.jpg'
import n from '../src/assets/images/14.jpg'
import o from '../src/assets/images/15.jpg'
import p from '../src/assets/images/16.jpg'
import q from '../src/assets/images/17.jpg'
import r from '../src/assets/images/18.jpg'

import x from '../src/assets/images/19.jpg'
import s from '../src/assets/images/20.jpg'
import t from '../src/assets/images/21.jpg'
import u from '../src/assets/images/22.jpg'
import v from '../src/assets/images/23.jpg'
import w from '../src/assets/images/24.jpg'

import mgsign from '../src/assets/images/mgsign.svg'

import heartsvg from '../src/assets/images/heartsvg.svg'
import planesvg from '../src/assets/images/planesvg.svg'

gsap.registerPlugin(ScrollTrigger)

function App() {
  // const leni = useLenis()
  const [loaded, setload] = useState(false)
  useEffect(()=>{
    imagesLoaded(document.querySelectorAll('.loadimg'), {background: true}, ()=>{
      document.querySelector('.loader').classList.toggle('active');
      console.log("sitefully loaded")
    })
  },[])
  useGSAP(()=>{
    //Banner
    gsap.to('#banner', 
      { 
        scrollTrigger:
        {
          trigger: '.mpg',
        },
        delay: 2,
        opacity: 1, 
        ease: "power2.inOut",
        duration: 1.5,
        stagger: 0.5
      });


    // Happy Birthday Text
      gsap.to('#h1', 
      { 
        delay: 0.1,
        opacity: 1, 
        ease: "power2.inOut"
      }); 

    // Name Text
    let split = new SplitType('#h2',{types: 'chars'})
    gsap.from(split.chars, 
      {
        delay: 0.5, 
        opacity: 0, 
        stagger: 0.2,
      });
    
    gsap.from('#lilhearts', 
      {
        delay: 2, 
        opacity: 0, 
      });

    // Memories Section Scroll
    const griditems = document.querySelectorAll('.photo')
    const photogrid = document.querySelector('.photogrid')
    const timeline = gsap.timeline()
    griditems.forEach(photo=>{
      timeline.fromTo(photo,
      {
        opacity: 1,
      },
      {
        scrollTrigger: 
        {
          trigger: photo,
          scrub: 1,
          start: "top top",
        },
        opacity: 0,
        // scale: 0,
        yPercent: -100,
      }
    )})

    // Wishes Section
    let wishtimeline = gsap.timeline({
      scrollTrigger:
        {
          trigger: '.wishes',
          start: 'top top',
          scrub: true,
          pin: true,
        }
    })
    wishtimeline.fromTo('.wishcard2',
      {
        x: '-500px',
        rotate: '-12deg'
      },
      {
        // duration: ,
        x: '0px',
        rotate: '0',
        scale: 1.1,
        duration: 1.5,
        ease: "power1.out"
      }
    )

    wishtimeline.fromTo('.wishcard3',
      {
        x: '500px',
        rotate: '12deg',
        duration: 1.5,
      },
      {
        delay: 1,
        x: '0',
        rotate: '0',
        scale: 1.1,
        duration: 1.5,
        ease: "power1.out"
      }
    )
    wishtimeline.fromTo('.wishcard4',
    {
      x: '-550px',
      rotate: '-24deg',
      duration: 1.5,
    },
    {
      delay: 1,
      x: '0',
      rotate: '0',
      scale: 1.1,
      duration: 1.5,
      ease: "power1.out"
    }
  )
    // MG Section
    gsap.to('.imgparent',
      {
        scrollTrigger: 
        {
          trigger: '.mgsec',
          scrub: 20,
          pin: '.mgsec',
          start: 'top top',
          end: 'center center'
        },
        x: '-75%',
        yoyo: true,
        duration: 3
      }
    )
  },[])
  return (
    <ReactLenis root>
    <section className="bg-[#FFFBF0] max-w-[100vw] overflow-x-hidden ">
      <>
      {/* Main Banner Page */}
      <div className='w-full h-full absolute left-0 top-0 mpg'>
      {
          ((screen.width<500)?
            (<img src={phbanner} alt="banner" className='loadimg min-h-[100vh] min-w-[100vw] fixed top-0 left-0 opacity-0'id="banner"/>):
            (<img src={banner} alt="banner" className='loadimg min-h-[100vh] min-w-[100vw] fixed top-0 left-0 opacity-0' id="banner"/>))
      }
      </div>
      {/* Overlay */}
      <div className="min-w-full min-h-[100vh] absolute z-10 bg-gradient-to-b from-white/75 to-transparent" id="banner"></div>
      
      <div className="min-w-full min-h-[100vh] z-20 relative flex flex-col items-center justify-center">
          <p className="font-edward text-6xl md:text-9xl opacity-0" id="h1">Happy Birthday</p>
          <p className="font-kaushan text-5xl md:text-8xl opacity-1 " id="h2">
            Abirami
            <img src={heart} className='loadimg absolute top-[-20px] right-[-70px] hidden lg:block opacity-1' id='lilhearts'/>
          </p>
      </div>
      
      </>
      {/* MEMORIES SECTION */}
      <>
      <div className='w-full min-h-[100vh] bg-[#FFFBF0] p-8 lg:pt-12 memsec relative '>
          <div className="memhead">
            <p className='font-montserrat lg:text-4xl text-3xl relative underline underline-offset-8 decoration-2'>
              MEMORIES
              <img src={heart} alt="heartimg" className='loadimg absolute top-0 right-0'/>
            </p>
          </div>
          <div className="photogrid grid gap-y-3.5 lg:grid-cols-5 grid-cols-2 mt-6 min-w-full min-h-[100vh]">
                <div className="photo hover:scale-150">
                  <img src={a} alt="memphotos" className="loadimg max-w-full aspect-square"/>
                </div>
                <div className="photo row-start-4 col-start-4 hover:scale-150 transition-all">
                  <img src={b} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-3 col-start-3 hover:scale-150 transition-all">
                  <img src={c} alt="memphotos"/>
                </div>
                <div className="photo photo row-start-5 lg:col-start-1 col-start-3 hover:scale-150 transition-all">
                  <img src={d} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-3 lg:col-start-1 col-start-3 hover:scale-150 transition-all">
                  <img src={e} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-2 col-start-5 hover:scale-150 transition-all">
                  <img src={f} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-6 col-start-3 hover:scale-150 transition-all">
                  <img src={g} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-1 col-start-4 hover:scale-150 transition-all">
                  <img src={h} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-5 col-start-5 hover:scale-150 transition-all">
                  <img src={i} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo row-start-2 lg:col-start-2 col-start-3 hover:scale-150 transition-all">
                  <img src={j} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo lg:row-start-4 row-start-6 lg:col-start-2 col-start-5 hover:scale-150 transition-all">
                  <img src={k} alt="memphotos" className='loadimg'/>
                </div>
                <div className="photo lg:row-start-5 row-start-6 lg:col-start-2 col-start-5 hover:scale-150 transition-all">
                  <img src={l} alt="memphotos" className='loadimg'/>
                </div>
            </div>
      </div>
      </>
      {/* Wishes Section */}
      <>
        <section className="wishes max-w-[100vw] overflow-x-hidden min-h-[100vh] relative bg-[#ffffff] p-8 lg:pt-12 flex items-center justify-center">
        <div className="wishhead absolute top-8 left-8">
            <p className='font-montserrat lg:text-4xl text-3xl relative underline underline-offset-[15px] decoration-2'>
              WISHES
            </p>
        </div>
        <img src={heartsvg} alt="svg" className='loadimg absolute top-6 right-10 max-w-[8%]'/>
        <p className='absolute bottom-0 left-4 font-montserrat text-[200px] font-bold opacity-65'>19</p>

        <div className="wisheswrap max-w-[100vw] overflow-x-hidden min-h-full flex justify-center items-center">
          <div className="wishcard1 relative max-w-[380px] lg:py-20 py-16 p-8 bg-[#BDB8A7] flex justify-center items-center">
              <div className="absolute top-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute top-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>

              <div className="content gap-4">
                <p className='font-montserrat text-sm opacity-75'>ONE</p>
                <p className='font-judson text-[15px] mt-2'>Dear Love,
                                                            Do you remember our first meeting? Two strangers standing alone near B Block, and suddenly we looked at each other and exchanged a random "hi." And now, here we are. Sometimes I think, "God, look where you've brought us (lol)". Everything happens for a reason, and I never believed that until I met you.
                                                            Look at my crazy girlfriend, turning 19 now. Let's fck everyone who tries to ruin our precious time together. I love you to the moon and never back.
                                                            Our bond is like a perfect match, always attached and unbreakable. If anything happens, we'll fix it together.</p>
                <p className='text-sm mt-6 font-montserrat font-bold'>SUBIKSHA</p>
              </div>
          </div>
          <div className="wishcard2 absolute z-40 max-w-[380px] max-h-[448px] lg:py-20 py-16 p-8 bg-[#B5A7BD] flex justify-center items-center">
              <div className="absolute top-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute top-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>

              <div className="content gap-4">
                <p className='font-montserrat text-sm opacity-75'>TWO</p>
                <p className='font-judson text-[15px] mt-2'>"ABIIIIIII happy birthday babbeee
                                                              U deserve all the happiness u have now and more. U always make me feel welcome and anytime I'm with u I am happy it's like u are contagious lol 
                                                              I miss u so much and hope we could be in school forever
                                                              Where I would sneak past thanveer sir to sit and talk with u guys. I hope u enjoy your day today and everyday cuz u are the best abi
                                                              Love u lotssss and can't wait to meet u soon. And this time get pedicure with me not my mom"</p>
                <p className='text-sm mt-4 font-montserrat font-bold'><b>ANIKA</b></p>
              </div>
              
          </div>
          <div className="wishcard3 absolute z-50 max-w-[380px] lg:py-20 py-16 p-8 bg-[#ADBDA7] flex justify-center items-center">
              <div className="absolute top-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute top-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>

              <div className="content gap-4">
                <p className='font-montserrat text-sm opacity-75'>THREE</p>
                <p className='font-judson text-[15px] mt-2'>So Hey B, 
It’s Nam,
Ig no need for formal convos and stuff.. I am glad you are still the brave and bold girl you always used to be.. Remember those days we you used to sit in front of me and make me laugh nonstop. I just wanted to know that I am happy for who you are today and I am really happy for both of you guys ❤.. I really can’t believe you are 19!! Wish we could have known each other for a longer period of time. I hope you have a blast and a wonderful day ahead.. 
And just wanted to remind you that i   am always here for you ✨
Wishing you a very Happy Birthday Princess ❤</p>
                <p className='text-sm mt-6 font-montserrat font-bold'>NAMRADHA</p>
              </div>
          </div>
          <div className="wishcard4 absolute z-50 max-w-[380px] lg:py-20 py-16 p-8 bg-[#BDA7B3] flex justify-center items-center">
              <div className="absolute top-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute top-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>

              <div className="content gap-4">
                <p className='font-montserrat z-[60] text-sm opacity-75'>FOUR</p>
                <p className='font-judson text-[15px] mt-2'>Happiest birthday to the Joe to my Chandler. BITCH YOU'RE 19 ALREADY!!! Bhavana still remembers you as a kid who broke her chin swinging by the table... Lol just kidding... Time just passed by so fucking fasttttt... I miss you more than anybody else Abi, even more than your boyfriend will ever could.. Can't wait to see you and tell you all of my life tea... I love you more and cheers for many years {">>>"} Once again many many more happy returns of the dayyy Abi {"<3"}</p>
                <p className='text-sm mt-6 font-montserrat font-bold'>BHAVANA</p>
              </div>
          </div>
        </div>
        </section>
      </>
      {/* MG Section */}
      <>
      <section className='max-w-[100vw] mgsec overflow-x-hidden overflow-y-hidden relative bg-[#FFFBF0] flex flex-col items-center justify-center p-8 lg:pt-12 lg:py-12'>
      <img src={planesvg} alt="svg" className='loadimg absolute z-[1000] top-[-60px] left-10 max-w-[25%]'/>
      <p className='font-montserrat text-9xl font-bold absolute top-24 right-6 opacity-50'>{'<3'}</p>
      <div className="imagewrap max-w-[80%] overflow-hidden flex gap-4 justify-center items-center mt-24">
      <div className='flex imgparent gap-4'>

      <img src={r} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={m} alt="image" className='loadimg mimg max-w-[200px] max-h-[350px]'/>
      <img src={n} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={o} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={p} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={q} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={s} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={t} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={u} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={v} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={w} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      <img src={x} alt="image" className='loadimg mimg max-w-[280px] max-h-[350px]'/>
      
      </div>
      </div>
      <div className="mgcard relative w-[80%] p-8 py-12 mt-4 bg-[#E5E3DD] flex justify-center items-center">
              <div className="absolute top-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute top-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-[6px] h-[6px] bg-black rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-[6px] h-[6px] bg-black rotate-45"></div>

              <div className="content gap-4 text-center flex items-center justify-center flex-col">
                <p className='font-montserrat text-sm opacity-75'>MGH</p>
                <p className='font-judson text-[18px] mt-2'>
                  Hey Buddy!, Wish you a very happy birthday and fun filled year together❤, Just know that I want you to be happy throughout the life forward and I will just be by your side making sure you are living to your fullest. 
                  Idhuku nadula <u>Konjam Romance Neraiya Kaadhal pannalam</u>. Indha 'Lovey-Dovey' talks la nammaku varadhu but just know that idhu ellam nee nenaikiratha vida 1000x times adhigama irruku but indha expressing elavu tha nammaku vara maatikudhu kazhudha, but yeah as always "Paathukalam❤".<br/> Enga irundho vandhinga "Fast ah pesuniga", "thimira pesuninga", "Sanda potinga", "Aarudhal sonninga", "Kooda nineenga", "Kai pudichinga", "Mela Saanjinga" Avlotha Paiyan flat uh, romence ku spelling eh theriyaatha paiyan ah ennamo panna veikiringa yaara nee yaaru. Ennavo idhuvum oru maari oru feel ah tha irruku{':)'}, Anyways</p>
                  <p className='font-montserrat font-semibold'>Happy Porandhanaal di Kuttachi Santhosama iru❤</p>
                <img src={mgsign} className='loadimg'/>
              </div>
          </div>
      </section>
      </>
    </section>
    </ReactLenis>
  )
}

export default App

