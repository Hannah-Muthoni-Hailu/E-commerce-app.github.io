import React from 'react'
import Contact from './_components/Contact';
import AllProducts from './_components/AllProducts';

const page = ({params}) => {
  const { links } = params;

  const renderContent = () => {
    if (links === '1') {
      return <Contact />;
    } else if (links === '2') {
      return <AllProducts />;
    } else {
      return <div>Content not found</div>; // Fallback for undefined links
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default page