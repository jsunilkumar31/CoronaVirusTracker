import React from 'react';

import { Cards, CountryPicker, Chart, Header } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import doctor from './images/doctor.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header></Header>
        <div className={styles.content_main}>
          <div className={styles.content_left}>
            <img className={styles.image} src={doctor} alt="COVID-19" />
          </div>
          <div className={styles.content_right}>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;