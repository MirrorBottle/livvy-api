pragma solidity >=0.4.22 <0.9.0;
// import "@openzeppelin/contracts/utils/Counters.sol";
// const x = require('oppenzeppelin/')


contract deployment {


   // function generateUniqueID() public view returns (string memory) {
   //    uint256 timestamp = block.timestamp;
   //    uint256 nonce = _nonce.current();
   //    _nonce.increment();
      
   //    string memory uniqueID = Strings.toString(timestamp);
   //    uniqueID = string(abi.encodePacked(uniqueID, Strings.toString(nonce)));
   //    // You can also add additional randomness or data to the unique ID.

   //    return uniqueID;
   // }

   struct transaction{
      uint256 transactionNumber;
      uint256 amount;
      uint256 balance;
      string tanggal;
      string status;
   }
   transaction[] public transactionlist;

     function addTransaction(
      uint256 transactionNumber,
      uint256 amount,
      uint256 balance,
      string memory tanggal,
      string memory status
      )  public {
        transactionlist.push(
         transaction(
         transactionNumber,
         amount,
         balance,
         tanggal,
         status
        ));
     }

     function gettransaction(uint256 idx) public view returns (transaction memory) {
        // Retrieve a specific element from the array
        require(idx < transactionlist.length, "Index out of range");
        return transactionlist[idx];
    }

    function getJumlahTransaction() public view returns (uint256) {
        // Return the length of the array
        return transactionlist.length;
    }

    function getAllTransaction() public view returns (transaction[] memory) {
        return transactionlist;
    }
}