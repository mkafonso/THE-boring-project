// SPDX-License-Identifier: Unlicence
pragma solidity ^0.8.0;

contract UserContract {
    struct User {
        string username;
        string bio;
        address walletAddress;
        uint256 balance;
    }

    mapping(address => User) public users;

    event UserCreated(address indexed userAddress, string username);

    function createUser(string memory _username, string memory _bio) public {
        require(bytes(users[msg.sender].username).length == 0, "User already exists");

        users[msg.sender] = User(_username, _bio, msg.sender, 0); // Initialize balance to 0
        emit UserCreated(msg.sender, _username);
    }

    function getBalance() public view returns (uint256) {
        return users[msg.sender].balance;
    }

    function deposit() public payable {
        users[msg.sender].balance += msg.value;
    }

    function withdraw(uint256 _amount) public {
        require(users[msg.sender].balance >= _amount, "Insufficient balance");

        users[msg.sender].balance -= _amount;
        payable(msg.sender).transfer(_amount);
    }
}
