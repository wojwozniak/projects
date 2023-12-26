import Footer from './Footer';
import TimelineSection from './TimelineSection';
import TimelineItem from './TimelineItem';

const App = () => {
  return (
    <div className="bg-white text-black p-8 w-full h-fit min-h-screen pb-2">
      <h1 className="text-4xl font-bold">Projects and my timeline</h1>
      <p className="text-l mt-2">Simple list of projects that I have created - in form of a developer timeline ^^</p>
      <TimelineSection title="July 2023 - December 2023" children={
        <TimelineItem projectName='Work in progress' description='I am finishing 5 different projects - they will soon appear here ^^' />
      } />
      <TimelineSection title="June 2023" children={
        <TimelineItem
          projectName='Job as fullstack developer'
          description='Thanks to my portfolio I managed to get my first job as fullstack developer.' />
      } />
      <TimelineSection title = "October 2022 - June 2023" children = {
        <TimelineItem
          projectName='University projects'
          description='During the first year of my studies I focused on learning and doing projects for university - I created a lot of small projects, mostly in C and C++. At the end of the first year I created portfolio website. In this time period I also started doing leetcode algorithms and finished two Freecodecamp python courses (basic python and machine learning).' />
      } />
      <TimelineSection title="September - October 2022" children={
        <>
          <TimelineItem
            projectName='Started learning at University of Wrocław'
            description='I started studying Computer Science at University of Wrocław.' />
          <TimelineItem
           projectName='Backend course'
           description='I kept learning on Freecodecamp website - this time I learned how to create backend apps with node.js (and a lot of libraries)' />
        </>
      } />
      <TimelineSection title="July - August 2022"
        children={
          <TimelineItem
            projectName='Scout website'
            description='I reworked website of my old scout group. I used Wordpress as a CMS and created a custom theme for it. I used HTML, CSS, JavaScript and PHP to create it. I also teached admins how to use it and recorded a video tutorial for them.'
            link='https://zlotaosemkadabrowagornicza.zhp.pl/'
            linkTitle='Website'
            secondLink='https://github.com/wojwozniak/wp-zlotaosemka'
            secondLinkTitle='Github Repository' />
        } />
      <TimelineSection title="June 2022"
        children={
          <TimelineItem
            projectName='Data Visualization Course'
            description='I finished a data visualization course on FreeCodeCamp. I learned how to use D3.js library to create charts and graphs. I made 5 websites to prove my knowledge. Some time later i reworked them into a single website based on Vue.js framework. I linked the website below - best viewed on desktop as charts are interactive.'
            link='https://wojwozniak.com/d3-charts/'
            linkTitle='D3.js Charts'
            secondLink='https://www.freecodecamp.org/certification/wojwozniak/data-visualization'
            secondLinkTitle='Certificate' />
        } />
      <TimelineSection title="March - May 2022"
        children={
          <>
            <TimelineItem
              projectName="Scout event website"
              description='I created a website for a big scout event in Poland. It was my first semi-professional project and first "big" website. I used HTML, CSS, JavaScript to create it - I also used Wordpress as a CMS.'
              link='https://pustynnaburza.dabrowagornicza.zhp.pl/'
              linkTitle='Website'
              secondLink='https://github.com/wojwozniak/wp-pustynnaburza'
              secondLinkTitle='Github Repository' />
            <TimelineItem
              projectName="React Course"
              description='I kept learning with Freecodecamp courses - this time I finished their React course and created five apps to get their certification. Few months later I reworked certification websites to use typescript and hooks. I linked my favourite app from this course and my certificate.'
              link="https://wojwozniak.com/tsx-calculator/"
              linkTitle='React Calculator'
              secondLink='https://www.freecodecamp.org/certification/wojwozniak/front-end-libraries'
              secondLinkTitle='Certificate'
            />
          </>
        } />
      <TimelineSection title="October 2021 - Febuary 2022"
        children={
          <TimelineItem
            projectName='Web Development - Freecodecamp courses'
            description={`In October 2021 I decided to start learning web development alongside my standard university courses. I learned about FreeCodeCamp and started doing their courses. After few months I finished their Responsive Web Design and JavaScript Algorithms and Data Structures courses.`}
            link='https://www.freecodecamp.org/certification/wojwozniak/responsive-web-design'
            linkTitle='First Certificate'
            secondLink='https://www.freecodecamp.org/certification/wojwozniak/javascript-algorithms-and-data-structures'
            secondLinkTitle='Second Certificate' />
        } />
      <TimelineSection title="Up to August 2021"
        children={
          <TimelineItem
            projectName='First steps with Computer Science'
            description="Up to this date I learned C++ - used it to pass high school final exams which allowed me to start studying Computer Science at University" />
        } />
      <Footer />
    </div>
  );
}

export default App;