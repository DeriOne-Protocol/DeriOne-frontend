export const deriOneV1AddressProd = "0x1604AC39a9e19Fb8c1D8ccF3EC42e80D69f4d400";
export const deriOneV1AbiProd = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hegicETHOptionV888Address",
        type: "address"
      },
      {
        internalType: "address",
        name: "_hegicETHPoolV888Address",
        type: "address"
      },
      {
        internalType: "address",
        name: "_opynExchangeV1Address",
        type: "address"
      },
      {
        internalType: "address",
        name: "_opynOptionsFactoryV1Address",
        type: "address"
      },
      {
        internalType: "address",
        name: "_uniswapFactoryV1Address",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "protocolName",
        type: "string"
      }
    ],
    name: "TheCheapestETHPutOptionGot",
    type: "event"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_minExpiry", type: "uint256" },
      {
        internalType: "uint256",
        name: "_minStrikeInUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxStrikeInUSD",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_optionSizeInWEI",
        type: "uint256"
      }
    ],
    name: "getTheCheapestETHPutOption",
    outputs: [
      {
        components: [
          {
            internalType: "enum DeriOneV1Main.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "address",
            name: "oTokenAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "paymentTokenAddress",
            type: "address"
          },
          { internalType: "uint256", name: "expiry", type: "uint256" },
          {
            internalType: "uint256",
            name: "optionSizeInWEI",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premiumInWEI",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeInUSD",
            type: "uint256"
          }
        ],
        internalType: "struct DeriOneV1Main.TheCheapestETHPutOption",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hegicETHOptionV888Address",
        type: "address"
      }
    ],
    name: "instantiateHegicETHOptionV888",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hegicETHPoolV888Address",
        type: "address"
      }
    ],
    name: "instantiateHegicETHPoolV888",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_opynExchangeV1Address",
        type: "address"
      }
    ],
    name: "instantiateOpynExchangeV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_opynOptionsFactoryV1Address",
        type: "address"
      }
    ],
    name: "instantiateOpynOptionsFactoryV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniswapFactoryV1Address",
        type: "address"
      }
    ],
    name: "instantiateUniswapFactoryV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "theCheapestETHPutOption",
    outputs: [
      {
        components: [
          {
            internalType: "enum DeriOneV1Main.Protocol",
            name: "protocol",
            type: "uint8"
          },
          {
            internalType: "address",
            name: "oTokenAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "paymentTokenAddress",
            type: "address"
          },
          { internalType: "uint256", name: "expiry", type: "uint256" },
          {
            internalType: "uint256",
            name: "optionSizeInWEI",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "premiumInWEI",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "strikeInUSD",
            type: "uint256"
          }
        ],
        internalType: "struct DeriOneV1Main.TheCheapestETHPutOption",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
