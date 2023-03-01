/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockBep20 } from "./MockBep20";

export class MockBep20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides
  ): Promise<MockBep20> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<MockBep20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  attach(address: string): MockBep20 {
    return super.attach(address) as MockBep20;
  }
  connect(signer: Signer): MockBep20Factory {
    return super.connect(signer) as MockBep20Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBep20 {
    return new Contract(address, _abi, signerOrProvider) as MockBep20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200126c3803806200126c833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602001519150839050826000620001b26200024c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350815162000211906004906020850190620003b7565b50805162000227906005906020840190620003b7565b50506006805460ff191660121790555062000243338262000250565b50505062000453565b3390565b6001600160a01b038216620002ac576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002c8816003546200035560201b6200086c1790919060201c565b6003556001600160a01b038216600090815260016020908152604090912054620002fd9183906200086c62000355821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620003b0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003fa57805160ff19168380011785556200042a565b828001600101855582156200042a579182015b828111156200042a5782518255916020019190600101906200040d565b50620004389291506200043c565b5090565b5b808211156200043857600081556001016200043d565b610e0980620004636000396000f3fe608060405234801561001057600080fd5b50600436106100e05760003560e01c8063893d20e811610087578063893d20e81461026c5780638da5cb5b1461029057806395d89b4114610298578063a0712d68146102a0578063a457c2d7146102bd578063a9059cbb146102e9578063dd62ed3e14610315578063f2fde38b14610343576100e0565b806306fdde03146100e5578063095ea7b31461016257806318160ddd146101a257806323b872dd146101bc578063313ce567146101f2578063395093511461021057806370a082311461023c578063715018a614610262575b600080fd5b6100ed610369565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012757818101518382015260200161010f565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018e6004803603604081101561017857600080fd5b506001600160a01b0381351690602001356103ff565b604080519115158252519081900360200190f35b6101aa61041c565b60408051918252519081900360200190f35b61018e600480360360608110156101d257600080fd5b506001600160a01b03813581169160208101359091169060400135610422565b6101fa6104a9565b6040805160ff9092168252519081900360200190f35b61018e6004803603604081101561022657600080fd5b506001600160a01b0381351690602001356104b2565b6101aa6004803603602081101561025257600080fd5b50356001600160a01b0316610500565b61026a61051b565b005b6102746105c7565b604080516001600160a01b039092168252519081900360200190f35b6102746105d6565b6100ed6105e5565b61018e600480360360208110156102b657600080fd5b5035610646565b61018e600480360360408110156102d357600080fd5b506001600160a01b0381351690602001356106c3565b61018e600480360360408110156102ff57600080fd5b506001600160a01b03813516906020013561072b565b6101aa6004803603604081101561032b57600080fd5b506001600160a01b038135811691602001351661073f565b61026a6004803603602081101561035957600080fd5b50356001600160a01b031661076a565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103f55780601f106103ca576101008083540402835291602001916103f5565b820191906000526020600020905b8154815290600101906020018083116103d857829003601f168201915b5050505050905090565b600061041361040c6108cd565b84846108d1565b50600192915050565b60035490565b600061042f8484846109bd565b61049f8461043b6108cd565b61049a85604051806060016040528060288152602001610cfc602891396001600160a01b038a166000908152600260205260408120906104796108cd565b6001600160a01b031681526020810191909152604001600020549190610b0f565b6108d1565b5060019392505050565b60065460ff1690565b60006104136104bf6108cd565b8461049a85600260006104d06108cd565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061086c565b6001600160a01b031660009081526001602052604090205490565b6105236108cd565b6001600160a01b03166105346105d6565b6001600160a01b03161461057d576040805162461bcd60e51b81526020600482018190526024820152600080516020610d24833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60006105d16105d6565b905090565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103f55780601f106103ca576101008083540402835291602001916103f5565b60006106506108cd565b6001600160a01b03166106616105d6565b6001600160a01b0316146106aa576040805162461bcd60e51b81526020600482018190526024820152600080516020610d24833981519152604482015290519081900360640190fd5b6106bb6106b56108cd565b83610ba6565b506001919050565b60006104136106d06108cd565b8461049a85604051806060016040528060258152602001610d8d60259139600260006106fa6108cd565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610b0f565b60006104136107386108cd565b84846109bd565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6107726108cd565b6001600160a01b03166107836105d6565b6001600160a01b0316146107cc576040805162461bcd60e51b81526020600482018190526024820152600080516020610d24833981519152604482015290519081900360640190fd5b6001600160a01b0381166108115760405162461bcd60e51b8152600401808060200182810382526026815260200180610cd66026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000828201838110156108c6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166109165760405162461bcd60e51b8152600401808060200182810382526024815260200180610cb26024913960400191505060405180910390fd5b6001600160a01b03821661095b5760405162461bcd60e51b8152600401808060200182810382526022815260200180610db26022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610a025760405162461bcd60e51b8152600401808060200182810382526025815260200180610c8d6025913960400191505060405180910390fd5b6001600160a01b038216610a475760405162461bcd60e51b8152600401808060200182810382526023815260200180610d6a6023913960400191505060405180910390fd5b610a8481604051806060016040528060268152602001610d44602691396001600160a01b0386166000908152600160205260409020549190610b0f565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610ab3908261086c565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b9e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b63578181015183820152602001610b4b565b50505050905090810190601f168015610b905780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216610c01576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600354610c0e908261086c565b6003556001600160a01b038216600090815260016020526040902054610c34908261086c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3505056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737342455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657242455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a20617070726f766520746f20746865207a65726f2061646472657373a264697066735822122047aebd463238b8e659de2553eec437fdac62602d510927130912619029014add64736f6c634300060c0033";