export default function ProjectDetails({ portfolio }) {
  return (
    <section className='project__details'>
      <div>
        <div className='left'>
          <ul>
            <li>
              <span>What we did</span>
              <span>- {portfolio.attributes.service1}</span>
              <span>- {portfolio.attributes.service2}</span>
            </li>
            {portfolio.attributes.website &&
              portfolio.attributes.website !== '' && (
                <li>
                  <span>Website</span>
                  <span>
                    <a
                      href={`https://${portfolio.attributes.website}`}
                      rel='noreferrer nofollower'
                      target='_blank'
                    >
                      - {portfolio.attributes.website}
                    </a>
                  </span>
                </li>
              )}
          </ul>
        </div>
        <div className='right'>
          <p>{portfolio.attributes.detailsText}</p>
        </div>
      </div>
    </section>
  );
}
