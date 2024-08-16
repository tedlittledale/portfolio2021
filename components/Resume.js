import React from "react";

const Profile = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Ted Littledale</h1>
        <h2>Creative Developer</h2>
        <p>
          <a
            href="https://tedspace.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            tedspace.me
          </a>{" "}
          (Stack: Next.js / Styled Components / Sanity.io / Netlify)
        </p>
        <p>
          07540 662923 |{" "}
          <a href="mailto:ted.littledale@gmail.com">ted.littledale@gmail.com</a>
        </p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Skills / Technologies</h3>
        <p>
          React, Redux, Gatsby.js, MobX State Tree, Cypress, Storybook, Vue,
          Svelte, Vanilla Javascript, Headless CMS builds, Netlify, GraphQL,
          Modular CSS, HTML5 / CSS3, Styled Components, Node.js, d3, Webpack,
          Babel, Gatsby.js, Next.js, Progressive Web Apps, Git, Firebase,
          Lighthouse, Service Workers, Jest, React Testing Library, Rapid
          prototyping, Agile development, MongoDB, TeachableMachine, Sanity.io,
          R
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Bio</h3>
        <p>
          Ted is a Creative Developer and Front End Lead with over 15 years of
          experience working at startups, digital agencies, and tech giants.
          This background gives him the expertise to find the right solutions
          for every shape and size of business to build innovative, cutting-edge
          web applications. Ted has also successfully founded two companies as
          Product Director / Front End Lead, including SecondSync, a social
          media analytics company that was acquired by Twitter in 2014.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Experience</h3>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Tedspace Ltd - Creative Developer</h4>
          <p>JAN 2023 - Present</p>
          <p>
            At Tedspace, I split my time between working on my own app
            development projects and providing consulting, prototyping,
            pitching, and full-stack development services to clients.
          </p>
          <ul>
            <li>
              <strong>Yorkshire Tea - Brewtone.ai:</strong> I cold-pitched this
              idea to the marketing team at Yorkshire Tea. After they bought
              into it, I developed and launched the app as a microsite. The app
              allows users to upload an image of their tea, which is analyzed
              using AI and computer vision technology to isolate the tea and
              return the tea color. Users then answer questions about their
              tea-making preferences and receive an Instagram stories-style "Tea
              Profile" to share on social media.
            </li>
            <li>
              <strong>Pickit App:</strong> A "Strava for community litter
              pickers" that is still in alpha testing.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Kantar - Technology Consultant</h4>
          <p>SUMMER 2023</p>
          <p>
            Advised Kantar on a Future of Development research piece for a "Mag
            7" client. Provided insights into how web development might evolve
            over the next decade, with a focus on AI’s impact on developer
            workflows.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Twitter - Senior Creative Technologist</h4>
          <p>AUGUST 2021 - NOVEMBER 2022</p>
          <p>
            Built upon an MVP I previously created that facilitates
            "Threadventures," a method for non-linear storytelling on Twitter. I
            acted as the product owner and sole developer, working closely with
            stakeholders, UX designers, and managing the project from feature
            requirements to full-stack development.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>AKQA - Senior Developer (Freelance)</h4>
          <p>MARCH 2021 - JULY 2021</p>
          <p>
            Led front-end architecture for a greenfield digital transformation
            project with Stena Metall. Utilized React, MobX, and GraphQL to
            build a digital store replacing analogue services.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Rehab Studios - Senior Creative Technologist (Freelance)</h4>
          <p>FEBRUARY 2021 - MARCH 2021</p>
          <p>
            Worked as the front-end lead on a three-day hack week project where
            we built a fully functional web app that allowed users to upload a
            photo of a pill and identify it using a Google machine learning
            model. Integrated API data from a drug database to provide critical
            information. Additionally, developed functional prototypes using
            Waze for Cities data for marketing campaigns with custom d3
            visualizations.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Twitter - Senior Creative Technologist (Paternity Cover)</h4>
          <p>JANUARY 2020 - SEPTEMBER 2020</p>
          <p>
            Led innovative campaigns for Twitter's in-house creative team,
            focusing on rapid prototyping for pitches. Developed the
            "Threadventures" tool during lockdown to enable non-linear
            storytelling on Twitter, built using React, MobX State Tree, and
            deployed on Netlify.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>TorchBox - Senior Front End Developer (Freelance)</h4>
          <p>SEPTEMBER 2019 - DECEMBER 2019</p>
          <p>
            Developed React/Gatsby headless CMS builds for Torchbox's
            not-for-profit clients, focusing on modular, performant
            architectures.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>iX IBM - Lead Front End Developer (Freelance)</h4>
          <p>OCTOBER 2018 - JUNE 2019</p>
          <p>
            Designed and implemented the front-end architecture for a complex
            data dashboard for EY, focusing on performance, modularity, and user
            experience. Built a component library and integrated automated
            testing using Jest and React Testing Library.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Poli / Founder - Front End Lead - Product Director</h4>
          <p>MARCH 2017 - OCTOBER 2018</p>
          <p>
            Led product direction and front-end development for Poli, a platform
            disrupting opinion polling within messenger apps. Architected
            high-performance webviews achieving over 95% Lighthouse scores.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Twitter - Senior Creative Technologist</h4>
          <p>MARCH 2015 - MARCH 2017, LONDON</p>
          <p>
            Identified innovative technology solutions for brand strategy teams,
            led rapid prototyping, and managed technical execution of
            high-impact campaigns.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Twitter - Senior Developer</h4>
          <p>MARCH 2014 - MARCH 2015, LONDON</p>
          <p>
            Led front-end development for Twitter’s TV analytics team,
            integrating work from SecondSync and Mesagraph following their
            acquisition by Twitter.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>SecondSync / Founder - Front End Lead - Product Director</h4>
          <p>AUGUST 2011 - MARCH 2014, LONDON</p>
          <p>
            Founded SecondSync, developed a web-based analytics dashboard for
            social TV data, and led the product direction and front-end
            architecture.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>LBi London - Senior Interface Developer (Contractor)</h4>
          <p>NOVEMBER 2009 - AUGUST 2011, LONDON</p>
          <p>
            Worked on high-profile websites for clients including BT, Barclays,
            and Electrolux. Contributed to the Webby Award-nominated Electrolux
            Art Home website.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Optus - Senior Front End Developer</h4>
          <p>NOVEMBER 2008 - MAY 2009, SYDNEY</p>
          <p>
            Developed and maintained Optus’s web portal, Optuszoo.com.au, for
            Australia’s second-largest telco.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h4>Tedspace - Product Developer</h4>
          <p>APRIL 2006 - DECEMBER 2008, BRISTOL</p>
          <p>
            Worked on a variety of freelance projects for agencies like Sift and
            E3 Media. Built some of the earliest data-driven web applications
            for the financial services sector.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Education</h3>
        <p>
          University of Bristol, UK / MSc Computer Science - Honours (2004-2005)
          <br />
          University of Birmingham / BSc Biochemistry - 2:1 (1999-2002)
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Certification</h3>
        <p>HarvardX / Data Science: Visualization</p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Other</h3>
        <p>
          Ted enjoys experimenting with data visualization and working on
          volunteer projects that bridge the digital divide. He has taught with
          Code Club and participated in initiatives like Power to Connect and
          South London Cares.
        </p>
      </section>
    </div>
  );
};

export default Profile;
