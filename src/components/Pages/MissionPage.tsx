import { Link } from 'react-router-dom'
import wiaabReport from '../../assets/files/WIAAB_Recommendations_Report_March_2022.pdf'

const MISSION_ITEMS: {
  heading: string
  content: JSX.Element
}[] = [
  {
    heading: 'Vision',
    content: (
      <div>
        {`To create the next generation of women leaders as STEM aviation professionals for the airlines, manufacturers, and stakeholders in the aviation industry to cater the immense shortage and maximize the potential of the world by increasing the participation of women in STEM and education.`}
      </div>
    ),
  },
  {
    heading: 'Mission',
    content: (
      <div>
        {`The Real Fly Girlz (Fly Girlz) mission is to empower brilliant, underrepresented young girls of today and future trainblazers by providing education and training in STEM and aviation because...`}
        <strong>Dreams do not have a gender.</strong>
      </div>
    ),
  },
  {
    heading: 'Crisis',
    content: (
      <div>
        <ul>
          {[
            '1.3 million youth drop out of high school annually',
            'Low-income students are 6 times more likely to drop out of high school',
            '1 in 5 children live in poverty',
            'Women make up less than 20% of the workforce in most aviation occupations',
            'Shortage of pilots across the globe is hampering travel',
          ].map((e) => (
            <li key={e}>{e}</li>
          ))}
          <li>
            Women only make up 4.6% of air transport pilot jobs, according to a{' '}
            <Link to={wiaabReport} target="_blank" referrerPolicy="no-referrer">
              report from the Women in Aviation board
            </Link>
            .
          </li>
        </ul>
      </div>
    ),
  },
  {
    heading: 'The Program',
    content: (
      <div>
        {`To create the next generation of women leaders as STEM aviation professionals for the airlines, manufacturers, and stakeholders in the aviation industry to cater the immense shortage and maximize the potential of the world by increasing the participation of women in STEM and education.`}
      </div>
    ),
  },
  {
    heading: 'Opportunities',
    content: (
      <div>
        <ul>
          {[
            'Provide young girls the opportunity to dream and pathways to do so',
            'Empower and elevate the next generation of women in STEM and Aviation',
            'Expose underrepresented communities to learn about STEM and Aviation',
            'Providing a pipeline of trained and licensed women in aviation careers: pilots, air traffic controllers, aircraft maintenance engineers, and operations staff (?)',
            'Train the next generation of careers in aviation, filling the 1.3M gap expected by 2032',
            'Opportunities for employee volunteer engagement',
          ].map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    heading: 'THANK YOU',
    content: (
      <div>
        {`Partners are critical in helping The Real Fly Girlz mission to empower brilliant underrepresented young girls of today and future trailblazers by providing education and training in STEM and aviation. We would love to partner with you to give wings to countless dreams of the young girls so they can reach for the stars.`}
        <div style={{ marginTop: '1em' }}>
          {'Thank you for your consideration!'}
        </div>
      </div>
    ),
  },
]

const MissionPage = () => (
  <div className="page-wrapper">
    <div className="page-container">
      {MISSION_ITEMS.map((e) => (
        <div key={e.heading}>
          <h1>{e.heading}</h1>
          <div>{e.content}</div>
        </div>
      ))}
    </div>
  </div>
)

export default MissionPage
