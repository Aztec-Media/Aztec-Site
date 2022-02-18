import Seo from '../components/layout/Seo';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import PlannerForm from '../components/sections/contact/PlannerForm';

export default function ProjectPlanner() {
  return (
    <Layout>
      <Seo title='Project Planner' />
      <main className='project-planner'>
        <section className='contact__header'>
          <h1>Plan your project</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            inventore vitae ex porro aspernatur quo numquam, a animi earum quis!
          </p>
        </section>
        <PlannerForm />
      </main>
      <Footer />
    </Layout>
  );
}
