import { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Head from 'next/head';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  FormGroup,
  Checkbox,
  Button,
} from '@material-ui/core';
import { Collapse } from 'react-collapse';

const styles = ({ palette, typography }) => ({
  info: {
    ...typography.p,
    color: palette.background,
    fontSize: 24,
    textAlign: 'center',
  },
  root: {
    '& .MuiFormControl-root': {
      marginBottom: 30,
    },

    background: palette.background,
    borderRadius: 50,
    margin: [0, 'auto'],
    maxWidth: 1100,
    padding: [50, '10%'],
  },
  submit: {
    textAlign: 'center',
  },
  wrap: {
    '& h1': {
      ...typography.h1,
      color: palette.background,
      textAlign: 'center',
    },
    background: palette.contactBackground,
    padding: [20, '5%', 50],
  },
});

const FORM_TYPES = {
  MESSAGE: 'message',
  PROJECT: 'new project',
};

const form = [
  { label: 'Name', name: 'name', required: true },
  { label: 'Email', name: 'email', required: true, type: 'email' },
];

const projectForm = [
  { label: 'Phone', name: 'phone', required: true, type: 'tel' },
  {
    label: 'Tell us a little about yourself',
    multiline: true,
    name: 'about',
    required: true,
    rows: 6,
  },
  { label: 'Business Name', name: 'businessName' },
  { label: 'Business Website', name: 'businessUrl' },
  {
    label: 'Tell us a little about the business',
    multiline: true,
    name: 'businessAbout',
    placeholder: 'What products or services do you sell? What’s your competitive advantage?',
    rows: 6,
  },
];

const projectForm2 = [
  { label: 'What is your budget for this project?', name: 'projectBudget', required: true },
  {
    label: "Any additional details you'd like to add? ",
    multiline: true,
    name: 'projectDetails',
    rows: 6,
  },
  { label: 'How did you hear about us?', name: 'hearAbout', required: true },
];

const services = [
  'Website Development',
  'E-Commerce Development',
  'Mobile App Development',
  'Web App Development',
  'Training',
  'Web/Mobile Design',
  'SEO',
];

const Contact = ({ classes }) => {
  const [formState, setFormState] = useState({});
  const handleChange = name => e => {
    setFormState(s => ({ ...s, [name]: e.target.value }));
  };
  return (
    <div className={classes.wrap}>
      <Head>
        <title>NolaJS | Contact Us</title>
      </Head>
      <h1>Contact Us</h1>
      <p className={classes.info}>
        Interested in working with us? Fill out the form below to get started. Once you complete the
        form we’ll be in touch within one business day to discuss your project.
      </p>
      <form className={classes.root} noValidate autoComplete="off">
        {form.map(el => (
          <TextField {...el} key={el.name} variant="outlined" fullWidth />
        ))}
        <FormControl component="fieldset" className={classes.todo}>
          <FormLabel component="legend">What do you want to do?</FormLabel>
          <RadioGroup
            aria-label="contact type"
            name="contactType"
            onChange={handleChange('contactType')}
          >
            <FormControlLabel
              value={FORM_TYPES.MESSAGE}
              control={<Radio />}
              label="Send us a Message"
            />
            <FormControlLabel
              value={FORM_TYPES.PROJECT}
              control={<Radio />}
              label="Start a Project"
            />
          </RadioGroup>
        </FormControl>
        <Collapse isOpened={!!formState.contactType}>
          {formState.contactType === FORM_TYPES.MESSAGE ? (
            <TextField
              multiline
              variant="outlined"
              fullWidth
              label="Your Message"
              name="message"
              rows={6}
            />
          ) : (
            <div>
              {projectForm.map(el => (
                <TextField {...el} key={el.name} variant="outlined" fullWidth />
              ))}
              <FormControl component="fieldset" className={classes.services}>
                <FormLabel component="legend">What services are you interested in?</FormLabel>
                <FormGroup>
                  {services.map(el => (
                    <FormControlLabel
                      key={el}
                      control={<Checkbox onChange={handleChange('services', true)} value={el} />}
                      label={el}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              {projectForm2.map(el => (
                <TextField {...el} key={el.name} variant="outlined" fullWidth />
              ))}
            </div>
          )}
          <div className={classes.submit}>
            <Button variant="contained" size="large" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Collapse>
      </form>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Contact);
