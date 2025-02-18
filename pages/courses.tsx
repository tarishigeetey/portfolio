import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function projects(): React.ReactElement {
  return (
    <>
      <PageSEO
        title={`projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header
          title='Projects'
          subtitle="Open-source projects I've created to offer useful learning tools while showcasing my technical skills."
        />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.projects.map(({ slug, title, description, banner }) => (
              <Card
                key={slug}
                title={title}
                description={description}
                banner={banner}
                href={`/projects/${slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
