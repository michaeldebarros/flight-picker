import React from 'react';
import moment from 'moment';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin:'',
      destination:'',
      adults:'1',
      children:'0',
      infants:'0',
      dataInicial: new Date(),
      dataFinal: new Date()
    };
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.handleInfantsChange = this.handleInfantsChange.bind(this);
    this.handleDataInicialChange = this.handleDataInicialChange.bind(this);
    this.handleDataFinalChange = this.handleDataFinalChange.bind(this);




    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOriginChange (event){
    this.setState({origin: event.target.value})
  }

  handleDestinationChange(event){
    this.setState({destination: event.target.value})
  }

  handleAdultsChange(event){
    this.setState({adults: event.target.value})
  }

  handleChildrenChange(event){
    this.setState({children: event.target.value})
  }

  handleInfantsChange(event){
    this.setState({infants: event.target.value})
  }

  handleInfantsChange(event){
    this.setState({infants: event.target.value})
  }

  handleDataInicialChange(event) {
  this.setState({dataInicial: event.target.value})
  if(moment(this.state.dataInicial).unix() > moment(this.state.dataFinal).unix()){
    alert(`data inicial maior`)
  }
 }

 handleDataFinalChange(event) {
 if(moment(this.state.dataInicial).unix() > moment(this.state.dataFinal).unix()){
   alert(`data inicial maior`);
 }
 this.setState({dataFinal: event.target.value})
}

handleSubmit(event) {
  alert(this.state.origin + this.state.destination + this.state.adults + this.state.children + this.state.infants + this.state.dataInicial + this.state.dataFinal);
  event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Origem:
          <input type="text" value={this.state.origin} onChange={this.handleOriginChange} />
        </label>
        <label>
          Destino:
          <input type="text" value={this.state.destination} onChange={this.handleDestinationChange} />
        </label>
        <label>
          Adultos:
        <select value={this.state.adults} onChange={this.handleAdultsChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <label>
        Crianças:
      <select value={this.state.children} onChange={this.handleChildrenChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </label>
      <label>
        Bebês até 24 meses:
      <select value={this.state.infants} onChange={this.handleInfantsChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </label>
      <label>
          Data Inicial:
          <input type="date" value={this.state.dataInicial} onChange={this.handleDataInicialChange}/>
        </label>
        <label>
          Data Final:
          <input type="date" value={this.state.dataFinal} onChange={this.handleDataFinalChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
