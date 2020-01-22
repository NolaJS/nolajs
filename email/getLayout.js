import juice from 'juice';
import doc from './layoutStr';
import styles from './stylesStr';

const getLayout = ({ content, title }) => {
  const docStr = doc
    .replace('{{styles}}', `<style>${styles}</style>`)
    .replace('{{title}}', title)
    .replace('{{content}}', content);

  return juice(docStr);
};

export default getLayout;
