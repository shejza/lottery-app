import React, { useState, useEffect } from 'react';
import web3 from './web3';
import lottery from './lottery';
import './App.css';

const App = () => {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleWinner = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    setMessage('Sending transaction...');
    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    setMessage('Transaction complete! Winner has been picked.');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    setMessage('Sending transaction...');

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether'),
    });
    setMessage('Transaction complete! You have been entered.');
  };

  useEffect(() => {
    const fetchManager = async () => {
      try {
        const managerResult = await lottery.methods.manager().call();
        const playersResult = await lottery.methods.getPlayers().call();
        const balance = await web3.eth.getBalance(lottery.options.address);

        setManager(managerResult);
        setPlayers(playersResult);
        setBalance(balance);
      } catch (error) {
        console.error('Error fetching manager:', error);
      }
    };

    fetchManager();
  }, []); 

  useEffect(() => {
    web3.eth.getAccounts().then(console.log);
  }, []); 

  return (
  <div className="app-container">
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by <b>{manager}</b> <br/><br/>There are currently {players.length} people entered,
        competing to win {web3.utils.fromWei(balance, 'ether')} ether!
      </p>
      <form className="form-container" onSubmit={onSubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter</label>
          <input
            className="input-field"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className="button">Enter</button>
      </form>
      <h4>Ready to pick a winner?</h4>
      <button className="button winner-button" onClick={handleWinner}>
        Pick a winner!
      </button>
      <h4 className="message">{message}</h4>
    </div>
  );
};

export default App;
