import React, { Component } from 'react';
import './css/styles.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Drivers from './components/Drivers/drivers';
import Races from './components/Races/races';
import Teams from './components/Teams/teams';
import Home from './components/Home/home';
// importing react-router for routing based on Route (path) and Link (to)
import { BrowserRouter as Router, Route } from "react-router-dom";
/* Importing Font Awesome Library */
import { library } from '@fortawesome/fontawesome-svg-core'
//  only importing the icons we want to use
import { faStar, faMinus, faAward, faTrophy, faHeart } from '@fortawesome/free-solid-svg-icons'
// and add these icons tot the library
library.add(faStar, faMinus, faAward, faTrophy, faHeart)

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      drivers: [],
      nameListDrivers: [],
      winners: [],
      constructors: [],
      races: [],
      nationality: [],
      circuits: [], 
      isLoaded: false,
      season: "2018",
      start: 2009,
      end: 2018,
      favorites: [],
      siteTitle: "Formula 1",
      route: "drivers",
      constructorStanding: [],
      driverStandings: [],
      teams:[],

    }
    this.setSeason = this.setSeason.bind(this);
  }
  componentDidMount() {
        this.fetchData();
    }

  fetchData() {
     switch (this.state.route) {
      case 'races':
        this.fetchRaceResults();
        break;
      case 'teams':
        this.fetchConstructors();
        this.fetchTeams();
        break;
      default:
        this.fetchDrivers();
        this.fetchDriverStandings();
    }      
  }
  // alteration to test git
  // Fetch Driver data from API 
  fetchDrivers() {
      // we just want data from one specific year, i.e. the year that is selected by the user
      let year = this.state.season;
      // set the url for fetching drivers that won a race so we can form a list of winners
      let url1 = `http://ergast.com/api/f1/${year}/qualifying/1.json`; 
      // set the url for fetching all drivers from the API
      let url2 = `http://ergast.com/api/f1/${year}/drivers.json`; 
      
      // go fetching
      Promise.all([
          fetch(url1).then(res1 => res1.json()),
          fetch(url2).then(res2 => res2.json()),
      ])
      // do something with the fetched data
      .then(values => {
          // map the fetched winners into a list of winners 
          let winners =  (values[0].MRData.RaceTable.Races).map(race => (
                race.QualifyingResults[0].Driver
              ));  
           // map the fetched drivers into a list of drivers          
          let drivers = values[1].MRData.DriverTable.Drivers; 
          //let nameListDrivers = values[1].MRData.DriverTable.Drivers;
          // set the state with fetched data
          this.setState({
              isLoaded: true, 
              winners: winners,
              drivers: drivers,
              //nameListDrivers: nameListDrivers,
          })
      })
      // catch an error and show it in the console so we know when fetching is failing 
      .catch(error => console.log('fetching drivers failed', error))
  }
  // Fetch drivers standings
  fetchDriverStandings() {
    let year = this.state.season;
      fetch(`http://ergast.com/api/f1/${year}/driverStandings.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
          let driverStandings = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings).map(
            standing => (
                {                 
                 position: standing.position,
                 points: standing.points,
                 wins: standing.wins,
                 driver: standing.Driver.givenName + " " + standing.Driver.familyName,
                 permanentNumber: standing.Driver.permanentNumber,
                 nationality: standing.Driver.nationality,
                 car: standing.Constructors[0].name,
                }
              )); 
          this.setState({
              driverStandings: driverStandings,
          })
      })
      .catch(error => console.log('fetching driverstanding failed', error))
  }
  // Fetch constructor data from the API
  fetchConstructors() {
      // we only want data of a specific year, i.e. the year that is selected by the user
      let year = this.state.season;
      fetch(`http://ergast.com/api/f1/${year}/constructors.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
          let constructors = data.MRData.ConstructorTable.Constructors;
          this.setState({
              constructors: constructors,
          })
      })
      // throw an error if fetching didn't succeed
      .catch(error => console.log('fetching constructors failed', error))
  }
  // Fetch race results
  fetchRaces() {
    let year = this.state.season;
      fetch(`http://ergast.com/api/f1/${year}/races.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
          let races = data.MRData.RaceTable.Races;
          this.setState({
              races: races,
          })
      })
      // throw an error if fetching didn't succeed
      .catch(error => console.log('fetching teams failed', error))
  }
  fetchRaceResults() {
    let year = this.state.season;
      fetch(`http://ergast.com/api/f1/${year}/results/1.json`)
      .then(res => {
        return res.json()
      })
      .then(data => {
          let races = data.MRData.RaceTable.Races;
          this.setState({
              races: races,
          })
      })
      // throw an error if fetching didn't succeed
      .catch(error => console.log('fetching race results failed', error))
  }
  fetchTeams(){
    let year = this.state.season;
      let url1 = `http://ergast.com/api/f1/${year}/constructors.json`; 
      let url2 = `http://ergast.com/api/f1/${year}/driverStandings.json`; 
      
      Promise.all([
          fetch(url1).then(res1 => res1.json()),
          fetch(url2).then(res2 => res2.json()),
      ])

      // do something with the fetched data
      .then(values => {
          // we map the constructorIds of the fetched constructors data into a list
          // let's call it carnames because 'constructor' is a reserved word
          const carnames =  (values[0].MRData.ConstructorTable.Constructors).map(car => (
                car.constructorId
              ));
          // we don't need to store all the data of driverStandings
          // we only map the data we need into a list of drivers        
          const drivers = (values[1].MRData.StandingsTable.StandingsLists[0].DriverStandings).map(
            driver => (
              { driverId: driver.Driver.driverId,
                driverName: driver.Driver.givenName,
                driverFamilyName: driver.Driver.familyName,
                car: driver.Constructors[0].constructorId
              }));
          // let's make a new list of teams
          // we start of with an empty one
          const teams = [];
          // now we iterate over the carnames array and compose the team for each car
          for (let i = 0; i < carnames.length; i++) {
            // for each car we filter the list of drivers based on the constructorId 
            const raceteam = drivers.filter((item)=> {
              return item.car === carnames[i]
            });
            // now we can combine car and drivers into one team object 
            // we push each team object into the teams array
            teams.push({cartype: carnames[i], drivers: raceteam})          
          }
          // finally we store the composed teams in the state
          this.setState({
              teams: teams,
          })
      })
      // catch an error and show it in the console so we know when fetching is failing 
      .catch(error => console.log('fetching teams failed', error))

  }
  fetchConstructorStanding() {
    let year = this.state.season;
     fetch(`http://ergast.com/api/f1/${year}/constructorStandings.`)
      .then(res => {
        return res.json()
      })
      .then(data => {
          let constructorStanding = data.MRData.StandingsTable.StandingsLists.ConstructorStandings;
          this.setState({
              constructorStanding: constructorStanding,
          })
      })
      .catch(error => console.log('fetching race results failed', error))
  }
  // remove duplicates from an array
  stripFromDuplicates(arr) {
      const strippedArray = arr.reduce((x, y) => x.includes(y) ? x : [...x, y], []);
      return strippedArray;
  }
  // a function to check if an item is in an array 
  // we'll use it to check if a driver is in the list of winners 
  // so we can set a class based on that information
  inArray(item, array)
  {
      var count=array.length;
      for(var i=0;i<count;i++)
      {
          if(array[i]===item){return true;}
      }
      return false;
  }

  // to set a specific season picked by the user
  // so we can filter data when fetching
  // this function is used for the selectmenu
  setSeason(event) {
      this.setState({season: event.target.value}, () => {this.fetchData()});
  }
  // this function is used for the listmenu
  setYear = (item) =>  (event) => {
      event.preventDefault();
      this.setState({season: item}, () => {this.fetchData()});
  }
  // to get a list of all the years, starting from the first year till the last year
  returnYears(first, last){
      let years = []
      let count = last;
      while(count >= first) {
          years.push(count);
          count--;
      }
      return years;
  }
  // to add a driver to the list of favorites
  // using currying prevents the function to fire immediately
  addFavorite = (item) => (event) => {
      // let's assign the favorites that we have now to a temporary list
      const favorites = this.state.favorites;
      // if the driver (item) is not (yet) in the list of favorites
      if(!favorites.includes(item)) {
        // add the driver to the temporary list
          favorites.push(item);
          // assign the list content to this.state.favorites with this.setState
          this.setState({favorites: favorites});
      }
      // if it is in the list we do nothing so we don't get duplicates
  }
  // remove a favorite when an item is passed and an event is triggered
  removeFavorite = (item) => (event) => {
      // let's assign the favorites that we have now to a temporary list
      let favorites = this.state.favorites;
      // filter the list of favorites based on the condition (favorite !== item)
      // so if an element in the list of favorites doesn't equal the item 
      // it will stay in the filtered list
      favorites = favorites.filter(favorite => favorite !== item);
      // update favorites with the filtered list
      this.setState({favorites : favorites});
  }
  setRoute = (someroute) => () => {
    this.setState({route: someroute}, () => {this.fetchData()});
    
  }
  render() {
    const { driverStandings, teams, route, siteTitle, races, constructors, isLoaded, favorites, drivers, winners, start, end, season } = this.state;
    const years = this.returnYears(start,end);
    // map full names of winning drivers and get rid off duplicate names
    const winnerNames = (winners.map(driver => (
            driver.givenName + " " + driver.familyName
        ))).reduce((x, y) => x.includes(y) ? x : [...x, y], []) ;

    if(!isLoaded) {
            return <div>Loading...</div>
    }
    else {
      return (
        <Router>
          <div className="App">
            <Header 
              title={siteTitle}   
              setRoute={this.setRoute}
              years={years} 
              setSeason={this.setSeason} 
              season={season}
              setYear={this.setYear} 
              route={route} 
               />
            <main>
              <div className="container">
                  <Route exact path="/" component={Home} />
                  <Route path="/drivers" render={(props) => (
                    <Drivers {...props}  
                      favorites={favorites} 
                      winnerNames={winnerNames} 
                      season={season} 
                      drivers={drivers} 
                      addFavorite={this.addFavorite}
                      removeFavorite={this.removeFavorite}
                      driverStandings={driverStandings}

                    />
                  )} />
                  <Route path="/teams" render={(props) => (
                    <Teams {...props} 
                      constructors={constructors} 
                      teams={teams}
                    />
                  )} />
                  <Route path="/races" render={(props) => (
                    <Races {...props} 
                      races={races} 
                    />
                  )}
                 />
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      );
    }
  }
}


export default App;
