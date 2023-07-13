import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Quote from '../pages/Quote';

const AllRouts = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'calculator',
      element: <Calculator />,
    },
    {
      path: 'quote',
      element: <Quote />,
    },
  ];

  const usableRoutes = useRoutes(routes);
  return usableRoutes;
};

export default AllRouts;
