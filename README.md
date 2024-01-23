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

### Project Structure

