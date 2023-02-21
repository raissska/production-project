
import { Story } from '@storybook/api';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';


export const RouterDecorator = (story: () => Story) => {
  return(
    <BrowserRouter>
    {story()}
    </BrowserRouter>
  )
};