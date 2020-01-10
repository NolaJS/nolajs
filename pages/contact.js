import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@material-ui/core';

const TabContent = ({ value }) => {
  if (value < 0) {
    return null;
  }
  if (value === 0) {
    return <h2>Simple Form</h2>;
  }
  return <h2>Long Form</h2>;
};

const Contact = () => {
  const [value, setValue] = useState(-1);
  const handleChange = (_e, newValue) => setValue(newValue);
  const isSimple = value === 0;
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="toggle between type of contact forms"
      >
        <Tab label="Ask us a question" />
        <Tab label="Get started on a project" />
      </Tabs>
      <TabContent value={value} />
    </div>
  );
};

export default Contact;
