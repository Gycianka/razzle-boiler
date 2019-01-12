import React from 'react';

// Components.
import MetaPage from '../../components/meta/MetaPage';

// Utilities.
import transformHtml from '../../utilities/transform/html/transformHtml';

const htmlInput = '<div><h1>Title</h1><p>Paragraph</p><a href="/">Link</a><h1>Another title</h1></div>';

const About = () => (
  <div>

    <MetaPage title="About"/>

    <h1>About page</h1>

    {transformHtml(htmlInput)}

  </div>
);

export default About;
