import { useState, useCallback } from 'react';
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
  formWrap: {
    background: palette.background,
    borderRadius: 50,
    margin: [0, 'auto'],
    maxWidth: 1100,
    padding: [50, '10%'],
  },
  info: {
    ...typography.p,
    color: palette.background,
    fontSize: 24,
    textAlign: 'center',
  },
  root: {
    '& .MuiFormControl-root': {
      '& label, & p, & input, & legend, & span': {
        fontFamily: typography.fontFamily,
      },
      marginBottom: 30,
    },
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
  const [loading, setLoading] = useState(false);
  const handleChange = name => e => {
    const {
      target: { value },
    } = e;
    setFormState(s => ({ ...s, [name]: { errorMsg: '', value } }));
  };
  const handleBlur = name => () => {
    setFormState(s => ({
      ...s,
      [name]: {
        ...s[name],
        errorMsg: (s[name] && !s[name].value) || !s[name] ? 'This field is required' : '',
      },
    }));
  };
  const hasValidationErrors = useCallback(() => {
    const formElements =
      formState.contactType.value === FORM_TYPES.MESSAGE
        ? form.concat({ name: 'message' }).map(el => el.name)
        : form
            .concat(projectForm)
            .concat(projectForm2)
            .filter(el => el.required)
            .map(el => el.name);
    setFormState(s => {
      return {
        ...s,
        ...formElements.reduce((newState, key) => {
          if (s[key]) {
            if (!s[key].value) {
              return {
                ...newState,
                [key]: {
                  ...s[key],
                  errorMsg: 'This field is required',
                },
              };
            }
            return {
              ...newState,
              ...s[key],
            };
          }
          return {
            ...newState,
            [key]: {
              errorMsg: 'This field is required',
              value: '',
            },
          };
        }, {}),
      };
    });
    return (
      formElements.filter(key => !formState[key] || (formState[key] && !formState[key].value))
        .length > 0
    );
  }, [formState]);
  const handleSubmit = e => {
    e.preventDefault();
    if (hasValidationErrors()) {
      return;
    }
    setLoading(true);
    fetch('/api/sendEmail', {
      body: JSON.stringify(
        Object.entries(formState).reduce((reqObj, [key, entry]) => {
          return {
            ...reqObj,
            [key]: entry.value,
          };
        }, {}),
      ),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(resp => resp.text())
      .then(res => {
        setLoading(false);
        console.log(res);
      });
  };
  return (
    <div className={classes.wrap}>
      <Head>
        <title>NolaJS | Contact Us</title>
        <link rel="canonical" href="https://www.nolajs.com/contact" />
        <script src="https://www.google.com/recaptcha/api.js?render=6LfKts4UAAAAAHTy_C4-j9T3fBdMft9L5Kys8A7i" />
      </Head>
      <h1>Contact Us</h1>
      <p className={classes.info}>
        Interested in working with us? Fill out the form below to get started. Once you complete the
        form we’ll be in touch within one business day to discuss your project.
      </p>
      <div className={classes.formWrap}>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            {form.map(el => (
              <TextField
                {...el}
                key={el.name}
                variant="outlined"
                fullWidth
                onChange={handleChange(el.name)}
                onBlur={handleBlur(el.name)}
                value={(formState[el.name] && formState[el.name].value) || ''}
                error={el.required && !!(formState[el.name] && formState[el.name].errorMsg)}
                helperText={el.required && formState[el.name] && formState[el.name].errorMsg}
              />
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
              {formState.contactType && formState.contactType.value === FORM_TYPES.MESSAGE ? (
                <TextField
                  multiline
                  variant="outlined"
                  fullWidth
                  label="Your Message"
                  name="message"
                  rows={6}
                  required
                  onChange={handleChange('message')}
                  onBlur={handleBlur('message')}
                  value={(formState.message && formState.message.value) || ''}
                  error={!!(formState.message && formState.message.errorMsg)}
                  helperText={formState.message && formState.message.errorMsg}
                />
              ) : (
                <div>
                  {projectForm.map(el => (
                    <TextField
                      {...el}
                      key={el.name}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange(el.name)}
                      onBlur={handleBlur(el.name)}
                      value={(formState[el.name] && formState[el.name].value) || ''}
                      error={el.required && !!(formState[el.name] && formState[el.name].errorMsg)}
                      helperText={el.required && formState[el.name] && formState[el.name].errorMsg}
                    />
                  ))}
                  <FormControl component="fieldset" className={classes.services}>
                    <FormLabel component="legend">What services are you interested in?</FormLabel>
                    <FormGroup>
                      {services.map(el => (
                        <FormControlLabel
                          key={el}
                          control={
                            <Checkbox onChange={handleChange('services', true)} value={el} />
                          }
                          label={el}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                  {projectForm2.map(el => (
                    <TextField
                      {...el}
                      key={el.name}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange(el.name)}
                      onBlur={handleBlur(el.name)}
                      value={(formState[el.name] && formState[el.name].value) || ''}
                      error={el.required && !!(formState[el.name] && formState[el.name].errorMsg)}
                      helperText={el.required && formState[el.name] && formState[el.name].errorMsg}
                    />
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
        )}
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Contact);
