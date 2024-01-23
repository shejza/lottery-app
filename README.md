# Lottery App

## Overview

This repository contains two projects: `lottery` and `lottery-react`. The `lottery` project includes the smart contract written in Solidity, and the `lottery-react` project is a React application that interacts with the smart contract.

## Lottery (Solidity)

### Language Used

- Solidity

### Smart Contract Details

The `Lottery` smart contract allows participants to enter the lottery by sending a minimum amount of Ether. The manager can pick a random winner, and the contract transfers the balance to the chosen winner. Only the manager is allowed to initiate the winner-picking process.

#### Contract Functions

- `enter()`: Allows participants to enter the lottery by sending a minimum amount of Ether.
- `random()`: Generates a pseudo-random number using block information and current players.
- `pickWinner()`: Allows the manager to pick a random winner and transfer the balance to them.
- `getPlayers()`: Retrieves the list of current participants.

## Lottery-React (React)

### Languages Used

- JavaScript (React)

### React App Details

The `lottery-react` project is a React application that provides a user interface for interacting with the `Lottery` smart contract.

#### Components

- `App`: The main component that displays information about the lottery, allows users to enter the lottery, and enables the manager to pick a winner.
- Other components (e.g., form elements) as needed.

### Connecting React App with Smart Contract

The React app uses the `web3` library to connect to the Ethereum blockchain. The `web3` instance is created using the `HDWalletProvider` and is used to deploy the smart contract, fetch contract details, and interact with its functions.

### Deployment Script

The smart contract is deployed using the `HDWalletProvider` and Truffle's `web3` library. The deployment script is found in `lottery` at `deploy.js`.

## How to Use

1. Clone this repository.
2. Install dependencies for each project (`lottery` and `lottery-react`).
3. Configure environment variables (e.g., Infura URL, mnemonic phrase) for deploying and interacting with the smart contract.
4. Deploy the smart contract using the deployment script in `lottery`.
5. Run the React app using `npm start` in the `lottery-react` project.
6. Interact with the lottery by entering and picking winners.

Feel free to explore each project's folder for more details.


### Acknowledgment

This project was inspired by Stephen Grider's Ethereum and Solidity: The Complete Developer's Guide course on Udemy. The course provided valuable insights into smart contract development on the Ethereum blockchain. While this project shares similarities with the course content, it has been independently developed and customized for learning purposes.