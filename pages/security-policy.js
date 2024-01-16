import React from "react";
import Head from "next/head";
import styled from "styled-components";

const StyledSecurity = styled.div`
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  p,
  li {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  section {
    margin-bottom: 0.5rem;
    padding: 2rem 2rem 0.5rem;
  }
`;

const Security = () => {
  return (
    <>
      <Head>
        <title>Tedspace Ltd - Security Policy</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@_superted" />
        <meta property="og:url" content="https://tedspace.me/security-policy" />
        <meta property="og:title" content="Tedspace Ltd - Security Policy" />
        <meta
          property="og:description"
          content="Tedspace Ltd - Security Policy"
        />
        <meta
          name="Description"
          content="Tedspace Ltd - Security Policy"
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc1yk89ve/image/upload/v1612746964/Screenshot_2021-02-08_at_01.15.25_pfixww.png"
        />
        <link rel="icon" href="animated-favicon.gif" type="image/gif"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#F0476F" />
      </Head>

      <StyledSecurity>
        <h1>Tedspace Ltd - Security Policy</h1>

        <section>
          <h2>1. Introduction</h2>

          <section>
            <h3>1.1 Purpose</h3>
            <p>
              The purpose of this security policy is to establish guidelines and
              procedures to ensure the security and confidentiality of
              information, as well as the integrity and availability of web
              applications developed and maintained by Tedspace Ltd, a UK-based
              web development company.
            </p>
          </section>

          <section>
            <h3>1.2 Scope</h3>
            <p>
              This policy applies to all employees, contractors, and third
              parties involved in the development, deployment, and maintenance
              of web applications produced by Tedspace Ltd.
            </p>
          </section>

          <section>
            <h3>1.3 Audience</h3>
            <p>
              This policy is applicable to all individuals who have access to
              Tedspace Ltd's web development environments, including but not
              limited to developers, system administrators, and support staff.
            </p>
          </section>
        </section>

        <section>
          <h2>2. Information Security Governance</h2>

          <section>
            <h3>2.1 Responsibilities</h3>
            <ul>
              <li>
                <strong>Director Responsibilities:</strong>
                <ul>
                  <li>
                    The Directors are responsible for the oversight and
                    maintenance of the security policy.
                  </li>
                  <li>
                    The Directors are designated as the responsible party for
                    overseeing and enforcing security measures.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3>2.2 Compliance</h3>
            <p>
              Tedspace Ltd is committed to hosting applications and data on
              third-party services that comply with ISO/IEC 27001:2013, SOC 2
              Type 2, and GDPR requirements. While Tedspace Ltd does not hold
              these certificates directly, it ensures that the chosen
              third-party hosting services maintain and adhere to the specified
              certifications for the secure storage and processing of
              information. Tedspace Ltd will take all necessary steps and
              implement best practices to ensure that it benefits from the
              robust security measures undertaken by these third-party services.
            </p>
          </section>

          <section>
            <h3>2.3 Risk Management</h3>
            <p>
              Tedspace Ltd will conduct regular risk assessments to identify and
              mitigate potential security risks in web applications.
            </p>
          </section>
        </section>

        <section>
          <h2>3. Access Controls</h2>

          <section>
            <h3>3.1 User Access</h3>
            <ul>
              <li>
                Access to development and production environments is restricted
                based on job roles and responsibilities.
              </li>
              <li>
                User account provisioning and de-provisioning procedures are in
                place to ensure the timely removal of access for terminated
                employees or contractors.
              </li>
            </ul>
          </section>

          <section>
            <h3>3.2 Authentication</h3>
            <ul>
              <li>
                Multi-factor authentication is mandatory for accessing
                development and production environments.
              </li>
              <li>
                Password policies are enforced to ensure strong, regularly
                updated passwords.
              </li>
            </ul>
          </section>

          <section>
            <h3>3.3 Authorization</h3>
            <p>
              Role-based access controls are implemented to ensure that users
              have the minimum necessary permissions required to perform their
              job functions.
            </p>
          </section>
        </section>

        <section>
          <h2>4. Data Protection and Privacy</h2>

          <section>
            <h3>4.1 GDPR Compliance</h3>
            <p>
              Tedspace Ltd ensures compliance with the General Data Protection
              Regulation (GDPR) for all personal data processed in the
              development lifecycle.
            </p>
            <p>
              Data Protection Impact Assessments (DPIA) are conducted for
              high-risk processing activities.
            </p>
          </section>

          <section>
            <h3>4.2 Data Classification</h3>
            <p>
              Data is classified based on sensitivity, and appropriate controls
              are applied accordingly.
            </p>
          </section>

          <section>
            <h3>4.3 Data Encryption</h3>
            <ul>
              <li>
                Data in transit is encrypted using industry-standard protocols
                (e.g., TLS).
              </li>
              <li>
                Data at rest is encrypted, especially in databases and storage
                systems.
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h2>5. Secure Development</h2>

          <section>
            <h3>5.1 Secure Coding Practices</h3>
            <ul>
              <li>
                Developers follow secure coding practices to prevent common
                vulnerabilities, such as injection attacks, cross-site
                scripting, and cross-site request forgery.
              </li>
              <li>
                Regular code reviews are conducted to identify and address
                security issues.
              </li>
            </ul>
          </section>

          <section>
            <h3>5.2 Third-Party Libraries and Components</h3>
            <p>
              Third-party libraries and components are regularly reviewed for
              security vulnerabilities, and only approved components are used in
              web applications.
            </p>
          </section>
        </section>

        <section>
          <h2>6. Infrastructure Security</h2>

          <section>
            <h3>6.1 Hosting Provider Security</h3>
            <ul>
              <li>
                Tedspace Ltd carefully selects hosting providers that meet
                industry-standard security certifications (ISO/IEC 27001:2013,
                SOC 2 Type 2) and comply with GDPR regulations.
              </li>
              <li>
                Regular security assessments of hosting providers are conducted
                to ensure ongoing compliance.
              </li>
            </ul>
          </section>

          <section>
            <h3>6.2 System Configuration</h3>
            <ul>
              <li>
                Server configurations follow industry best practices and
                security guidelines.
              </li>
              <li>
                Regular audits of system configurations are conducted to
                identify and address potential vulnerabilities.
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h2>7. Incident Response</h2>

          <section>
            <h3>7.1 Incident Reporting</h3>
            <p>
              All security incidents, breaches, or suspicious activities are
              promptly reported and details passed on to relevant parties.
            </p>
          </section>

          <section>
            <h3>7.2 Investigation</h3>
            <p>
              Upon reporting, a thorough investigation is initiated to assess
              the nature and extent of the incident.
            </p>
          </section>

          <section>
            <h3>7.3 Communication</h3>
            <p>
              Clear communication channels are established to inform
              stakeholders about security incidents, including affected parties,
              remediation efforts, and preventive measures.
            </p>
          </section>
        </section>

        <section>
          <h2>8. Monitoring and Logging</h2>

          <section>
            <h3>8.1 Log Collection</h3>
            <p>
              Logs from relevant systems are collected and stored securely for
              monitoring and auditing purposes.
            </p>
          </section>

          <section>
            <h3>8.2 Monitoring Tools</h3>
            <p>
              Continuous monitoring tools are employed to detect and alert on
              suspicious activities in real-time.
            </p>
          </section>

          <section>
            <h3>8.3 Auditing</h3>
            <p>
              Regular audits of logs and monitoring data are conducted to
              identify and respond to security events promptly.
            </p>
          </section>
        </section>

        <section>
          <h2>9. Physical Security</h2>

          <section>
            <h3>9.1 Data Center Security</h3>
            <p>
              Hosting providers are selected based on their adherence to
              physical security best practices, including restricted access,
              surveillance, and environmental controls.
            </p>
          </section>

          <section>
            <h3>9.2 Equipment Disposal</h3>
            <p>
              Proper procedures are followed for the secure disposal of
              equipment to prevent data leakage or unauthorized access.
            </p>
          </section>
        </section>

        <section>
          <h2>10. Training and Awareness</h2>

          <section>
            <h3>10.1 Security Training</h3>
            <p>
              All employees involved in web development undergo regular security
              training to stay informed about current threats and best
              practices.
            </p>
          </section>
        </section>

        <section>
          <h2>11. Documentation and Record Keeping</h2>

          <section>
            <h3>11.1 Security Documentation</h3>
            <p>
              Comprehensive documentation of security policies, procedures, and
              configurations is maintained and regularly updated.
            </p>
          </section>

          <section>
            <h3>11.2 Record Retention</h3>
            <p>
              Records related to security incidents, audits, and compliance are
              retained for the required duration in accordance with legal and
              regulatory requirements.
            </p>
          </section>
        </section>

        <section>
          <h2>12. Vendor Management</h2>

          <section>
            <h3>12.1 Third-Party Service Evaluation</h3>
            <p>
              Before engaging with third-party services, Tedspace Ltd conducts
              thorough assessments of their security practices, certifications,
              and compliance with ISO/IEC 27001:2013, SOC 2 Type 2, and GDPR.
            </p>
          </section>

          <section>
            <h3>12.2 Service Level Agreements</h3>
            <p>
              Service level agreements (SLAs) with third-party services include
              security and compliance requirements to ensure the expected level
              of protection.
            </p>
          </section>

          <section>
            <h3>12.3 Periodic Review</h3>
            <p>
              Regular reviews of third-party services are conducted to ensure
              ongoing compliance and the effectiveness of security measures.
            </p>
          </section>
        </section>

        <section>
          <h2>13. Business Continuity and Disaster Recovery</h2>

          <section>
            <h3>13.1 Backup Procedures</h3>
            <p>
              Regular data backups are performed, and procedures are in place to
              ensure data can be restored in the event of data loss.
            </p>
          </section>

          <section>
            <h3>13.2 Recovery Plans</h3>
            <p>
              Business continuity and disaster recovery plans are established to
              minimize downtime and data loss in the event of a significant
              incident.
            </p>
          </section>
        </section>

        <section>
          <h2>14. Review and Revision</h2>

          <section>
            <h3>14.1 Policy Review</h3>
            <p>
              The security policy is reviewed periodically, at least annually,
              to ensure its effectiveness and relevance.
            </p>
          </section>

          <section>
            <h3>14.2 Revision Process</h3>
            <p>
              Any necessary revisions to the security policy are documented and
              implemented promptly.
            </p>
          </section>
        </section>
      </StyledSecurity>
    </>
  );
};

export default Security;
