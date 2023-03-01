/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EggToken } from "./EggToken";

export class EggTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EggToken> {
    return super.deploy(overrides || {}) as Promise<EggToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EggToken {
    return super.attach(address) as EggToken;
  }
  connect(signer: Signer): EggTokenFactory {
    return super.connect(signer) as EggTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EggToken {
    return new Contract(address, _abi, signerOrProvider) as EggToken;
  }
}

const _abi = [
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
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
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280601081526020016f476f6f736520476f6c64656e2045676760801b8152506040518060400160405280600381526020016245474760e81b815250600062000069620000f460201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000c8906004906020850190620000f8565b508051620000de906005906020840190620000f8565b50506006805460ff191660121790555062000194565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013b57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016b5782518255916020019190600101906200014e565b50620001799291506200017d565b5090565b5b808211156200017957600081556001016200017e565b611b8880620001a46000396000f3fe608060405234801561001057600080fd5b50600436106101795760003560e01c8063782d6fe1116100d9578063a9059cbb11610087578063a9059cbb14610493578063b4b5ea57146104bf578063c3cda520146104e5578063dd62ed3e1461052c578063e7a324dc1461055a578063f1127ed814610562578063f2fde38b146105b457610179565b8063782d6fe1146103e05780637ecebe001461040c578063893d20e8146104325780638da5cb5b1461043a57806395d89b4114610442578063a0712d681461044a578063a457c2d71461046757610179565b8063395093511161013657806339509351146102b157806340c10f19146102dd578063587cde1e1461030b5780635c19a95c1461034d5780636fcfff451461037357806370a08231146103b2578063715018a6146103d857610179565b806306fdde031461017e578063095ea7b3146101fb57806318160ddd1461023b57806320606b701461025557806323b872dd1461025d578063313ce56714610293575b600080fd5b6101866105da565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c05781810151838201526020016101a8565b50505050905090810190601f1680156101ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102276004803603604081101561021157600080fd5b506001600160a01b038135169060200135610670565b604080519115158252519081900360200190f35b61024361068e565b60408051918252519081900360200190f35b610243610694565b6102276004803603606081101561027357600080fd5b506001600160a01b038135811691602081013590911690604001356106b8565b61029b61073f565b6040805160ff9092168252519081900360200190f35b610227600480360360408110156102c757600080fd5b506001600160a01b038135169060200135610748565b610309600480360360408110156102f357600080fd5b506001600160a01b038135169060200135610796565b005b6103316004803603602081101561032157600080fd5b50356001600160a01b031661082b565b604080516001600160a01b039092168252519081900360200190f35b6103096004803603602081101561036357600080fd5b50356001600160a01b0316610849565b6103996004803603602081101561038957600080fd5b50356001600160a01b0316610856565b6040805163ffffffff9092168252519081900360200190f35b610243600480360360208110156103c857600080fd5b50356001600160a01b031661086e565b610309610889565b610243600480360360408110156103f657600080fd5b506001600160a01b038135169060200135610935565b6102436004803603602081101561042257600080fd5b50356001600160a01b0316610b3d565b610331610b4f565b610331610b5e565b610186610b6d565b6102276004803603602081101561046057600080fd5b5035610bce565b6102276004803603604081101561047d57600080fd5b506001600160a01b038135169060200135610c4b565b610227600480360360408110156104a957600080fd5b506001600160a01b038135169060200135610cb3565b610243600480360360208110156104d557600080fd5b50356001600160a01b0316610cc7565b610309600480360360c08110156104fb57600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610d2b565b6102436004803603604081101561054257600080fd5b506001600160a01b0381358116916020013516610f9e565b610243610fc9565b6105946004803603604081101561057857600080fd5b5080356001600160a01b0316906020013563ffffffff16610fed565b6040805163ffffffff909316835260208301919091528051918290030190f35b610309600480360360208110156105ca57600080fd5b50356001600160a01b031661101a565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106665780601f1061063b57610100808354040283529160200191610666565b820191906000526020600020905b81548152906001019060200180831161064957829003601f168201915b5050505050905090565b600061068461067d61111c565b8484611120565b5060015b92915050565b60035490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b60006106c584848461120c565b610735846106d161111c565b610730856040518060600160405280602881526020016119dc602891396001600160a01b038a1660009081526002602052604081209061070f61111c565b6001600160a01b03168152602081019190915260400160002054919061135e565b611120565b5060019392505050565b60065460ff1690565b600061068461075561111c565b84610730856002600061076661111c565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906113f5565b61079e61111c565b6001600160a01b03166107af610b5e565b6001600160a01b0316146107f8576040805162461bcd60e51b81526020600482018190526024820152600080516020611a2a833981519152604482015290519081900360640190fd5b610802828261144f565b6001600160a01b03808316600090815260076020526040812054610827921683611535565b5050565b6001600160a01b039081166000908152600760205260409020541690565b6108533382611677565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b61089161111c565b6001600160a01b03166108a2610b5e565b6001600160a01b0316146108eb576040805162461bcd60e51b81526020600482018190526024820152600080516020611a2a833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60004382106109755760405162461bcd60e51b8152600401808060200182810382526026815260200180611a046026913960400191505060405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff16806109a3576000915050610688565b6001600160a01b038416600090815260086020908152604080832063ffffffff600019860181168552925290912054168310610a12576001600160a01b03841660009081526008602090815260408083206000199490940163ffffffff16835292905220600101549050610688565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff16831015610a4d576000915050610688565b600060001982015b8163ffffffff168163ffffffff161115610b0657600282820363ffffffff16048103610a7f611930565b506001600160a01b038716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610ae1576020015194506106889350505050565b805163ffffffff16871115610af857819350610aff565b6001820392505b5050610a55565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610b59610b5e565b905090565b6000546001600160a01b031690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106665780601f1061063b57610100808354040283529160200191610666565b6000610bd861111c565b6001600160a01b0316610be9610b5e565b6001600160a01b031614610c32576040805162461bcd60e51b81526020600482018190526024820152600080516020611a2a833981519152604482015290519081900360640190fd5b610c43610c3d61111c565b8361144f565b506001919050565b6000610684610c5861111c565b8461073085604051806060016040528060258152602001611ab46025913960026000610c8261111c565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061135e565b6000610684610cc061111c565b848461120c565b6001600160a01b03811660009081526009602052604081205463ffffffff1680610cf2576000610d24565b6001600160a01b038316600090815260086020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610d566105da565b80519060200120610d6561170c565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401835280519085012061190160f01b6101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a90526102228601899052935192965090949293909260019261024280840193601f198301929081900390910190855afa158015610e98573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610eea5760405162461bcd60e51b8152600401808060200182810382526025815260200180611ad96025913960400191505060405180910390fd5b6001600160a01b0381166000908152600a602052604090208054600181019091558914610f485760405162461bcd60e51b8152600401808060200182810382526021815260200180611a936021913960400191505060405180910390fd5b87421115610f875760405162461bcd60e51b81526004018080602001828103825260258152602001806119b76025913960400191505060405180910390fd5b610f91818b611677565b505050505b505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b61102261111c565b6001600160a01b0316611033610b5e565b6001600160a01b03161461107c576040805162461bcd60e51b81526020600482018190526024820152600080516020611a2a833981519152604482015290519081900360640190fd5b6001600160a01b0381166110c15760405162461bcd60e51b81526004018080602001828103825260268152602001806119916026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b0383166111655760405162461bcd60e51b815260040180806020018281038252602481526020018061196d6024913960400191505060405180910390fd5b6001600160a01b0382166111aa5760405162461bcd60e51b8152600401808060200182810382526022815260200180611b316022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166112515760405162461bcd60e51b81526004018080602001828103825260258152602001806119486025913960400191505060405180910390fd5b6001600160a01b0382166112965760405162461bcd60e51b8152600401808060200182810382526023815260200180611a706023913960400191505060405180910390fd5b6112d381604051806060016040528060268152602001611a4a602691396001600160a01b038616600090815260016020526040902054919061135e565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461130290826113f5565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156113ed5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113b257818101518382015260200161139a565b50505050905090810190601f1680156113df5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610d24576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b0382166114aa576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546114b790826113f5565b6003556001600160a01b0382166000908152600160205260409020546114dd90826113f5565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b0316141580156115575750600081115b15611672576001600160a01b038316156115e9576001600160a01b03831660009081526009602052604081205463ffffffff1690816115975760006115c9565b6001600160a01b038516600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006115d78285611710565b90506115e58684848461176d565b5050505b6001600160a01b03821615611672576001600160a01b03821660009081526009602052604081205463ffffffff169081611624576000611656565b6001600160a01b038416600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b9050600061166482856113f5565b9050610f968584848461176d565b505050565b6001600160a01b038083166000908152600760205260408120549091169061169e8461086e565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611706828483611535565b50505050565b4690565b600082821115611767576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600061179143604051806060016040528060338152602001611afe603391396118d2565b905060008463ffffffff161180156117da57506001600160a01b038516600090815260086020908152604080832063ffffffff6000198901811685529252909120548282169116145b15611817576001600160a01b038516600090815260086020908152604080832063ffffffff60001989011684529091529020600101829055611888565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600884528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260099092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b60008164010000000084106119285760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156113b257818101518382015260200161139a565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734547473a3a64656c656761746542795369673a207369676e6174757265206578706972656442455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654547473a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e65644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657242455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f20616464726573734547473a3a64656c656761746542795369673a20696e76616c6964206e6f6e636542455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f4547473a3a64656c656761746542795369673a20696e76616c6964207369676e61747572654547473a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747342455032303a20617070726f766520746f20746865207a65726f2061646472657373a264697066735822122067e5f616a1dae19575d6d41863d723b9b335f835a10411dc81414acfe827435564736f6c634300060c0033";
