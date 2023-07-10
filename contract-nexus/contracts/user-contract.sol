// SPDX-License-Identifier: Unlicence
pragma solidity ^0.8.0;

contract UserContract {
    struct User {
        string username;
        string bio;
        address walletAddress;
    }

    mapping(address => User) public users;

    event UserCreated(address indexed userAddress, string username);

    function createUser(string memory _username, string memory _bio) public {
        require(bytes(users[msg.sender].username).length == 0, "User already exists");

        users[msg.sender] = User(_username, _bio, msg.sender);
        emit UserCreated(msg.sender, _username);
    }
}
