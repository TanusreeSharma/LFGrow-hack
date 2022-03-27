// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Academic is ERC1155, Ownable {
    // Academic-BADGE is the NFT id 1 token in this contract
    // 1st task of connecting wallet to create a new scholar account 
    // 2nd task will be to mint research paper with lit protocol with access control to certain address 
    // it send message to contract to mint badge NFT and add it to the profile. 
  


    uint256 public constant Paper = 0;

    uint256 public constant BADGE = 1;

    uint256 public constant NFTXter = 2;

    uint public nftCount = 0;
    
    constructor() ERC1155("https://73ccxfsbao0t.usemoralis.com/{id}.json") {
        
        _mint(msg.sender, 0, 1, "{'Connected': 1}");
        _mint(msg.sender, 1, 1, "{'Badge': 'paper-mint'}");
        _mint(msg.sender, 2, 1, "{'Citation': 1}");
                    
        nftCount++;
    }


    function mint(address account, uint256 id, uint256 amount) public onlyOwner {
        _mint(account, id, amount, "");
        nftCount++;

    }

    // acc addr, 0, 1 // 
    function PaperMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Connected': 1}");
        nftCount++;

    }

    // acc addr, 1, 1 // 
    function badgeMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Badge': 'BadgeMint'}");
        nftCount++;

    }

    // acc addr, 2, 1 // 
    function ProgressMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Citation': 1}");
        nftCount++;

    }

    // acc addr, 1, 1
    function burn(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
        nftCount--;

    }

}