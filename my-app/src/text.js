import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Header, Icon, Image, Input, Label, List, Menu, Segment } from 'semantic-ui-react';



class TopMenu extends React.Component {
  render () {
    return (
        <Grid>
          <Grid.Column width={4}>
            <Image className="logo" src="https://css.s-hawaiianairlines.com/Content/assets/images/logos/ha-logo-horizontal@2x.png" size="medium"/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <Menu borderless className="topmenu">
                <Menu.Menu position='right'>
                  <Menu.Item position="right">Help Center</Menu.Item>
                  <Menu.Item>Optional Fees</Menu.Item>
                  <Menu.Item>Contact Us</Menu.Item>
                  <Menu.Item><Icon name="search"/>Search</Menu.Item>
                  <Dropdown item text="USD">
                    <Dropdown.Menu>
                      <Dropdown.Item>USD</Dropdown.Item>
                      <Dropdown.Item></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
              </Menu>
            </Grid.Row>
            <Grid.Row>
              <Menu borderless className="middlemenu">
                <Menu.Menu position='right'>
                  <Menu.Item position="right"><h3>Book</h3></Menu.Item>
                  <Menu.Item><h3>Manage Flights</h3></Menu.Item>
                  <Menu.Item><h3>Our Island</h3></Menu.Item>
                  <Menu.Item><h3>Island Guide</h3></Menu.Item>
                  <Menu.Item><h3>Hawaiian Miles</h3></Menu.Item>
                  <Menu.Item><h3>Search  |  Join Now</h3></Menu.Item>
                  <Menu.Item><Icon name="search"/></Menu.Item>
                  <Menu.Item><Icon name="search"/></Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid.Row>
          </Grid.Column>
        </Grid>
    );
  }
}






class Background extends React.Component {
  state = { activeItem: 'Flights' }
  render () {
    return (
        <Grid centered columns={1}>
          <div className="background"></div>
          <Grid.Column>
            <div className="middlepage"></div>
            <Menu attached='top' tabular>
              <Menu.Item>Flights</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
    );
  }
}

/*
class MiddlePage extends React.Component {
  state = { activeItem: 'Flights' }
  render () {
    const { activeItem } = this.state
    return (
    <Grid centered columns={2}>
    <Grid.Column>
      <div className="middlepage"></div>
      <Menu attached='top' tabular>
        <Menu.Item
            name='Flights'
            active={activeItem === 'bio'}/>
      </Menu>
    </Grid.Column>
    </Grid>
    );
  }
}
*/

class FooterMenu extends React.Component {
  render () {
    return (
        <div className="footer-background">
          <Grid container columns="five">
            <Grid.Column>
              Navigation
              <hr/>
              <List>
                <List.Item>Contact Us</List.Item>
                <List.Item>Help Center</List.Item>
                <List.Item>Site Map</List.Item>
                <List.Item>Guests with Disabilities</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              _
              <hr/>
              <List>
                <List.Item>Legal</List.Item>
                <List.Item>Terms of Use</List.Item>
                <List.Item>All Fees</List.Item>
                <List.Item>Team Kokua</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              About Us
              <hr/>
              <List>
                <List.Item>Contract of Carriage</List.Item>
                <List.Item>Careers</List.Item>
                <List.Item>Investor Relations</List.Item>
                <List.Item>Cargo</List.Item>
                <List.Item>Fare Deals</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              _
              <hr/>
              <List>
                <List.Item>Customer Service Plan</List.Item>
                <List.Item>Tarmac Delay Plan</List.Item>
                <List.Item>Privacy</List.Item>
                <List.Item>Shop Our Store</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Sign Up for Deals
              <hr/>
              <List>
                <List.Item>Get notifications for low fares & special deals.</List.Item>
                <List.Item>
                  <Input placeholder='Enter Email Address' />
                  <Input placeholder='Zip/Postal Code'/>
                  <Label>
                    Subscribe
                  </Label>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>

    );
  }
}



class HawaiianAir extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Background/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<HawaiianAir/>, document.getElementById('root'));
