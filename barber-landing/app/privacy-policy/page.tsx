import React from 'react'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: "Privacy Policy | The Dealer's Playbook",
  description: "Privacy Policy for The Dealer's Playbook - High Ticket Dealers LLC. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | The Dealer's Playbook",
    description: "Privacy Policy for The Dealer's Playbook - High Ticket Dealers LLC.",
    images: ['/images/Dealers_Playbook_Logo.png'],
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Privacy Policy for highticketdealers.com
          </h1>
          
          <div className="text-gray-300 space-y-8">
            <div>
              <p className="text-lg text-gray-400 mb-4">Last updated: August 06, 2025</p>
              
              <p className="leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              
              <p className="leading-relaxed mt-4">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Interpretation</h3>
              <p className="leading-relaxed mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Definitions</h3>
              <p className="leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
              
              <div className="space-y-3">
                <p><strong className="text-white">Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                
                <p><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                
                <p><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to High Ticket Dealers LLC, 1715 NE 36th Street, Oakland Park FL 33334.</p>
                
                <p><strong className="text-white">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                
                <p><strong className="text-white">Country</strong> refers to: Florida, United States</p>
                
                <p><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                
                <p><strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                
                <p><strong className="text-white">Service</strong> refers to the Website.</p>
                
                <p><strong className="text-white">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                
                <p><strong className="text-white">Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
                
                <p><strong className="text-white">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                
                <p><strong className="text-white">Website</strong> refers to highticketdealers.com, accessible from highticketdealers.com</p>
                
                <p><strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Types of Data Collected</h3>
              
              <h4 className="text-lg font-semibold text-white mb-3">Personal Data</h4>
              <p className="leading-relaxed mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              
              <ul className="list-disc list-inside space-y-1 mb-4 pl-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mb-3">Usage Data</h4>
              <p className="leading-relaxed mb-4">
                Usage Data is collected automatically when using the Service.
              </p>
              
              <p className="leading-relaxed mb-4">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              
              <p className="leading-relaxed mb-4">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              
              <p className="leading-relaxed mb-4">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information from Third-Party Social Media Services</h3>
              <p className="leading-relaxed mb-4">
                The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
              </p>
              
              <ul className="list-disc list-inside space-y-1 mb-4 pl-4">
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
              
              <p className="leading-relaxed mb-4">
                If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
              </p>
              
              <p className="leading-relaxed mb-4">
                You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Tracking Technologies and Cookies</h2>
              
              <p className="leading-relaxed mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
              </p>
              
              <div className="space-y-4">
                <p><strong className="text-white">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>
                
                <p><strong className="text-white">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
              </div>
              
              <p className="leading-relaxed my-4">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </p>
              
              <p className="leading-relaxed mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">Necessary / Essential Cookies</p>
                  <p className="text-sm">Type: Session Cookies</p>
                  <p className="text-sm">Administered by: Us</p>
                  <p className="leading-relaxed">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-white">Cookies Policy / Notice Acceptance Cookies</p>
                  <p className="text-sm">Type: Persistent Cookies</p>
                  <p className="text-sm">Administered by: Us</p>
                  <p className="leading-relaxed">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-white">Functionality Cookies</p>
                  <p className="text-sm">Type: Persistent Cookies</p>
                  <p className="text-sm">Administered by: Us</p>
                  <p className="leading-relaxed">Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Your Personal Data</h2>
              
              <p className="leading-relaxed mb-4">The Company may use Personal Data for the following purposes:</p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                <li><strong className="text-white">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong className="text-white">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li><strong className="text-white">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong className="text-white">To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li><strong className="text-white">To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                <li><strong className="text-white">For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li><strong className="text-white">For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Retention of Your Personal Data</h2>
              
              <p className="leading-relaxed mb-4">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              
              <p className="leading-relaxed">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Security of Your Personal Data</h2>
              
              <p className="leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              
              <p className="leading-relaxed mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
              
              <p className="leading-relaxed">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to this Privacy Policy</h2>
              
              <p className="leading-relaxed mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <p className="leading-relaxed mb-4">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </p>
              
              <p className="leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              
              <p className="leading-relaxed mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>By email: <a href="mailto:joey@highticketdealers.com" className="text-blue-400 hover:text-blue-300 underline">joey@highticketdealers.com</a></li>
                <li>By visiting this page on our website: <a href="https://highticketdealers.com/privacypolicy" className="text-blue-400 hover:text-blue-300 underline">highticketdealers.com/privacypolicy</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 