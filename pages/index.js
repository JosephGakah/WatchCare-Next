import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavigationLinks3 from '../components/navigation-links3'
import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Watch&Care</title>
          <meta property="og:title" content="Watch&amp;Care" />
        </Head>
        <div data-modal="practices" className="home-modal">
          <div className="home-practices">
            <div className="home-heading">
              <span className="home-header">Our practices</span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-grid">
              <div className="home-section">
                <div className="home-heading01">
                  <span className="home-header01">Cardiology</span>
                  <span className="home-caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image"
                  />
                </div>
              </div>
              <div className="home-section1">
                <div className="home-heading02">
                  <span className="home-header02">Orthopedics</span>
                  <span className="home-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text01">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image01"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading03">
                  <span className="home-header03">Ophtalmology</span>
                  <span className="home-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text02">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image02"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading04">
                  <span className="home-header04">Pediatrics</span>
                  <span className="home-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text03">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image03"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading05">
                  <span className="home-header05">Nutrition</span>
                  <span className="home-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text04">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image04"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading06">
                  <span className="home-header06">General</span>
                  <span className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text05">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image05"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <header data-role="Header" className="home-header07">
          <div className="home-container1">
            <img alt="logo" src="/logo1-200h.png" className="home-image06" />
            <div className="home-nav">
              <NavigationLinks3 rootClassName="rootClassName12"></NavigationLinks3>
            </div>
          </div>
          <div className="home-btn-group">
            <button className="home-button button">Contact Us</button>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon01">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <nav className="home-nav1">
              <div className="home-container2">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image07"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks3 rootClassName="rootClassName14"></NavigationLinks3>
            </nav>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon05">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon07">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon09">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-content">
              <div className="home-heading07">
                <h1 className="home-header08">
                  Your Home Health Assistance Experts
                </h1>
                <p className="home-caption6">Quality Care you can Trust</p>
              </div>
              <button className="button button-main home-book">
                <img
                  alt="image"
                  src="/Icons/calendar.svg"
                  className="home-image08"
                />
                <span>Call Us Today</span>
              </button>
            </div>
            <div className="home-image09">
              <img
                alt="image"
                src="/doctor-image-1500w.png"
                className="home-image10"
              />
            </div>
          </div>
          <div id="features" className="home-features">
            <div className="home-content01">
              <Features></Features>
              <Features Title="Virtual Clinic"></Features>
              <Features Title="Clinical results"></Features>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section className="home-practices1">
          <div className="home-heading08">
            <h2 className="home-text07">Our Services</h2>
            <animate-on-reveal
              animation="fadeInUp"
              duration="600ms"
              delay="300s"
              direction="normal"
              easing="ease"
              iteration="1"
              className="home-animate-on-reveal"
            >
              <p data-thq-animate-on-reveal="true" className="home-text08">
                <span>
                  We prioritize the well-being and independence of our clients,
                  providing dedicated caregivers who are trained and experienced
                  in delivering exceptional care.
                </span>
                <br></br>
                <span>
                  With us,​ you can trust that your loved one will receive the
                  support and attention they need to enhance their quality of
                  life.
                </span>
              </p>
            </animate-on-reveal>
          </div>
          <div className="home-content02">
            <div className="home-grid1">
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper">
                    <Practice rootClassName="practice-root-class-name"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper1">
                    <Practice
                      Title="Comapionship"
                      Description="Our dedicated caregivers provide compassionate companionship to individuals in need. "
                      rootClassName="practice-root-class-name1"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper2">
                    <Practice
                      Title="Alzheimer's and Dementia Care"
                      Description="Our specialized Alzheimer's and Dementia care services are designed to  comprehensive  support   to  individuals  with  memory  loss  and cognitive decline."
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper3">
                    <Practice
                      Title=" Short-Term Care"
                      Description="We offer reliable and professional short-term care services for individuals in need of temporary assistance."
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper4">
                    <Practice
                      Title="Mobility Support"
                      Description="we offer dedicated mobility support services to individuals who may require assistance with their movement and daily tasks."
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper5">
                    <Practice
                      Title="Shopping and Stocking Support"
                      Description="Our caregivers are ready to lend a helping hand, ensuring that necessary supplies are available and the home is well-stocked."
                    ></Practice>
                  </div>
                </a>
              </Link>
            </div>
            <button data-open="practices" className="button button-main">
              <span>All practices</span>
            </button>
          </div>
        </section>
        <section id="how-it-works" className="home-why">
          <div className="home-heading09">
            <h2 className="home-header09">Why choose us</h2>
            <p className="home-header10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content03">
            <div className="home-video">
              <video
                src
                poster="/video-1500w.png"
                className="home-video1"
              ></video>
              <div className="home-play">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-image11"
                />
              </div>
            </div>
            <div className="home-caption7">
              <h3 className="home-header11">
                Consectetur adipiscing elit, sed do eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p className="home-header12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </section>
        <section className="home-features1">
          <div className="home-section6">
            <div className="home-content04">
              <div className="home-header13">
                <h2 className="home-heading10">
                  Dedicated doctors with the core mission to help.
                </h2>
                <p className="home-capton">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text13">See our doctors</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image12"
                />
              </div>
            </div>
            <img alt="image" src="/xray-1500w.png" className="home-image13" />
          </div>
          <div className="home-section7">
            <img alt="image" src="/lab-1500w.png" className="home-image14" />
            <div className="home-content05">
              <div className="home-header14">
                <h2 className="home-heading11">
                  Get access to specialty tests and breakthrough information.
                </h2>
                <p className="home-capton1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text14">Find test</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image15"
                />
              </div>
            </div>
          </div>
          <div className="home-section8">
            <div className="home-content06">
              <div className="home-header15">
                <h2 className="home-heading12">
                  Find out how we can help you help you.
                </h2>
                <p className="home-capton2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button button-main home-book1">
                <span>Book a virtual appointment</span>
              </button>
            </div>
            <img
              alt="image"
              src="/examination-1500w.png"
              className="home-image16"
            />
          </div>
          <button className="home-book2 button button-main">
            <span>Book a virtual appointment</span>
          </button>
        </section>
        <section id="schedule" className="home-schedule">
          <div className="home-content07">
            <div className="home-header16">
              <h2 className="home-heading13">
                Schedule an in person or virtual appointment today
              </h2>
              <p className="home-caption8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="home-types">
              <a
                href="#book"
                className="home-book-person button button-main button-white"
              >
                <span>Book in person appointment</span>
              </a>
              <button className="button button-main button-white home-book-person1">
                <span>Book virtual appointment</span>
              </button>
            </div>
          </div>
        </section>
        <div className="home-search">
          <div className="home-heading14">
            <h2 className="home-text19">Search diseases &amp; conditions</h2>
            <p className="home-text20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content08">
            <div className="home-type-one">
              <div className="home-alphabet">
                <div data-letter="a" className="letter">
                  <span className="home-text21">A</span>
                </div>
                <div data-letter="b" className="letter">
                  <span className="home-text22">B</span>
                </div>
                <div data-letter="c" className="letter">
                  <span className="home-text23">C</span>
                </div>
                <div data-letter="d" className="letter">
                  <span className="home-text24">D</span>
                </div>
                <div data-letter="e" className="letter">
                  <span className="home-text25">E</span>
                </div>
                <div data-letter="f" className="letter">
                  <span className="home-text26">F</span>
                </div>
                <div data-letter="g" className="letter">
                  <span className="home-text27">G</span>
                </div>
                <div data-letter="h" className="letter">
                  <span className="home-text28">H</span>
                </div>
                <div data-letter="i" className="letter">
                  <span className="home-text29">I</span>
                </div>
                <div data-letter="j" className="letter">
                  <span className="home-text30">J</span>
                </div>
                <div data-letter="k" className="letter">
                  <span className="home-text31">K</span>
                </div>
                <div data-letter="l" className="letter">
                  <span className="home-text32">L</span>
                </div>
                <div data-letter="m" className="letter">
                  <span className="home-text33">M</span>
                </div>
                <div data-letter="n" className="letter">
                  <span className="home-text34">N</span>
                </div>
                <div data-letter="o" className="letter">
                  <span className="home-text35">O</span>
                </div>
                <div data-letter="p" className="letter">
                  <span className="home-text36">P</span>
                </div>
                <div data-letter="q" className="letter">
                  <span className="home-text37">Q</span>
                </div>
                <div data-letter="r" className="letter">
                  <span className="home-text38">R</span>
                </div>
                <div data-letter="s" className="letter">
                  <span className="home-text39">S</span>
                </div>
                <div data-letter="t" className="letter">
                  <span className="home-text40">T</span>
                </div>
                <div data-letter="u" className="letter">
                  <span className="home-text41">U</span>
                </div>
                <div data-letter="v" className="letter">
                  <span className="home-text42">V</span>
                </div>
                <div data-letter="w" className="letter">
                  <span className="home-text43">W</span>
                </div>
                <div data-letter="x" className="letter">
                  <span className="home-text44">X</span>
                </div>
                <div data-letter="y" className="letter">
                  <span className="home-text45">Y</span>
                </div>
                <div data-letter="z" className="letter">
                  <span className="home-text46">Z</span>
                </div>
              </div>
              <p className="home-text47">
                You don’t know it’s name? Check out symptom checker below
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div data-teleport="results" className="home-results">
                <span className="home-heading15">Results:</span>
                <div data-results="letters" className="home-list"></div>
              </div>
            </div>
            <div className="home-type-two">
              <div className="home-heading16">
                <h3 className="home-text48">Symptom checker</h3>
                <p className="home-text49">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="home-symptoms">
                <div className="home-row">
                  <div className="symptom">
                    <span className="home-text50">Abdominal pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text51">Chest pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text52">Constipation</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text53">Cough</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text54">Breath difficulty</span>
                  </div>
                </div>
                <div className="home-row1">
                  <div className="symptom">
                    <span className="home-text55">Red eye</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text56">Foot pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text57">Foot swelling</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text58">Headache</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text59">Heart palpitation</span>
                  </div>
                </div>
                <div className="home-row2">
                  <div className="symptom">
                    <span className="home-text60">Knee pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text61">Hip pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text62">Low back pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text63">Nasal congestion</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text64">Neck pain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="book" className="home-book3">
          <div className="home-heading17">
            <h2 className="home-text65">Book an appointment</h2>
            <p className="home-text66">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-form">
            <div className="home-types1">
              <div className="book-type">
                <span className="home-text67">In person appointment</span>
              </div>
              <div className="book-type">
                <span className="home-text68">Virtual appointment</span>
              </div>
            </div>
            <div className="home-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                className="input book-input"
              />
              <div className="home-date">
                <input
                  type="date"
                  placeholder="Date"
                  className="input book-input"
                />
                <img
                  alt="image"
                  src="/Icons/calendar-2.svg"
                  className="home-image17"
                />
              </div>
              <input
                type="text"
                placeholder="Practice"
                className="input book-input"
              />
              <div className="home-lower">
                <p className="home-text69">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="home-button1">
                  <button className="home-book4 button button-main">
                    <span>Book</span>
                  </button>
                  <p className="home-text71">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text73">adipiscing elit</span>
                    <span>
                      , sed do eiusmod tempor
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text75">incididunt</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-meet">
          <div className="home-heading18">
            <h2 className="home-text77">Meet our doctors</h2>
            <p className="home-text78">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list1">
            <div className="home-controls">
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="previous"
                className="arrow"
              />
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="next"
                className="home-forward arrow"
              />
            </div>
            <div data-teleport="doctors" className="home-doctors">
              <Doctor></Doctor>
              <Doctor image_src="/Doctors/doctor-2-300w.png"></Doctor>
              <Doctor image_src="/Doctors/doctor-3-300w.png"></Doctor>
              <Doctor image_src="/Doctors/doctor-4-300w.png"></Doctor>
            </div>
          </div>
          <div className="home-search1">
            <input
              type="text"
              placeholder="Search by name"
              className="home-textinput5 input book-input"
            />
            <button className="button button-main home-book5">
              <span>Search doctor</span>
            </button>
          </div>
        </section>
        <section className="home-news">
          <div className="home-heading19">
            <h2 className="home-text80">Read our latest news</h2>
            <p className="home-text81">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list2">
            <div className="home-item">
              <div className="home-image18">
                <img
                  alt="image"
                  src="/News/news-logo-1500w.png"
                  className="home-image19"
                />
              </div>
              <div className="home-content09">
                <div className="home-details">
                  <span className="home-date1">November 23, 2022</span>
                  <p className="home-quick-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text82">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image20"
                  />
                </div>
              </div>
            </div>
            <div className="home-item1">
              <div className="home-image21">
                <img
                  alt="image"
                  src="/News/news-1-1500w.png"
                  className="home-image22"
                />
              </div>
              <div className="home-content10">
                <div className="home-details1">
                  <span className="home-date2">November 23, 2022</span>
                  <p className="home-quick-description1">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text83">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image23"
                  />
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image24">
                <img
                  alt="image"
                  src="/News/news-2-1500w.png"
                  className="home-image25"
                />
              </div>
              <div className="home-content11">
                <div className="home-details2">
                  <span className="home-date3">November 23, 2022</span>
                  <p className="home-quick-description2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text84">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image26"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-download">
          <div className="home-main1">
            <img alt="image" src="/phone-1500w.png" className="home-image27" />
            <div className="home-content12">
              <h2 className="home-text85">
                Download our mobile app and book your next appointment
              </h2>
              <div className="home-buttons">
                <button className="home-i-os button button-main">
                  <img
                    alt="image"
                    src="/Icons/apple.svg"
                    className="home-image28"
                  />
                  <span>Download for iOS</span>
                </button>
                <button className="button button-main home-android">
                  <img
                    alt="image"
                    src="/Icons/android.svg"
                    className="home-image29"
                  />
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="home-left">
            <div className="home-brand">
              <img
                alt="image"
                src="/Branding/logo-2.svg"
                className="home-image30"
              />
              <p className="home-text88">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-socials">
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/insider.svg"
                  className="home-image31"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/instagram.svg"
                  className="home-image32"
                />
              </div>
              <div className="social">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image33"
                />
              </div>
            </div>
            <div className="home-legal">
              <span className="home-copyright">
                © 2022 finbest. All Rights Reserved.
              </span>
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
          </div>
          <div className="home-right">
            <div className="home-list3">
              <span className="home-header17">Menu</span>
              <div className="home-links">
                <span className="home-link06">Home</span>
                <span className="home-link07">About</span>
                <span className="home-link08">Services</span>
                <span className="home-link09">Blog</span>
                <span className="home-link10">Support</span>
              </div>
            </div>
            <div className="home-list4">
              <span className="home-header18">Resources</span>
              <div className="home-links1">
                <span className="home-link11">Test Results</span>
                <span className="home-link12">Patients</span>
                <span className="home-link13">Doctors</span>
                <span className="home-link14">Health</span>
              </div>
            </div>
            <div className="home-list5">
              <span className="home-header19">Contact</span>
              <div className="home-links2">
                <span className="home-link15">
                  24 Street Name, City FI 01234, RO
                </span>
                <a
                  href="mailto:contact@template.new?subject=Main"
                  className="home-link16"
                >
                  contact@template.new
                </a>
                <a href="tel:(004) 234 - 5678" className="home-link17">
                  (004) 234 - 5678
                </a>
              </div>
            </div>
          </div>
          <div className="home-legal1">
            <div className="home-row3">
              <span className="legal-link">Privacy Policy</span>
              <span className="legal-link">Terms of Use</span>
            </div>
            <span className="home-copyright5">
              © 2022 finbest. All Rights Reserved.
            </span>
          </div>
        </div>
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container8">
            <Script
              html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-modal {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 200;
            position: fixed;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
          }
          .home-practices {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-header {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-close {
            width: 24px;
            cursor: pointer;
            height: 24px;
            transition: 0.3s;
          }
          .home-close:hover {
            opacity: 0.5;
          }
          .home-grid {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-section {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image {
            width: 12px;
            object-fit: cover;
          }
          .home-section1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text01 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image01 {
            width: 12px;
            object-fit: cover;
          }
          .home-section2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text02 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image02 {
            width: 12px;
            object-fit: cover;
          }
          .home-section3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header04 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text03 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image03 {
            width: 12px;
            object-fit: cover;
          }
          .home-section4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text04 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image04 {
            width: 12px;
            object-fit: cover;
          }
          .home-section5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text05 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image05 {
            width: 12px;
            object-fit: cover;
          }
          .home-header07 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image06 {
            width: 180px;
            height: 50px;
          }
          .home-nav {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            padding: 10px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #0069ff;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon01 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image07 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon03 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon05 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon07 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon09 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header08 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-caption6 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image08 {
            width: 18px;
            object-fit: cover;
          }
          .home-image09 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            height: 95%;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: #2461ff;
          }
          .home-content01 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-background {
            right: 0px;
            width: 37%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d0f4fd;
          }
          .home-practices1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: 120px;
            animation-name: fadeInUp;
            flex-direction: row;
            padding-bottom: 120px;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-heading08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            animation-name: fadeInUp;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-animate-on-reveal {
            font-size: 18px;
            max-width: 385px;
            line-height: 22px;
          }
          .home-text08 {
            font-size: 18px;
            max-width: 385px;
            line-height: 22px;
          }
          .home-content02 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-practice-wrapper {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading09 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header09 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-header10 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-content03 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-video {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-video1 {
            width: 100%;
          }
          .home-play {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            cursor: pointer;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-play:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .home-image11 {
            width: 80px;
            object-fit: cover;
          }
          .home-caption7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header11 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 36px;
          }
          .home-header12 {
            max-width: 600px;
            text-align: center;
            line-height: 24px;
          }
          .home-features1 {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-section6 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading10 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text13 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image12 {
            width: 12px;
            object-fit: cover;
          }
          .home-image13 {
            width: 400px;
            object-fit: cover;
          }
          .home-section7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-image14 {
            width: 520px;
            object-fit: cover;
          }
          .home-content05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading11 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton1 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text14 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image15 {
            width: 12px;
            object-fit: cover;
          }
          .home-section8 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading12 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton2 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image16 {
            width: 580px;
            object-fit: cover;
          }
          .home-book2 {
            display: none;
          }
          .home-schedule {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-content07 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading13 {
            color: #ffffff;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-caption8 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            max-width: 900px;
            text-align: center;
            line-height: 27px;
          }
          .home-types {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-book-person {
            text-decoration: none;
          }
          .home-search {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: stretch;
            border-color: #b4b9c6;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 110px;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text19 {
            font-size: 56px;
            max-width: 385px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text20 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-content08 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-one {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #b4b9c6;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-alphabet {
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(10, minmax(60px, 1fr));
          }
          .home-text21 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text22 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text23 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text24 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text25 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text26 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text27 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text28 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text29 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text30 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text31 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text32 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text33 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text34 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text35 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text36 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text37 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text38 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text39 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text40 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text41 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text42 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text43 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text44 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text45 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text46 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text47 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-results {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading15 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-list {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-two {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text48 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text49 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-symptoms {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text50 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text51 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text52 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text53 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text54 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text55 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text56 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text57 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text58 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text59 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text60 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text61 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text62 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text63 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text64 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-book3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            border-color: #b4b9c6;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-heading17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text65 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text66 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-form {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-types1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text67 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text68 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-inputs {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-date {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image17 {
            width: 20px;
            object-fit: cover;
            border-color: #b4b9c6;
            padding-bottom: var(--dl-space-space-unit);
            border-bottom-width: 1px;
          }
          .home-lower {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text69 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-button1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-book4 {
            width: 100%;
          }
          .home-text71 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-text73 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-text75 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-meet {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text77 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text78 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-controls {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-forward {
            transform: rotate(180deg);
          }
          .home-doctors {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-search1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 570px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-textinput5 {
            flex: 1;
            height: 100%;
          }
          .home-news {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 200px;
          }
          .home-heading19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text80 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text81 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-item {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-image18 {
            width: 100%;
            height: 275px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image19 {
            height: 50px;
            object-fit: cover;
          }
          .home-content09 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date1 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-quick-description {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text82 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image20 {
            width: 12px;
            object-fit: cover;
          }
          .home-item1 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image21 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image22 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content10 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date2 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description1 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text83 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image23 {
            width: 12px;
            object-fit: cover;
          }
          .home-item2 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image24 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image25 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content11 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date3 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description2 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text84 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image26 {
            width: 12px;
            object-fit: cover;
          }
          .home-download {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-main1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
            background-color: #d0f4fd;
          }
          .home-image27 {
            height: 565px;
            margin-top: -80px;
            object-fit: cover;
          }
          .home-content12 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 130px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-text85 {
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-i-os {
            gap: var(--dl-space-space-halfunit);
          }
          .home-image28 {
            width: 16px;
            object-fit: cover;
          }
          .home-image29 {
            width: 16px;
            object-fit: cover;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-left {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-brand {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image30 {
            width: 165px;
            object-fit: cover;
          }
          .home-text88 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image31 {
            width: 24px;
            object-fit: cover;
          }
          .home-image32 {
            width: 24px;
            object-fit: cover;
          }
          .home-image33 {
            width: 24px;
            object-fit: cover;
          }
          .home-legal {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-right {
            gap: 140px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header17 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link06:hover {
            opacity: 0.5;
          }
          .home-link07 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link07:hover {
            opacity: 0.5;
          }
          .home-link08 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link08:hover {
            opacity: 0.5;
          }
          .home-link09 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link09:hover {
            opacity: 0.5;
          }
          .home-link10 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-list4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header18 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link11 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link11:hover {
            opacity: 0.5;
          }
          .home-link12 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link12:hover {
            opacity: 0.5;
          }
          .home-link13 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link13:hover {
            opacity: 0.5;
          }
          .home-link14 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link14:hover {
            opacity: 0.5;
          }
          .home-list5 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header19 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-links2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link15 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .home-link15:hover {
            opacity: 0.5;
          }
          .home-link16 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link16:hover {
            opacity: 0.5;
          }
          .home-link17 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link17:hover {
            opacity: 0.5;
          }
          .home-legal1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row3 {
            display: flex;
          }
          .home-copyright5 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-container4 {
            display: contents;
          }
          .home-container6 {
            display: contents;
          }
          .home-container8 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-icon01 {
              display: flex;
            }
            .home-hero {
              flex: 1;
              height: 0px;
            }
            .home-main {
              flex-direction: column;
            }
            .home-content {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-header08 {
              max-width: 75%;
            }
            .home-caption6 {
              max-width: 75%;
            }
            .home-image09 {
              flex: 0 0 auto;
              align-items: flex-end;
              padding-right: var(--dl-space-space-twounits);
              justify-content: flex-end;
            }
            .home-features {
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content01 {
              flex-direction: column;
            }
            .home-background {
              left: 0px;
              width: 100%;
              bottom: 0px;
              height: 55%;
              position: absolute;
              justify-content: flex-end;
            }
            .home-practices1 {
              flex-direction: column;
            }
            .home-why {
              gap: var(--dl-space-space-threeunits);
            }
            .home-features1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-section6 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image13 {
              width: 100%;
            }
            .home-section7 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image14 {
              width: 100%;
            }
            .home-section8 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image16 {
              width: 100%;
            }
            .home-schedule {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-types {
              width: 100%;
              flex-direction: column;
            }
            .home-book-person {
              width: 50%;
            }
            .home-book-person1 {
              width: 50%;
            }
            .home-search {
              width: 100%;
              flex-direction: column;
            }
            .home-heading14 {
              align-items: center;
            }
            .home-text19 {
              max-width: 100%;
              text-align: center;
            }
            .home-text20 {
              text-align: center;
            }
            .home-content08 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-type-one {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              align-items: center;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .home-alphabet {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-text47 {
              text-align: center;
            }
            .home-type-two {
              gap: var(--dl-space-space-twounits);
            }
            .home-heading16 {
              align-items: center;
            }
            .home-text48 {
              text-align: center;
            }
            .home-text49 {
              text-align: center;
            }
            .home-symptoms {
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-row {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .home-row1 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-row2 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-meet {
              padding-right: 0px;
            }
            .home-heading18 {
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-list1 {
              position: relative;
              flex-direction: column-reverse;
            }
            .home-controls {
              gap: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
            .home-doctors {
              overflow: hidden;
            }
            .home-search1 {
              gap: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-book5 {
              width: 100%;
            }
            .home-list2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-item {
              height: auto;
            }
            .home-image18 {
              height: 280px;
            }
            .home-content09 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description {
              font-size: 18px;
            }
            .home-item1 {
              height: auto;
            }
            .home-image21 {
              height: 280px;
            }
            .home-content10 {
              gap: var(--dl-space-space-twounits);
              padding: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description1 {
              font-size: 18px;
            }
            .home-item2 {
              height: auto;
            }
            .home-image24 {
              height: 280px;
            }
            .home-content11 {
              gap: var(--dl-space-space-twounits);
              padding: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description2 {
              font-size: 18px;
            }
            .home-content12 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer {
              gap: 100px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-left {
              padding-right: 0px;
            }
            .home-socials {
              display: none;
            }
            .home-legal {
              display: none;
            }
            .home-right {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-legal1 {
              gap: var(--dl-space-space-twounits);
              display: flex;
              flex-direction: column;
            }
            .home-row3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-header07 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-end;
              padding-left: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-header08 {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-caption6 {
              font-size: 16px;
              max-width: 70%;
              line-height: 24px;
            }
            .home-content01 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-practices1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading08 {
              gap: var(--dl-space-space-unit);
            }
            .home-text07 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-animate-on-reveal {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content02 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
            }
            .home-grid1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-why {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header09 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-header10 {
              font-size: 14px;
              max-width: 60%;
              line-height: 21px;
            }
            .home-content03 {
              gap: var(--dl-space-space-twounits);
            }
            .home-header11 {
              font-size: 22px;
              line-height: 33px;
            }
            .home-header12 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content04 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading10 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading11 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton1 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading12 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton2 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-book1 {
              display: none;
            }
            .home-book2 {
              width: 100%;
              display: flex;
            }
            .home-schedule {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content07 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading13 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-caption8 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-types {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-book-person {
              width: 80%;
            }
            .home-book-person1 {
              width: 80%;
            }
            .home-search {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading14 {
              gap: var(--dl-space-space-unit);
            }
            .home-text19 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text20 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-alphabet {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-symptoms {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-book3 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading17 {
              gap: var(--dl-space-space-unit);
            }
            .home-text65 {
              font-size: 24px;
            }
            .home-text66 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-form {
              gap: var(--dl-space-space-threeunits);
            }
            .home-types1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-inputs {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-meet {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading18 {
              gap: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .home-text77 {
              font-size: 24px;
            }
            .home-text78 {
              font-size: 14px;
              max-width: 80%;
            }
            .home-list1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-controls {
              padding-right: 0px;
            }
            .home-doctors {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-search1 {
              padding-right: 0px;
            }
            .home-news {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading19 {
              gap: var(--dl-space-space-unit);
            }
            .home-text80 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text81 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-date1 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date2 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date3 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-main1 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-image27 {
              height: 620px;
              margin-top: 0px;
            }
            .home-content12 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text85 {
              max-width: 500px;
            }
            .home-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-i-os {
              width: 80%;
            }
            .home-android {
              width: 80%;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image30 {
              width: 110px;
            }
            .home-text88 {
              font-size: 12px;
              line-height: 18px;
            }
          }
          @media (max-width: 479px) {
            .home-header07 {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header08 {
              max-width: 80%;
            }
            .home-caption6 {
              max-width: 100%;
            }
            .home-book {
              width: 100%;
            }
            .home-image10 {
              max-height: 500px;
            }
            .home-types1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
