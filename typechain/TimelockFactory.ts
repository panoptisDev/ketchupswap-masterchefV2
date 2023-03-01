/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Timelock } from "./Timelock";

export class TimelockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): TimelockFactory {
    return super.connect(signer) as TimelockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
    name: "admin_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161194b38038061194b8339818101604052604081101561003357600080fd5b50805160209091015161546081101561007d5760405162461bcd60e51b81526004018080602001828103825260378152602001806119146037913960400191505060405180910390fd5b62278d008111156100bf5760405162461bcd60e51b815260040180806020018281038252603b8152602001806118d9603b913960400191505060405180910390fd5b600080546001600160a01b039093166001600160a01b0319909316929092179091556002556003805460ff191690556117dc806100fd6000396000f3fe6080604052600436106100c15760003560e01c80636fc1f57e1161006f5780636fc1f57e146105be5780637d645fab146105e7578063b1b43ae5146105fc578063c1a287e214610611578063e177246e14610626578063f2b0653714610650578063f851a4401461067a576100c8565b80630825f38f146100cd5780630e18b6811461028257806326782247146102995780633a66f901146102ca5780634dd18bf514610429578063591fcdfe1461045c5780636a42b8f8146105a9576100c8565b366100c857005b600080fd5b61020d600480360360a08110156100e357600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561011257600080fd5b82018360208201111561012457600080fd5b803590602001918460018302840111600160201b8311171561014557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561019757600080fd5b8201836020820111156101a957600080fd5b803590602001918460018302840111600160201b831117156101ca57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061068f915050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024757818101518382015260200161022f565b50505050905090810190601f1680156102745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028e57600080fd5b50610297610b8f565b005b3480156102a557600080fd5b506102ae610c2b565b604080516001600160a01b039092168252519081900360200190f35b3480156102d657600080fd5b50610417600480360360a08110156102ed57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561031c57600080fd5b82018360208201111561032e57600080fd5b803590602001918460018302840111600160201b8311171561034f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103a157600080fd5b8201836020820111156103b357600080fd5b803590602001918460018302840111600160201b831117156103d457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610c3a915050565b60408051918252519081900360200190f35b34801561043557600080fd5b506102976004803603602081101561044c57600080fd5b50356001600160a01b0316610f3c565b34801561046857600080fd5b50610297600480360360a081101561047f57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104ae57600080fd5b8201836020820111156104c057600080fd5b803590602001918460018302840111600160201b831117156104e157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561053357600080fd5b82018360208201111561054557600080fd5b803590602001918460018302840111600160201b8311171561056657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250611031915050565b3480156105b557600080fd5b506104176112de565b3480156105ca57600080fd5b506105d36112e4565b604080519115158252519081900360200190f35b3480156105f357600080fd5b506104176112ed565b34801561060857600080fd5b506104176112f4565b34801561061d57600080fd5b506104176112fa565b34801561063257600080fd5b506102976004803603602081101561064957600080fd5b5035611301565b34801561065c57600080fd5b506105d36004803603602081101561067357600080fd5b50356113f5565b34801561068657600080fd5b506102ae61140a565b6000546060906001600160a01b031633146106db5760405162461bcd60e51b815260040180806020018281038252603881526020018061147f6038913960400191505060405180910390fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610741578181015183820152602001610729565b50505050905090810190601f16801561076e5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156107a1578181015183820152602001610789565b50505050905090810190601f1680156107ce5780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291815281516020928301206000818152600490935291205490995060ff16975061083f96505050505050505760405162461bcd60e51b815260040180806020018281038252603d81526020018061160d603d913960400191505060405180910390fd5b82610848611419565b10156108855760405162461bcd60e51b81526004018080602001828103825260458152602001806115216045913960600191505060405180910390fd5b610892836212750061141d565b61089a611419565b11156108d75760405162461bcd60e51b81526004018080602001828103825260338152602001806114ee6033913960400191505060405180910390fd5b6000818152600460205260409020805460ff1916905584516060906108fd575083610980565b85805190602001208560405160200180836001600160e01b031916815260040182805190602001908083835b602083106109485780518252601f199092019160209182019101610929565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b60006060896001600160a01b031689846040518082805190602001908083835b602083106109bf5780518252601f1990920191602091820191016109a0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610a21576040519150601f19603f3d011682016040523d82523d6000602084013e610a26565b606091505b509150915081610a675760405162461bcd60e51b815260040180806020018281038252603d8152602001806116f0603d913960400191505060405180910390fd5b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610ae4578181015183820152602001610acc565b50505050905090810190601f168015610b115780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610b44578181015183820152602001610b2c565b50505050905090810190601f168015610b715780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39998505050505050505050565b6001546001600160a01b03163314610bd85760405162461bcd60e51b815260040180806020018281038252603881526020018061164a6038913960400191505060405180910390fd5b60008054336001600160a01b031991821617808355600180549092169091556040516001600160a01b03909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b6001546001600160a01b031681565b600080546001600160a01b03163314610c845760405162461bcd60e51b81526004018080602001828103825260368152602001806116ba6036913960400191505060405180910390fd5b610c98600254610c92611419565b9061141d565b821015610cd65760405162461bcd60e51b815260040180806020018281038252604981526020018061172d6049913960600191505060405180910390fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610d3c578181015183820152602001610d24565b50505050905090810190601f168015610d695780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610d9c578181015183820152602001610d84565b50505050905090810190601f168015610dc95780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060016004600083815260200190815260200160002060006101000a81548160ff021916908315150217905550866001600160a01b0316817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610e94578181015183820152602001610e7c565b50505050905090810190601f168015610ec15780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610ef4578181015183820152602001610edc565b50505050905090810190601f168015610f215780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39695505050505050565b60035460ff1615610f8a57333014610f855760405162461bcd60e51b81526004018080602001828103825260388152602001806116826038913960400191505060405180910390fd5b610fe1565b6000546001600160a01b03163314610fd35760405162461bcd60e51b815260040180806020018281038252603b81526020018061159a603b913960400191505060405180910390fd5b6003805460ff191660011790555b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b0316331461107a5760405162461bcd60e51b81526004018080602001828103825260378152602001806114b76037913960400191505060405180910390fd5b6000858585858560405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156110e05781810151838201526020016110c8565b50505050905090810190601f16801561110d5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015611140578181015183820152602001611128565b50505050905090810190601f16801561116d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060006004600083815260200190815260200160002060006101000a81548160ff021916908315150217905550856001600160a01b0316817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015611238578181015183820152602001611220565b50505050905090810190601f1680156112655780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015611298578181015183820152602001611280565b50505050905090810190601f1680156112c55780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60025481565b60035460ff1681565b62278d0081565b61546081565b6212750081565b33301461133f5760405162461bcd60e51b81526004018080602001828103825260318152602001806117766031913960400191505060405180910390fd5b6154608110156113805760405162461bcd60e51b81526004018080602001828103825260348152602001806115666034913960400191505060405180910390fd5b62278d008111156113c25760405162461bcd60e51b81526004018080602001828103825260388152602001806115d56038913960400191505060405180910390fd5b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b60046020526000908152604090205460ff1681565b6000546001600160a01b031681565b4290565b600082820183811015611477576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2046697273742063616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e20657865637574696f6e2072657665727465642e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792e54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2ea2646970667358221220f386103c2817ebdf5002e6b34f36187b6461b566bcb2ac4d25a72b7b42682ac264736f6c634300060c003354696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e";