import React from 'react';
import '@/styles/views/App.scss';
import HSideItem from '@/components/HSideItem'
import HHeader from '@/components/HHeader'
import HContent from '@/components/HContent'
import { ContentRoutes } from '@/routes'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HSideItem />
        <div className="wrapper">
          <HHeader />
          <HContent>
            <ContentRoutes />
          </HContent>
        </div>
      </div>
    );
  }
}

export default App;
