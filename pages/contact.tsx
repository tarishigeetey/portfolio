import { useState } from 'react';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import { RoughNotation } from 'react-rough-notation';
import { PopupModal } from 'react-calendly';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup

  function onScheduleMeeting(): void {
    if (!contact.calendly) {
      console.error('err: calendly link was not provided.');
      return;
    }
    setIsPopupOpen(true); // Open Calendly popup
  }

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Do you have a project in mind? Want to hire me? or simply wanna
            chat? Feel free to
            <span
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              onClick={onScheduleMeeting}
              role='button'
              tabIndex={0}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                schedule a meeting
              </RoughNotation>
            </span>
          </p>
        </div>
      </div>

      {/* Render PopupModal only when needed */}
      {isPopupOpen && (
        <PopupModal
          url={contact.calendly}
          rootElement={document.body} // Attach to the correct root element
          onModalClose={() => setIsPopupOpen(false)} // Close popup when Calendly is closed
          open={isPopupOpen} // Control visibility
        />
      )}
    </>
  );
}

export default Contact;
