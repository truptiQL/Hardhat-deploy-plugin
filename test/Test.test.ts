import chaiModule from "chai";
const { expect } = require("chai");

import { chaiEthers } from "chai-ethers";
chaiModule.use(chaiEthers);

import { ethers, deployments, getNamedAccounts } from "hardhat";

let name = "MyToken";
let symbol = "MT";
let decimals = 18;

describe("MyToken contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    await deployments.fixture(["MyToken"]);
    const Token = await ethers.getContract("MyToken");
    const ownerBalance = await Token.balanceOf("0x9cc6F5f16498fCEEf4D00A350Bd8F8921D304Dc9");
    expect(ownerBalance).to.equal(0);
  });

  it("should return name", async function() {
    await deployments.fixture(["MyToken"]);
    const Token = await ethers.getContract("MyToken");
    expect(await Token.name()).to.eq(name);
  });
  it("should return symbol", async function() {
    await deployments.fixture(["MyToken"]);
    const Token = await ethers.getContract("MyToken");
    expect(await Token.symbol()).to.eq(symbol);
  });
  it("should return decimals", async function() {
    await deployments.fixture(["MyToken"]);
    const Token = await ethers.getContract("MyToken");
    expect(await Token.decimals()).to.eq(decimals);
  })
});

