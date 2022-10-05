import { useEffect } from 'react';
import Layout from './layout';
import MainSlider from './components/main-slider';

import './web/css/style.scss';

const App = () => {
  useEffect(() => {
    console.log("%cHey, thank you for using this project. If you really like it, please subscribe to my youtube channel jonu dev for more projects like this.", "background-color: green; color: black");
    console.log("%cALSO, you can visit my website, jonu.dev, where you can find all details about future projects.", "background-color: pink; color: black");
  }, []);

  return (
    <>
      <Layout>
        <MainSlider />
      </Layout>
    </>
  );
}

export default App;
