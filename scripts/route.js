/*
  Try `truffle exec scripts/increment.js`, you should `truffle migrate` first.

  Learn more about Truffle external scripts: 
  https://trufflesuite.com/docs/truffle/getting-started/writing-external-scripts
*/

const transactionContract = artifacts.require("deployment");
const express = require('express')
const app = express()
const port = 3000

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};


// module.exports = async function (callback) {
//   const deployed = await buah.deployed();
//   const tambah = await deployed.tambahBuah(123, 123, 123, 12, 123, "yaya");
//   console.log(deployed);
//   callback();
// };

module.exports = async function () {
  let tot = 0n;
  
  const deployed = await transactionContract.deployed();

  const adddata = async (req, res) => {
    const currentTimestamp = new Date().toString();
    try {
      const {
        transactionNumber,
        amount,
        balance,
        status
     } = req.body;

     tot = tot + BigInt(amount);
 
     const tambah = await deployed.addTransaction(
       transactionNumber,
       amount,
       tot,
       currentTimestamp,
       status
     );
 
     return res.json({
       data: "Succes"
     })    
    } catch (error) {
      return res.json({
        message: error.message
      })
    }
  }

  const getAllData = async (req, res) => {
    const tambah = await deployed.getAllTransaction();

    return res.json({
      data: tambah
    })
  }

  app.use(express.json());
  app.post('/add', adddata);
  app.get('/', getAllData);
  app.get('/test', (req, res) => res.send('Hello World!'))
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))

}


